import { createSelector } from 'reselect';
import { RootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the AuthHelper state domain
 */

const selectDomain = (state: RootState) => state.authHelper || initialState;

/**
 *
 */

export const selectLoading = createSelector(
  [selectDomain],
  (substate) => substate.loading,
);

export const selectError = createSelector(
  [selectDomain],
  (substate) => substate.error,
);

export const selectUser = createSelector(
  [selectDomain],
  (substate) => substate.user,
);

export const selectToken = createSelector(
  [selectDomain],
  (substate) => substate.token,
);

export const selectGoogleLink = createSelector(
  [selectDomain],
  (substate) => substate.googleLink,
);

export const selectMessagingToken = createSelector(
  [selectDomain],
  (substate) => substate.messaging_token,
);
