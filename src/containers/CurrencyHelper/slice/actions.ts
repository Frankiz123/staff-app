/**
 *
 */
import {
  GET_CURRENCY,
  GET_CURRENCY_ERROR,
  GET_CURRENCY_SUCCESS,
} from './constants';
import { Currency } from './types';

/*** */
export function getCurrencyAction() {
  return { type: GET_CURRENCY };
}
export function getCurrencySuccessAction(currency: Currency) {
  return { type: GET_CURRENCY_SUCCESS, currency };
}
export function getCurrencyErrorAction(error: any) {
  return { type: GET_CURRENCY_ERROR, error };
}
