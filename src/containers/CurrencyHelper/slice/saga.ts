import { AnyAction } from 'redux';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { getCurrencyErrorAction, getCurrencySuccessAction } from './actions';

import { GET_CURRENCY, WebService } from './constants';
import { request } from 'utils';

export function* getCurrency({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_CURRENCY, {
        ...payload,
      });
    });

    yield put(getCurrencySuccessAction(response.data));
  } catch (error) {
    yield put(getCurrencyErrorAction(error));
  }
}

// Individual exports for testing
export default function* newsfeedListSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_CURRENCY, getCurrency);
}
