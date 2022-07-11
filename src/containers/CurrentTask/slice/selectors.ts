import { createSelector } from 'reselect';
import { RootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the currentTask state domain
 */

const selectDomain = (state: RootState) => state.currentTask || initialState;

/**
 * Other specific selectors
 */

export const selectCurrentTask = createSelector(
  [selectDomain],
  (substate) => substate.task,
);

export const selectError = createSelector(
  [selectDomain],
  (substate) => substate.error,
);

export const selectLoading = createSelector(
  [selectDomain],
  (substate) => substate.loading,
);
