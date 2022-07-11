import { createSelector } from 'reselect';
import { RootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the CurrentBooking state domain
 */

const selectDomain = (state: RootState) => state.currentBooking || initialState;

/**
 * Other specific selectors
 */

export const selectCurrentBooking = createSelector(
  [selectDomain],
  (substate) => substate.booking,
);

export const selectServices = createSelector(
  [selectDomain],
  (substate) => substate.booking.services,
);

export const selectProducts = createSelector(
  [selectDomain],
  (substate) => substate.booking.products,
);

export const selectAlreadyBooked = createSelector(
  [selectDomain],
  (substate) => substate.booking.alreadyBookedIntervalModalVisible,
);

export const selectId = createSelector(
  [selectDomain],
  (substate) => substate.booking.id,
);

export const selectCourses = createSelector(
  [selectDomain],
  (substate) => substate.booking.courses,
);

export const selectClient = createSelector(
  [selectDomain],
  (substate) => substate.booking.client,
);

export const selectBookingType = createSelector(
  [selectDomain],
  (substate) => substate.booking.appointmentType,
);

export const selectStaff = createSelector(
  [selectDomain],
  (substate) => substate.booking.staff,
);

export const selectDate = createSelector(
  [selectDomain],
  (substate) => substate.booking.date,
);

export const selectDuration = createSelector(
  [selectDomain],
  (substate) => substate.booking.duration,
);

export const selectTotal = createSelector(
  [selectDomain],
  (substate) => substate.booking.total,
);

export const selectNotes = createSelector(
  [selectDomain],
  (substate) => substate.booking.notes,
);

export const selectStatus = createSelector(
  [selectDomain],
  (substate) => substate.booking.status,
);

export const selectInsideBusyIntervals = createSelector(
  [selectDomain],
  (substate) => substate.booking.insideBusyIntervals,
);

export const selectInsideShift = createSelector(
  [selectDomain],
  (substate) => substate.booking.insideShift,
);

export const selectError = createSelector(
  [selectDomain],
  (substate) => substate.error,
);

export const selectLoading = createSelector(
  [selectDomain],
  (substate) => substate.loading,
);

export const selectCancellationFees = createSelector(
  [selectDomain],
  (substate) => substate.cancellationFees,
);

export const selectSelectedCancellationFee = createSelector(
  [selectDomain],
  (substate) => substate.selectedCancellationFees,
);
