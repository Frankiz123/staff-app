import { AnyAction } from 'redux';
import { call, takeLatest, put, takeEvery, select } from 'redux-saga/effects';

import {
  getClientsSuccessAction,
  getCLientsErrorAction,
  getClientsSearchSuccessAction,
  getClientsSearchErrorAction,
} from './actions';

import { GET_CLIENTS, GET_CLIENTS_SEARCH, WebService } from './constants';
import { request } from 'utils';
import { selectLimit, selectOffset } from './selectors';
import { showAlertAction } from 'providers/AlertsProvider/actions';

export function* getClients({ payload }: AnyAction) {
  const offset: number = yield select(selectOffset);
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_CLIENTS, {
        from: offset,
        to: 10,
      });
    });
    if (['success', 'ok', 'OK'].includes(response.type)) {
      yield put(getClientsSuccessAction(response.data));
    } else {
      yield put(getCLientsErrorAction(response.message));

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
    yield put(getCLientsErrorAction(error));
  }
}

export function* getClientSearch({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_CLIENTS_SEARCH, {
        ...payload,
      });
    });
    if (['notice'].includes(response?.type)) {
      yield put(getClientsSearchErrorAction(response.data));
      yield put(
        showAlertAction({
          title: response.data,
          duration: 3000,
          gravity: 'top',
          type: 'warning',
        }),
      );
    } else {
      yield put(getClientsSearchSuccessAction(response));
    }
  } catch (error) {
    yield put(getClientsSearchErrorAction(error));
  }
}

// Individual exports for testing
export default function* staffListSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_CLIENTS, getClients);
  yield takeLatest(GET_CLIENTS_SEARCH, getClientSearch);
}
