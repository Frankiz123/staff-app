import { AnyAction } from 'redux';
import {
  call,
  takeLatest,
  put,
  take,
  takeEvery,
  select,
} from 'redux-saga/effects';
import {
  getTasksSuccessAction,
  getTasksErrorAction,
  getTasksCategoriesAction,
  getTasksCategoriesSuccessAction,
  getTasksCategoriesErrorAction,
  getTasksLabelsErrorAction,
  getTasksLabelsSuccessAction,
  getMoreTasksSuccessAction,
  getMoreTasksErrorAction,
} from './actions';

import {
  WebService,
  GET_TASKS,
  GET_TASKS_LABELS,
  GET_TASKS_CATEGORIES,
  GET_MORE_TASKS,
} from './constants';
import { request } from 'utils';
import { showAlertAction } from 'providers/AlertsProvider/actions';
import {
  selectFocusedTab,
  selectOffset,
  selectSearchText,
  selectTaskCategories,
  selectTaskLabels,
} from './selectors';

export function* getTasks() {
  const selectedTab: {
    name: string;
    filters: {
      status: string;
      due_to?: string;
      due_from?: string;
      is_deleted?: number;
    };
  } = yield select(selectFocusedTab);
  if (selectedTab.filters.status == 'DONT_SEND') return;

  const searchText: string = yield select(selectSearchText);
  const labels: Array<any> = yield select(selectTaskLabels);
  const categories: Array<any> = yield select(selectTaskCategories);

  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_TASKS, {
        labels: labels
          .filter((item: any) => item.selected)
          .map((item) => item.id),
        categories: categories
          .filter((item: any) => item.selected)
          .map((item) => item.id),
        title: searchText,
        offset: 0,
        limit: 20,
        ...selectedTab.filters,
      });
    });
    if (['success', 'ok', 'OK'].includes(response.type)) {
      yield put(getTasksSuccessAction(response.data));
    } else {
      yield put(
        showAlertAction({
          title: response.message,
          duration: 3000,
          gravity: 'top',
          type: 'error',
        }),
      );
      yield put(getTasksErrorAction(response.message));
    }
  } catch (error) {
    console.log(error);
    yield put(getTasksErrorAction(error));
  }
}

export function* getMoreTasks() {
  const selectedTab: {
    name: string;
    filters: {
      status: string;
      due_to?: string;
      due_from?: string;
      is_deleted?: number;
    };
  } = yield select(selectFocusedTab);
  if (selectedTab.filters.status == 'DONT_SEND') return;

  const offset: number = yield select(selectOffset);
  const searchText: string = yield select(selectSearchText);
  const labels: Array<any> = yield select(selectTaskLabels);
  const categories: Array<any> = yield select(selectTaskCategories);

  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_TASKS, {
        offset,
        limit: 20,
        labels: labels
          .filter((item: any) => item.selected)
          .map((item) => item.id),
        categories: categories
          .filter((item: any) => item.selected)
          .map((item) => item.id),
        title: searchText,
        ...selectedTab.filters,
      });
    });
    if (['success', 'ok', 'OK'].includes(response.type)) {
      yield put(getMoreTasksSuccessAction(response.data));
    } else {
      yield put(
        showAlertAction({
          title: response.message,
          duration: 3000,
          gravity: 'top',
          type: 'error',
        }),
      );
      yield put(getMoreTasksErrorAction(response.message));
    }
  } catch (error) {
    console.log(error);
    yield put(getMoreTasksErrorAction(error));
  }
}

export function* getLabels() {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_TASKS_LABELS, {});
    });
    if (['success', 'ok', 'OK'].includes(response.type)) {
      yield put(
        getTasksLabelsSuccessAction(
          response.data
            .filter((item: any) => item.is_deleted == 0)
            .map((item: any) => ({
              ...item,
              selected: false,
              color: ['#fff', '#ffffff'].includes(item.color.substring(0, 7))
                ? 'black'
                : item.color,
            })),
        ),
      );
    } else {
      yield put(
        showAlertAction({
          title: response.message,
          duration: 3000,
          gravity: 'top',
          type: 'error',
        }),
      );
      yield put(getTasksLabelsErrorAction(response.message));
    }
  } catch (error) {
    console.log(error);
    yield put(getTasksLabelsErrorAction(error));
  }
}

export function* getCategories() {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_TASKS_CATEGORIES, {});
    });
    // if (['success', 'ok', 'OK'].includes(response.type)) {
    yield put(
      getTasksCategoriesSuccessAction(
        response.data
          .filter((item: any) => item.is_deleted == 0)
          .map((item: any) => ({
            ...item,
            selected: false,
          })),
      ),
    );
    // } else {
    //   yield put(
    //     showAlertAction({
    //       title: response.message,
    //       duration: 3000,
    //       gravity: 'top',
    //       type: 'error',
    //     }),
    //   );
    //   yield put(getTasksCategoriesErrorAction(response.message));
    // }
  } catch (error) {
    console.log(error);
    yield put(getTasksCategoriesErrorAction(error));
  }
}

// Individual exports for testing
export default function* taskListSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_TASKS, getTasks);
  yield takeLatest(GET_MORE_TASKS, getMoreTasks);
  yield takeLatest(GET_TASKS_LABELS, getLabels);
  yield takeLatest(GET_TASKS_CATEGORIES, getCategories);
}
