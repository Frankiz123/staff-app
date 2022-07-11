/*
 *
 *
 */
import produce from 'immer';
import {
  GET_PAYMENT_METHODS,
  GET_PAYMENT_METHODS_ERROR,
  GET_PAYMENT_METHODS_SUCCESS,
  //
  SET_SELECTED_PAYMENT_METHOD,
  //
  PAY_APPOINTMENT,
  PAY_APPOINTMENT_ERROR,
  PAY_APPOINTMENT_SUCCESS,
  GET_PAYMENT_HASH,
  GET_PAYMENT_HASH_ERROR,
  GET_PAYMENT_HASH_SUCCESS,
  TOGGLE_PAYMENT_MODAL,
  // UPDATE_APPOINTMENT_WITH_PRODUCTS,
  // UPDATE_APPOINTMENT_WITH_PRODUCTS_ERROR,
  // UPDATE_APPOINTMENT_WITH_PRODUCTS_SUCCESS,
} from './constants';
import { PaymentsState } from './types';

export const initialState: PaymentsState = {
  paymentMethods: [],
  loading: {
    payAction: false,
    paymentMethods: false,
    paymentHash: false,
    updateAppointment: false,
  },
  error: {
    payAction: false,
    paymentMethods: false,
    paymentHash: false,
    updateAppointment: false,
  },
  selectedPaymentMethod: 'cash',
  paymentHash: '',
  paymentModalvisible: false,
};

/* eslint-disable default-case, no-param-reassign */
const paymentsReducer = produce((draft, action) => {
  switch (action.type) {
    case TOGGLE_PAYMENT_MODAL:
      draft.paymentModalvisible = action.paymentModalvisible;
      break;
    // case UPDATE_APPOINTMENT_WITH_PRODUCTS:
    //   draft.loading = { ...draft.loading, paymentHash: true };
    //   break;
    // case UPDATE_APPOINTMENT_WITH_PRODUCTS_ERROR:
    //   draft.loading = { ...draft.loading, paymentHash: false };
    //   draft.error = { ...draft.error, updateAppointment: action.error };
    //   break;
    // case UPDATE_APPOINTMENT_WITH_PRODUCTS_SUCCESS:
    //   draft.loading = { ...draft.loading, updateAppointment: false };
    //   break;
    case GET_PAYMENT_HASH:
      draft.loading = { ...draft.loading, paymentHash: true };
      draft.paymentHash = '';
      break;
    case GET_PAYMENT_HASH_ERROR:
      draft.loading = { ...draft.loading, paymentHash: false };
      draft.error = { ...draft.error, paymentHash: action.error };
      break;
    case GET_PAYMENT_HASH_SUCCESS:
      draft.loading = { ...draft.loading, paymentHash: false };
      draft.paymentHash = action.paymentHash;
      break;
    case GET_PAYMENT_METHODS:
      draft.loading = { ...draft.loading, paymentMethods: true };
      draft.error = { ...draft.error, paymentMethods: false };
      break;
    case GET_PAYMENT_METHODS_SUCCESS:
      draft.paymentMethods = action.paymentMethods;
      draft.loading = { ...draft.loading, paymentMethods: false };
      draft.error = { ...draft.error, paymentMethods: false };
      break;
    case GET_PAYMENT_METHODS_ERROR:
      draft.loading = { ...draft.loading, paymentMethods: false };
      draft.error = { ...draft.error, paymentMethods: action.error };
      break;
    case SET_SELECTED_PAYMENT_METHOD:
      draft.selectedPaymentMethod = action.selectedPaymentMethod;
      break;
    case PAY_APPOINTMENT:
      draft.loading = { ...draft.loading, payAction: true };
      break;
    case PAY_APPOINTMENT_SUCCESS:
      draft.loading = { ...draft.loading, payAction: false };
      break;
    case PAY_APPOINTMENT_ERROR:
      draft.loading = { ...draft.loading, payAction: false };
      draft.error = { ...draft.error, payAction: action.error };
      break;
  }
}, initialState);
export default paymentsReducer;
