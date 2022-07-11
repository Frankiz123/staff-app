import { createSelector } from 'reselect';
import { RootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the taskAndNotesList state domain
 */

const selectDomain = (state: RootState) =>
  state.taskAndNotesList || initialState;

/**
 * Other specific selectors
 */

export const selectTaskList = createSelector(
  [selectDomain],
  (substate) => substate.taskList,
);

export const selectTaskCategories = createSelector(
  [selectDomain],
  (substate) => substate.categories,
);

export const selectTaskLabels = createSelector(
  [selectDomain],
  (substate) => substate.labels,
);

export const selectLoading = createSelector(
  [selectDomain],
  (substate) => substate.loading,
);

export const selectRefreshing = createSelector(
  [selectDomain],
  (substate) => substate.refreshing,
);

export const selectSearchText = createSelector(
  [selectDomain],
  (substate) => substate.searchText,
);

export const selectError = createSelector(
  [selectDomain],
  (substate) => substate.error,
);

export const selectFocusedTab = createSelector(
  [selectDomain],
  (substate) => substate.focusedTasksTab,
);

export const selectOffset = createSelector(
  [selectDomain],
  (substate) => substate.offset,
);
