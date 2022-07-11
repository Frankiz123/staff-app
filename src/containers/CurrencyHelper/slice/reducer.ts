import produce from 'immer';
import { AnyAction } from 'redux';
import {
  GET_CURRENCY,
  GET_CURRENCY_ERROR,
  GET_CURRENCY_SUCCESS,
} from './constants';
import { CurrencyHelperState } from './types';

export const initialState: CurrencyHelperState = {
  error: false,
  loading: false,
  currency: null,
};

const newsFeedReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_CURRENCY:
      draft.loading = true;
      break;
    case GET_CURRENCY_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
    case GET_CURRENCY_SUCCESS:
      draft.loading = false;
      draft.currency = action.currency;
      break;
  }
}, initialState);

export default newsFeedReducer;
