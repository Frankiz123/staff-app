/**
 *
 */
const scope = 'src/containers/ProductsList';

/*** */
export const WebService = {
  GET_PRODUCTS: 'get_staff_products',
  GET_PRODUCTS_CATEGORIES: 'get_staff_products_categories',
};

export const GET_PRODUCTS = `${scope}/GET_PRODUCTS`;
export const GET_PRODUCTS_SUCCESS = `${scope}/GET_PRODUCTS_SUCCESS`;
export const GET_PRODUCTS_ERROR = `${scope}/GET_PRODUCTS_ERROR`;

export const GET_PRODUCTS_CATEGORIES = `${scope}/GET_PRODUCTS_CATEGORIES`;
export const GET_PRODUCTS_CATEGORIES_SUCCESS = `${scope}/GET_PRODUCTS_CATEGORIES_SUCCESS`;
export const GET_PRODUCTS_CATEGORIES_ERROR = `${scope}/GET_PRODUCTS_CATEGORIES_ERROR`;

export const REFRESH_GET_PRODUCTS = `${scope}/REFRESH_GET_PRODUCTS`;

export const GET_PRODUCTS_LIMIT = 1000;
