import { AnyAction } from 'redux';
import { call, takeLatest, put } from 'redux-saga/effects';

import { getStaffErrorAction, getStaffSuccessAction } from './actions';

import { GET_STAFF, WebService } from './constants';
import { request } from 'utils';

export function* getStaff({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_STAFF, {
        ...payload,
      });
    });

    yield put(getStaffSuccessAction(response.data));
  } catch (error) {
    yield put(getStaffErrorAction(error));
  }
}

// Individual exports for testing
export default function* staffListSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_STAFF, getStaff);
}
