import { AnyAction } from 'redux';
import { call, takeLatest, put, take, takeEvery } from 'redux-saga/effects';
import {
  getTasksSuccessAction,
  getTasksErrorAction,
  getTasksCounterAction,
  getClientSuccessAction,
  getStaffSuccessAction,
  getStaffTasksCategoriesSuccess,
  getTasksCounterSuccessAction,
} from './actions';

import {
  GET_CLIENT,
  GET_STAFF,
  GET_STAFF_TASKS_CATEGORIES,
  GET_TASKS,
  GET_TASKS_COUNTER,
  WebService,
} from './constants';
import { request } from 'utils';

export function* getTasks({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_TODAY_TASKS, {
        ...payload,
      });
    });
    yield put(getTasksSuccessAction(response));
  } catch (error) {
    console.log(error);
    yield put(getTasksErrorAction(error));
  }
}

export function* getCounter({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_TASKS_COUNTER, {
        ...payload,
      });
    });
    yield put(getTasksCounterSuccessAction(response));
  } catch (error) {
    console.log(error);
  }
}

export function* getClient({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_CLIENT, {
        ...payload,
      });
    });
    yield put(getClientSuccessAction(response));
  } catch (error) {
    console.log(error);
  }
}

export function* getStaff({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_STAFF, {
        ...payload,
      });
    });
    yield put(getStaffSuccessAction(response));
  } catch (error) {
    console.log(error);
  }
}

export function* getCategories({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_STAFF_TASKS_CATEGORIES, {
        ...payload,
      });
    });
    yield put(getStaffTasksCategoriesSuccess(response));
  } catch (error) {
    console.log(error);
  }
}

// Individual exports for testing
export default function* taskListSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_TASKS, getTasks);
  yield takeLatest(GET_TASKS_COUNTER, getCounter);
  yield takeLatest(GET_CLIENT, getClient);
  yield takeLatest(GET_STAFF, getStaff);
  yield takeLatest(GET_STAFF_TASKS_CATEGORIES, getCategories);
}
