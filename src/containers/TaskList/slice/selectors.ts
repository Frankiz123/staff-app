import { createSelector } from 'reselect';
import { RootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the TaskList state domain
 */

const selectDomain = (state: RootState) => state.taskList || initialState;

/**
 * Other specific selectors
 */

export const selectTaskList = createSelector(
  [selectDomain],
  (substate) => substate.taskList,
);

export const selectLoading = createSelector(
  [selectDomain],
  (substate) => substate.loading,
);

export const selectError = createSelector(
  [selectDomain],
  (substate) => substate.error,
);

export const selectCounter = createSelector(
  [selectDomain],
  (substate) => substate.counter,
);

export const selectClient = createSelector(
  [selectDomain],
  (substate) => substate.client,
);

export const selectStaff = createSelector(
  [selectDomain],
  (substate) => substate.staff,
);

export const selectCategories = createSelector(
  [selectDomain],
  (substate) => substate.categories,
);
