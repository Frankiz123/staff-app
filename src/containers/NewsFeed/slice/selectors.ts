import { createSelector } from 'reselect';
import { RootState } from 'types';
import { initialState } from './reducer';
import { NewsFeedTypes } from './types';

/**
 * Direct selector to the Newsfeed state domain
 */

const selectDomain = (state: RootState) => state.newsFeed || initialState;

/**
 * Other specific selectors
 */

export const selectNewsFeed = createSelector(
  [selectDomain],
  (substate) => substate.newsFeed,
);
export const selectError = createSelector(
  [selectDomain],
  (substate) => substate.error,
);
export const selectErrorByFilter = (filter: NewsFeedTypes) =>
  createSelector([selectDomain], (substate) => substate.error.get(filter));

export const selectNewsFeedByFilter = (filter: NewsFeedTypes) =>
  createSelector([selectDomain], (substate) => substate.newsFeed[filter]);

export const selectLoadingByFilter = (filter: NewsFeedTypes) =>
  createSelector([selectDomain], (substate) => substate.loading.get(filter));
