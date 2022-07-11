import { AnyAction } from 'redux';
import { call, takeLatest, put } from 'redux-saga/effects';

import { getServicesErrorAction, getServicesSuccessAction } from './actions';

import { GET_SERVICES, WebService } from './constants';
import { request } from 'utils';

export function* getServices({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_SERVICES, {
        ...payload,
      });
    });

    yield put(getServicesSuccessAction(response.data));
  } catch (error) {
    yield put(getServicesErrorAction(error));
  }
}

// Individual exports for testing
export default function* servicesListSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_SERVICES, getServices);
}
