import { createSelector } from 'reselect';
import { RootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the BookingDetails state domain
 */

const selectDomain = (state: RootState) => state.bookingDetails || initialState;

/**
 * Other specific selectors
 */

export const selectBooking = createSelector(
  [selectDomain],
  (substate) => substate.booking,
);

export const selectError = createSelector(
  [selectDomain],
  (substate) => substate.error,
);

export const selectLoading = createSelector(
  [selectDomain],
  (substate) => substate.loading,
);
