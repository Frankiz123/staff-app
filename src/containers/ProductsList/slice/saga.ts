import { AnyAction } from 'redux';
import { takeLatest, call, put } from 'redux-saga/effects';
import { request } from 'utils';

import {
  getProductsAction,
  getProductCategoriesErrorAction,
  getProductCategoriesSuccessAction,
  getProductsErrorAction,
  getProductsSuccessAction,
} from './actions';
import {
  GET_PRODUCTS,
  GET_PRODUCTS_CATEGORIES,
  GET_PRODUCTS_LIMIT,
  // REFRESH_GET_PRODUCTS,
  WebService,
} from './constants';

export function* getProducts({ offset, limit }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_PRODUCTS, {
        offset,
        limit,
      });
    });

    yield put(getProductsSuccessAction(response.data));
  } catch (error) {
    yield put(getProductsErrorAction(error));
  }
}

export function* getProductCategories() {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.GET_PRODUCTS_CATEGORIES, {});
    });

    yield put(getProductCategoriesSuccessAction(response.data));
    yield put(getProductsAction({ offset: 0, limit: GET_PRODUCTS_LIMIT }));
  } catch (error) {
    yield put(getProductCategoriesErrorAction(error));
  }
}

export default function* productsListSaga() {
  yield takeLatest(GET_PRODUCTS_CATEGORIES, getProductCategories);
  yield takeLatest(GET_PRODUCTS, getProducts);
}
