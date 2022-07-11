import { AnyAction } from 'redux';
import { call, takeLatest, put } from 'redux-saga/effects';
import { request } from 'utils';
import { getClientErrorAction, getClientSuccessAction } from './actions';
import { GET_CLIENT, WebService } from './constants';

export function* getClient({ id }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_CLIENT, {
        id,
      });
    });

    if (['success', 'ok', 'OK'].includes(response.type)) {
      yield put(getClientSuccessAction(response.data));
    } else {
      yield put(getClientErrorAction(response.message));
    }
  } catch (error) {
    yield put(getClientErrorAction(error));
  }
}

// Individual exports for testing
export default function* currentClientSaga() {
  yield takeLatest(GET_CLIENT, getClient);
}
