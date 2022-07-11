import { createSelector } from 'reselect';
import { RootState } from 'types';
import { initialState } from './reducer';

export const selectProductsListDomain = (state: RootState) =>
  state.productsList || initialState;

export const makeSelectProducts = createSelector(
  selectProductsListDomain,
  (substate) => substate.products,
);

export const makeSelectProductCategories = createSelector(
  selectProductsListDomain,
  (substate) => substate.productCategories,
);

export const makeSelectFormattedProducts = createSelector(
  selectProductsListDomain,
  (substate) => substate.formattedProducts,
);

export const makeSelectLoading = createSelector(
  selectProductsListDomain,
  (substate) => substate.loading,
);

export const makeSelectError = createSelector(
  selectProductsListDomain,
  (substate) => substate.error,
);

export const makeSelectProductsList = () =>
  createSelector(selectProductsListDomain, (substate) => substate);

export default makeSelectProductsList;
