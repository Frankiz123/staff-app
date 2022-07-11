import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCurrency } from 'containers/CurrencyHelper/slice/saga';
import { Alert } from 'react-native';
import { AnyAction } from 'redux';
import { call, takeLatest, put, all } from 'redux-saga/effects';
import { request } from 'utils';
import {
  addClientAction,
  addClientErrorAction,
  addClientSuccessAction,
} from './actions';
import {
  ADD_CLIENT,
  ADD_CLIENT_ERROR,
  ADD_CLIENT_SUCCESS,
  WebService,
} from './constants';

export function* addClient({ data }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.ADD_CLIENT, {
        ...data,
      });
    });
    console.log('response', data);
    if (response.type == 'error') {
      yield put(addClientErrorAction(response));
    } else {
      console.log('success i guess');
    }
  } catch (error) {
    console.log(error);
  }
}

// Individual exports for testing
export default function* newClientSaga() {
  yield takeLatest(ADD_CLIENT, addClient);
}
