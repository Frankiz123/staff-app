import { createSelector } from 'reselect';
import { RootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the AppointmentsList state domain
 */

const selectDomain = (state: RootState) => state.newClientState || initialState;

/**
 * Other specific selectors
 */

export const selectClientSuccess = createSelector(
  [selectDomain],
  (substate) => substate.client,
);

export const selectLoading = createSelector(
  [selectDomain],
  (substate) => substate.loading,
);

export const selectError = createSelector(
  [selectDomain],
  (substate) => substate.error,
);
