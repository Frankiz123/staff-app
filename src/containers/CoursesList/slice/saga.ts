import { AnyAction } from 'redux';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { getCoursesErrorAction, getCoursesSuccessAction } from './actions';

import { GET_COURSES, WebService } from './constants';
import { request } from 'utils';

export function* getCourses({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_COURSES, {
        ...payload,
      });
    });

    yield put(getCoursesSuccessAction(response.data?.courses));
  } catch (error) {
    yield put(getCoursesErrorAction(error));
  }
}

// Individual exports for testing
export default function* coursesListSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_COURSES, getCourses);
}
