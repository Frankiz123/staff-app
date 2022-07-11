import { AnyAction } from 'redux';
import { call, put, takeEvery } from 'redux-saga/effects';

import { getBookingErrorAction, getBookingSuccessAction } from './actions';

import { GET_BOOKING, WebService } from './constants';
import { request } from 'utils';

export function* getBooking({ bookingId }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_BOOKING, {
        appointment_id: bookingId,
      });
    });

    yield put(getBookingSuccessAction(response.data[0]));
  } catch (error) {
    yield put(getBookingErrorAction(error));
  }
}

// Individual exports for testing
export default function* bookingDetailsSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(GET_BOOKING, getBooking);
}
