import { AnyAction } from 'redux';
import { call, put, takeLatest } from 'redux-saga/effects';

import {
  setSelectedStaffAction,
  getStaffAvailabilitySuccessAction,
  getStaffAvailabilityErrorAction,
  getStaffAppointmentSuccessAction,
  getStaffAppointmentErrorAction,
  createAppointmentAction,
  createAppointmentErrorAction,
  createAppointmentSuccessAction,
} from './actions';

import { SCREENS } from 'navigators/constants';
import { navigate } from 'utils/rootNavigation';

import {
  SET_SELECTED_STAFF,
  WebService,
  GET_STAFF_AVAILABILITY,
  GET_STAFF_APPOINTMENT,
  CREATE_APPOINTMENT,
} from './constants';
import { request } from 'utils';
import { showAlertAction } from 'providers/AlertsProvider/actions';
import { translate } from 'i18n';
import messages from '../messages';

export function* createAppointment({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.CREATE_APPOINTMENT, {
        ...payload,
      });
    });
    if (['success', 'ok', 'OK'].includes(response.type)) {
      yield put(createAppointmentSuccessAction(response.data));
      yield put(
        showAlertAction({
          title: translate(
            messages.blockedAdded.scope,
            messages.blockedAdded.options,
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
          title: response.message,
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

export function* getStaffAvailability({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_STAFF_AVAILABILITY, {
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

export function* getStaffAppointments({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_STAFF_APPOINTMENT, {
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
export default function* busyTimeSaga() {
  yield takeLatest(CREATE_APPOINTMENT, createAppointment);
  yield takeLatest(GET_STAFF_AVAILABILITY, getStaffAvailability);
  yield takeLatest(GET_STAFF_APPOINTMENT, getStaffAppointments);
}
