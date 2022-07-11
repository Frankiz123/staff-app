import { AnyAction } from 'redux';
import { call, takeLatest, put } from 'redux-saga/effects';
import {
  getAppointmentsErrorAction,
  getAppointmentsSuccessAction,
} from './actions';

import {
  GET_APPOINTMENTS,
  SEARCH_APPOINTMENTS_BY_CLIENT_NAME,
  WebService,
} from './constants';
import { request } from 'utils';

export function* getAppointments({ routeName, payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(routeName, {
        ...payload,
      });
    });

    yield put(
      getAppointmentsSuccessAction(
        response.data.map((item: any) => ({
          title: item.title,
          start: new Date(
            item.date?.split('-')[0],
            +item.date?.split('-')[1] - 1,
            item.date?.split('-')[2],
            item.time?.split(':')[0],
            item.time?.split(':')[1],
            item.time?.split(':')[2],
          ),
          end: new Date(
            item.date?.split('-')[0],
            +item.date?.split('-')[1] - 1,
            item.date?.split('-')[2],
            item.time?.split(':')[0],
            +item.time?.split(':')[1] + +item.duration,
            item.time?.split(':')[2],
          ),
          id: item.id,
          type: item.type,
          status: item.status,
          // ...item,
        })),
      ),
    );
  } catch (error) {
    yield put(getAppointmentsErrorAction(error));
  }
}

export function* searchAppointments({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(
        WebService.SEARCH_APPOINTMENTS_BY_CLIENT_NAME,
        {
          ...payload,
        },
      );
    });

    yield put(
      getAppointmentsSuccessAction(
        response.data.map((item: any) => ({
          title: item.title,
          start: new Date(
            item.date?.split('-')[0],
            +item.date?.split('-')[1] - 1,
            item.date?.split('-')[2],
            item.time?.split(':')[0],
            item.time?.split(':')[1],
            item.time?.split(':')[2],
          ),
          end: new Date(
            item.date?.split('-')[0],
            +item.date?.split('-')[1] - 1,
            item.date?.split('-')[2],
            item.time?.split(':')[0],
            +item.time?.split(':')[1] + +item.duration,
            item.time?.split(':')[2],
          ),
          id: item.id,
          type: item.type,
          status: item.status,
          date: item.date,
          time: item.time,
          staff_nickname: item.staff_nickname,
          // ...item,
        })),
      ),
    );
  } catch (error) {
    yield put(getAppointmentsErrorAction(error));
  }
}

// Individual exports for testing
export default function* appointmentListSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_APPOINTMENTS, getAppointments);
  yield takeLatest(SEARCH_APPOINTMENTS_BY_CLIENT_NAME, searchAppointments);
}
