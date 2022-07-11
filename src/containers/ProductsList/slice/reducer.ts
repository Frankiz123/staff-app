import produce from 'immer';
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  //
  GET_PRODUCTS_CATEGORIES,
  GET_PRODUCTS_CATEGORIES_SUCCESS,
  GET_PRODUCTS_CATEGORIES_ERROR,
} from './constants';
import { ProductsListState } from './types';

export const initialState: ProductsListState = {
  products: [],
  productCategories: [],
  formattedProducts: [],
  loading: { products: false, productCategories: false },
  error: { products: false, productCategories: false },
};

/* eslint-disable default-case, no-param-reassign */
const productsListReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      draft.products = [];
      draft.loading = { ...draft.loading, products: true };
      draft.error = { ...draft.error, products: false };
      break;
    case GET_PRODUCTS_SUCCESS:
      draft.products = action.products;
      draft.formattedProducts = draft.productCategories
        .map((prCategory: any) => {
          return {
            ...prCategory,
            data: action.products.filter(
              (product: any) => product.extr_cat == prCategory.id,
            ),
          };
        })
        .filter((prCategory) => prCategory.data.length > 0);
      draft.loading = { ...draft.loading, products: false };
      draft.error = { ...draft.error, products: false };
      break;
    case GET_PRODUCTS_ERROR:
      draft.loading = { ...draft.loading, products: false };
      draft.error = { ...draft.error, products: action.error };
      break;

    case GET_PRODUCTS_CATEGORIES:
      draft.productCategories = [];
      draft.loading = { ...draft.loading, productCategories: true };
      draft.error = { ...draft.error, products: false };
      break;
    case GET_PRODUCTS_CATEGORIES_SUCCESS:
      draft.productCategories = action.productCategories;
      // draft.formattedProducts = action.productCategories.map(
      //   (prCategory: any) => {
      //     return { ...prCategory, data: [] };
      //   },
      // );
      draft.loading = { ...draft.loading, productCategories: false };
      draft.error = { ...draft.error, productCategories: false };
      break;
    case GET_PRODUCTS_CATEGORIES_ERROR:
      draft.loading = { ...draft.loading, productCategories: false };
      draft.error = { ...draft.error, productCategories: action.error };
      break;
  }
}, initialState);

export default productsListReducer;
