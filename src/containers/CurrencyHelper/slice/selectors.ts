import { createSelector } from 'reselect';
import { RootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the CurrencyHelper state domain
 */

const selectDomain = (state: RootState) => state.currencyHelper || initialState;

/**
 * Other specific selectors
 */

export const selectCurrency = createSelector(
  [selectDomain],
  (substate) => substate.currency,
);

export const selectError = createSelector(
  [selectDomain],
  (substate) => substate.error,
);

export const selectLoading = createSelector(
  [selectDomain],
  (substate) => substate.loading,
);
