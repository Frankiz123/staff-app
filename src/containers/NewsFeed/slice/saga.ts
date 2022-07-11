import { AnyAction } from 'redux';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { getNewsFeedErrorAction, getNewsFeedSuccessAction } from './actions';

import { GET_NEWS_FEED, WebService } from './constants';
import { request } from 'utils';

export function* getNewsFeed({ payload }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_NEWS_FEED, {
        ...payload,
      });
    });

    yield put(getNewsFeedSuccessAction(payload.newFeedKey, response.data));
  } catch (error) {
    yield put(getNewsFeedErrorAction(payload.newFeedKey, error));
  }
}

// Individual exports for testing
export default function* newsfeedListSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(GET_NEWS_FEED, getNewsFeed);
}
