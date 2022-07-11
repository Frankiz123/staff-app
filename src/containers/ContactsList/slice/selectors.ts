import { createSelector } from 'reselect';
import { RootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the AppointmentsList state domain
 */

const selectDomain = (state: RootState) => state.clientsList || initialState;

/**
 * Other specific selectors
 */

export const selectClientsList = createSelector(
  [selectDomain],
  (substate) => substate.clientsList,
);

export const selectLoading = createSelector(
  [selectDomain],
  (substate) => substate.loading,
);

export const selectRefreshing = createSelector(
  [selectDomain],
  (substate) => substate.refreshing,
);

export const selectError = createSelector(
  [selectDomain],
  (substate) => substate.error,
);

export const selectOffset = createSelector(
  [selectDomain],
  (substate) => substate.offset,
);

export const selectLimit = createSelector(
  [selectDomain],
  (substate) => substate.limit,
);

export const selectSeletedClient = createSelector(
  [selectDomain],
  (substate) => substate.selectedClient,
);

export const selectSearchResault = createSelector(
  [selectDomain],
  (substate) => substate.searchResult,
);
