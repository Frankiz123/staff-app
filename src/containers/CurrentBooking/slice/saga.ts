import { AnyAction } from 'redux';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import {
  cancelAppointmentErrorAction,
  cancelAppointmentSuccessAction,
  createAppointmentErrorAction,
  createAppointmentSuccessAction,
  getCancellationFeesErrorAction,
  getCancellationFeesSuccessAction,
  getStaffAppointmentErrorAction,
  getStaffAppointmentSuccessAction,
  getStaffAvailabilityErrorAction,
  getStaffAvailabilitySuccessAction,
  initiateBookingAction,
  updateAppointmentErrorAction,
  updateAppointmentSuccessAction,
} from './actions';

import {
  CANCEL_APPOINTMENT,
  CREATE_APPOINTMENT,
  GET_BOOKING_CANCELATION_FEES,
  GET_STAFF_APPOINTMENT,
  GET_STAFF_AVAILABILITY,
  UPDATE_APPOINTMENT,
  WebService,
} from './constants';
import { request } from 'utils';
import { navigate } from 'utils/rootNavigation';
import { getBookingAction } from 'containers/BookingDetails/slice/actions';
import { initialState } from './reducer';
import { showAlertAction } from 'providers/AlertsProvider/actions';
import messages from 'screens/staff/Appointment/messages';
import { translate } from 'i18n';
import { selectSelectedCancellationFee } from './selectors';
import { ICancellFeeType, ICurrentBooking } from './types';
import { selectBooking } from 'containers/BookingDetails/slice/selectors';
import { SCREENS } from 'navigators/constants';

export function* createAppointment({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.CREATE_APPOINTMENT, {
        ...payload,
      });
    });
    if (['success', 'ok', 'OK'].includes(response.type)) {
      yield put(createAppointmentSuccessAction(response.data));
      yield put(initiateBookingAction(initialState.booking, 3));
      yield put(
        showAlertAction({
          title: translate(
            messages.addAppointmentSuccess.scope,
            messages.addAppointmentSuccess.options,
          ),
          duration: 3000,
          gravity: 'top',
          type: 'success',
        }),
      );
      navigate(SCREENS.BOOKINGS as never);
    } else {
      yield put(createAppointmentErrorAction(response.message));
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
    yield put(createAppointmentErrorAction(error));
  }
}
export function* updateAppointment({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.UPDATE_APPOINTMENT, {
        ...payload,
      });
    });
    if (['success', 'ok', 'OK'].includes(response.type)) {
      yield put(updateAppointmentSuccessAction(payload?.appointment_id));
      yield put(initiateBookingAction(initialState.booking, 4));
      yield put(getBookingAction(payload?.appointment_id));
      yield put(
        showAlertAction({
          title: translate(
            messages.updateAppointmentSuccess.scope,
            messages.updateAppointmentSuccess.options,
          ),
          duration: 3000,
          gravity: 'top',
          type: 'success',
        }),
      );
      navigate(SCREENS.BOOKINGS as never);
    } else {
      yield put(updateAppointmentErrorAction(response.message));
      yield put(
        showAlertAction({
          title: response.message,
          duration: 3000,
          gravity: 'top',
          type: 'error',
        }),
      );
    }
  } catch (error) {
    yield put(updateAppointmentErrorAction(error));
  }
}
export function* cancelAppointment({ payload }: AnyAction) {
  try {
    const selectedCancellationFee: ICancellFeeType = yield select(
      selectSelectedCancellationFee,
    );
    const booking: ICurrentBooking = yield select(selectBooking);
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.CANCEL_APPOINTMENT, {
        appointment_id: booking.id,
        cancellation: 'by_phone',
        cancellation_fee_value: selectedCancellationFee.value,
        hours_diff: selectedCancellationFee.hours,
        cancellation_fee_method: 'balance',
      });
    });

    if (['success', 'ok', 'OK'].includes(response.type)) {
      yield put(cancelAppointmentSuccessAction());
      yield put(initiateBookingAction(initialState.booking, 5));
      yield put(
        showAlertAction({
          title: translate(
            messages.cancelAppointmentSuccess.scope,
            messages.cancelAppointmentSuccess.options,
          ),
          duration: 3000,
          gravity: 'top',
          type: 'success',
        }),
      );
      navigate(SCREENS.BOOKINGS as never);
    } else {
      yield put(cancelAppointmentErrorAction(response.message));
      yield put(
        showAlertAction({
          title: response.message,
          duration: 3000,
          gravity: 'top',
          type: 'error',
        }),
      );
    }
  } catch (error) {
    yield put(cancelAppointmentErrorAction(error));
  }
}

export function* getStaffAppointments({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_STAFF_APPOINTMENTS, {
        ...payload,
      });
    });
    if (['success', 'ok', 'OK'].includes(response.type)) {
      yield put(getStaffAppointmentSuccessAction(response.data));
    } else {
      yield put(getStaffAppointmentErrorAction(response.message));
    }
  } catch (error) {
    yield put(getStaffAppointmentErrorAction(error));
  }
}

export function* getStaffAvailability({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_STAFF_AVAILABILTY, {
        ...payload,
      });
    });
    if (['success', 'ok', 'OK'].includes(response.type)) {
      yield put(
        getStaffAvailabilitySuccessAction({
          time_in_set: response.data.time_in_set,
          time_out_set: response.data.time_out_set,
        }),
      );
    } else {
      yield put(getStaffAvailabilityErrorAction(response.message));
    }
  } catch (error) {
    yield put(getStaffAvailabilityErrorAction(error));
  }
}

export function* getCancellationFees({}: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(
        WebService.GET_BOOKING_CANCELATION_FEES,
        {},
      );
    });
    if (['success', 'ok', 'OK'].includes(response.type)) {
      yield put(getCancellationFeesSuccessAction(response.data));
    } else {
      yield put(getCancellationFeesErrorAction(response.error));
    }
  } catch (error) {
    yield put(getCancellationFeesErrorAction(error));
  }
}

// Individual exports for testing
export default function* currentBookingSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(CREATE_APPOINTMENT, createAppointment);
  yield takeLatest(UPDATE_APPOINTMENT, updateAppointment);
  yield takeLatest(CANCEL_APPOINTMENT, cancelAppointment);
  yield takeLatest(GET_STAFF_APPOINTMENT, getStaffAppointments);
  yield takeLatest(GET_STAFF_AVAILABILITY, getStaffAvailability);
  yield takeLatest(GET_BOOKING_CANCELATION_FEES, getCancellationFees);
}
