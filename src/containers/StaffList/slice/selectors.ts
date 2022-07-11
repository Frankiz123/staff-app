import { createSelector } from 'reselect';
import { RootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the AppointmentsList state domain
 */

const selectDomain = (state: RootState) => state.staffList || initialState;

/**
 * Other specific selectors
 */

export const selectLoading = createSelector(
  [selectDomain],
  (substate) => substate.loading,
);

export const selectError = createSelector(
  [selectDomain],
  (substate) => substate.error,
);

export const selectStaffFilterShown = createSelector(
  [selectDomain],
  (substate) => substate.staffFilterShown,
);

export const selectStaffList = createSelector(
  [selectDomain],
  (substate) => substate.staffList,
);

export const selectSelectedStaffId = createSelector(
  [selectDomain],
  (substate) => substate.selectedStaffId,
);
