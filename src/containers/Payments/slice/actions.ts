/**
 *
 */

import {
  GET_PAYMENT_METHODS,
  GET_PAYMENT_METHODS_SUCCESS,
  GET_PAYMENT_METHODS_ERROR,
  SET_SELECTED_PAYMENT_METHOD,
  PAY_APPOINTMENT,
  PAY_APPOINTMENT_ERROR,
  PAY_APPOINTMENT_SUCCESS,
  GET_PAYMENT_HASH,
  GET_PAYMENT_HASH_ERROR,
  GET_PAYMENT_HASH_SUCCESS,
  TOGGLE_PAYMENT_MODAL,
  // UPDATE_APPOINTMENT_WITH_PRODUCTS,
  // UPDATE_APPOINTMENT_WITH_PRODUCTS_SUCCESS,
  // UPDATE_APPOINTMENT_WITH_PRODUCTS_ERROR,
} from './constants';

export function togglePaymentModalAction(paymentModalvisible: boolean) {
  return {
    type: TOGGLE_PAYMENT_MODAL,
    paymentModalvisible,
  };
}
//
// export function updateAppointmentWithProductsAction() {
//   return {
//     type: UPDATE_APPOINTMENT_WITH_PRODUCTS,
//   };
// }
// export function updateAppointmentWithProductsSuccessAction() {
//   return {
//     type: UPDATE_APPOINTMENT_WITH_PRODUCTS_SUCCESS,
//   };
// }
// export function updateAppointmentWithProductsErrorAction(error: any) {
//   return {
//     type: UPDATE_APPOINTMENT_WITH_PRODUCTS_ERROR,
//     error,
//   };
// }
//
export function getPaymentHashAction() {
  return {
    type: GET_PAYMENT_HASH,
  };
}
export function getPaymentHashSuccessAction(paymentHash: string) {
  return {
    type: GET_PAYMENT_HASH_SUCCESS,
    paymentHash,
  };
}
export function getPaymentHashErrorAction(error: any) {
  return {
    type: GET_PAYMENT_HASH_ERROR,
    error,
  };
}
//

export function getPaymentMethodsAction() {
  return {
    type: GET_PAYMENT_METHODS,
  };
}
export function getPaymentMethodsSuccessAction(paymentMethods: Array<string>) {
  return {
    type: GET_PAYMENT_METHODS_SUCCESS,
    paymentMethods,
  };
}
export function getPaymentMethodsErrorAction(error: any) {
  return {
    type: GET_PAYMENT_METHODS_ERROR,
    error,
  };
}
//

export function payAppointmentAction() {
  return {
    type: PAY_APPOINTMENT,
  };
}
export function payAppointmentSuccessAction() {
  return {
    type: PAY_APPOINTMENT_SUCCESS,
  };
}
export function payAppointmentErrorAction(error: any) {
  return {
    type: PAY_APPOINTMENT_ERROR,
    error,
  };
}
//
export function setSelectedPaymentMethodAction(selectedPaymentMethod: string) {
  return {
    type: SET_SELECTED_PAYMENT_METHOD,
    selectedPaymentMethod,
  };
}
