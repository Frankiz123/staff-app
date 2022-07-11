/**
 *
 */
import {
  GET_NEWS_FEED,
  GET_NEWS_FEED_SUCCESS,
  GET_NEWS_FEED_ERROR,
} from './constants';
import { NewsFeedTypes } from './types';

/*** */
export function getNewsFeedAction(payload: {
  page: number;
  limit: number;
  start_date: string;
  end_date: string;
  filters: string;
  newFeedKey: NewsFeedTypes;
}) {
  return { type: GET_NEWS_FEED, payload };
}
export function getNewsFeedSuccessAction(
  newFeedKey: string,
  newsFeedList: any,
) {
  return { type: GET_NEWS_FEED_SUCCESS, newFeedKey, newsFeedList };
}
export function getNewsFeedErrorAction(newFeedKey: string, error: any) {
  return { type: GET_NEWS_FEED_ERROR, newFeedKey, error };
}
