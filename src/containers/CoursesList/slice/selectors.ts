import { createSelector } from 'reselect';
import { RootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the CoursesList state domain
 */

const selectDomain = (state: RootState) => state.coursesList || initialState;

/**
 * Other specific selectors
 */

export const selectCourses = createSelector(
  [selectDomain],
  (substate) => substate.courses,
);

export const selectError = createSelector(
  [selectDomain],
  (substate) => substate.error,
);

export const selectLoading = createSelector(
  [selectDomain],
  (substate) => substate.loading,
);
