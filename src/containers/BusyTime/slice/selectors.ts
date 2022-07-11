import { createSelector } from 'reselect';
import { RootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the BookingDetails state domain
 */

const selectDomain = (state: RootState) => state.busyTime || initialState;

/**
 * Other specific selectors
 */

export const selectCurrentBusyTIme = createSelector(
  [selectDomain],
  (substate) => substate.busytime,
);

export const selectStaff = createSelector(
  [selectDomain],
  (substate) => substate.busytime.staff,
);

export const selectDate = createSelector(
  [selectDomain],
  (substate) => substate.busytime.date,
);

export const selectNotes = createSelector(
  [selectDomain],
  (substate) => substate.busytime.notes,
);

export const selectInsideBusyIntervals = createSelector(
  [selectDomain],
  (substate) => substate.busytime.insideBusyIntervals,
);

export const selectInsideShift = createSelector(
  [selectDomain],
  (substate) => substate.busytime.insideShift,
);
export const select = createSelector(
  [selectDomain],
  (substate) => substate.busytime.date,
);
export const selectError = createSelector(
  [selectDomain],
  (substate) => substate.error,
);

export const selectLoading = createSelector(
  [selectDomain],
  (substate) => substate.loading,
);

export const selectDuration = createSelector(
  [selectDomain],
  (substate) => substate.busytime.duration,
);
