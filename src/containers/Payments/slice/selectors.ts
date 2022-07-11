import { createSelector } from 'reselect';
import { RootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the paymentTypes state domain
 */

const selectPaymentTypesDomain = (state: RootState) =>
  state.payments || initialState;

/**
 * Other specific selectors
 */

export const makeSelectPaymentMethods = createSelector(
  selectPaymentTypesDomain,
  (substate) => substate.paymentMethods,
);
export const makeSelectLoading = createSelector(
  selectPaymentTypesDomain,
  (substate) => substate.loading,
);
export const makeSelectError = createSelector(
  selectPaymentTypesDomain,
  (substate) => substate.error,
);
export const makeSelectSelectedPaymentMethod = createSelector(
  selectPaymentTypesDomain,
  (substate) => substate.selectedPaymentMethod,
);
export const selectPaymentHash = createSelector(
  selectPaymentTypesDomain,
  (substate) => substate.paymentHash,
);
export const selectPaymentModalVisible = createSelector(
  selectPaymentTypesDomain,
  (substate) => substate.paymentModalvisible,
);

/**
 * Default selector used by PaymentTypes
 */

export const makeSelectPaymentTypes = () =>
  createSelector(selectPaymentTypesDomain, (substate) => substate);

export default makeSelectPaymentTypes;
