/**
 *
 */

import { initiateBookingAction } from 'containers/CurrentBooking/slice/actions';
import { initialState } from 'containers/CurrentBooking/slice/reducer';
import { selectCurrentBooking } from 'containers/CurrentBooking/slice/selectors';
import { ICurrentBooking } from 'containers/currentBooking/slice/types';
import { SCREENS } from 'navigators/constants';
import { showAlertAction } from 'providers/AlertsProvider/actions';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from 'utils';
import { navigate } from 'utils/rootNavigation';

import {
  getPaymentHashAction,
  getPaymentHashErrorAction,
  getPaymentHashSuccessAction,
  getPaymentMethodsErrorAction,
  getPaymentMethodsSuccessAction,
  payAppointmentErrorAction,
  payAppointmentSuccessAction,
  togglePaymentModalAction,
  // updateAppointmentWithProductsErrorAction,
  // updateAppointmentWithProductsSuccessAction,
} from './actions';

import {
  GET_PAYMENT_HASH,
  GET_PAYMENT_METHODS,
  PAY_APPOINTMENT,
  // UPDATE_APPOINTMENT_WITH_PRODUCTS,
  WebService,
} from './constants';
import { makeSelectSelectedPaymentMethod } from './selectors';

export function* getPaymentMethods() {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_PAYMENT_METHODS, {});
    });

    if (['success', 'ok', 'OK'].includes(response?.type)) {
      yield put(getPaymentMethodsSuccessAction(response?.data));
    } else {
      yield put(
        getPaymentMethodsErrorAction({
          message: 'Failed to load payment methods!',
        }),
      );
    }
  } catch (error) {
    yield put(getPaymentMethodsErrorAction(error));
  }
}

export function* payAppointment() {
  try {
    const booking: ICurrentBooking = yield select(selectCurrentBooking);

    const { selectedPaymentMethod } = yield select(
      makeSelectSelectedPaymentMethod,
    );

    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.PAY_APPOINTMENT, {
        id: booking.id,
        payment_method: selectedPaymentMethod,
        voucher_code: '',
      });
    });

    if (['success', 'ok', 'OK'].includes(response.type)) {
      yield put(initiateBookingAction(initialState.booking, 6));
      navigate(SCREENS.BOOKINGS as never);
      yield put(payAppointmentSuccessAction());
    } else {
      yield put(payAppointmentErrorAction(response.error || response.message));
      yield put(
        showAlertAction({
          title: response.error || response.message,
          duration: 3000,
          gravity: 'top',
          type: 'error',
        }),
      );
    }
  } catch (error) {
    yield put(payAppointmentErrorAction('Could not set appointment as paid'));
    yield put(
      showAlertAction({
        title: 'Could not set appointment as paid',
        duration: 3000,
        gravity: 'top',
        type: 'error',
      }),
    );
  }
}

export function* getPaymentHash() {
  const booking: ICurrentBooking = yield select(selectCurrentBooking);

  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_PAYMENT_HASH, {
        booking_id: booking.id,
      });
    });

    if (
      ['success', 'OK', 'ok'].includes(response?.type) &&
      response?.data?.transaction_hash
    ) {
      yield all([
        put(getPaymentHashSuccessAction(response?.data?.transaction_hash)),
        put(togglePaymentModalAction(true)),
      ]);
    } else {
      yield put(
        getPaymentHashErrorAction({ message: 'Failed to get payment link!' }),
      );
    }
  } catch (error) {
    yield put(getPaymentHashErrorAction({ error }));
  }
}

// Individual exports for testing
export default function* payAppointmentAdapterSaga() {
  yield takeLatest(GET_PAYMENT_METHODS, getPaymentMethods);
  yield takeLatest(PAY_APPOINTMENT, payAppointment);
  yield takeLatest(GET_PAYMENT_HASH, getPaymentHash);
  // yield takeLatest(MODIFY_PAYMENT_METHOD_SUCCESS, getPaymentMethods);
}
