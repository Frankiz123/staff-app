import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  REFRESH_GET_PRODUCTS,
  GET_PRODUCTS_CATEGORIES,
  GET_PRODUCTS_CATEGORIES_SUCCESS,
  GET_PRODUCTS_CATEGORIES_ERROR,
} from './constants';

export function refreshProductsListAction({ limit }: { limit: number }) {
  return {
    type: REFRESH_GET_PRODUCTS,
    offset: 0,
    limit,
  };
}

export function getProductsAction({
  offset,
  limit,
}: {
  limit: number;
  offset: number;
}) {
  return {
    type: GET_PRODUCTS,
    offset,
    limit,
  };
}

export function getProductsSuccessAction(products: Array<any>) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products,
  };
}

export function getProductsErrorAction(error: any) {
  return {
    type: GET_PRODUCTS_ERROR,
    error,
  };
}

export function getProductCategoriesAction() {
  return {
    type: GET_PRODUCTS_CATEGORIES,
  };
}

export function getProductCategoriesSuccessAction(
  productCategories: Array<any>,
) {
  return {
    type: GET_PRODUCTS_CATEGORIES_SUCCESS,
    productCategories,
  };
}

export function getProductCategoriesErrorAction(error: any) {
  return {
    type: GET_PRODUCTS_CATEGORIES_ERROR,
    error,
  };
}
