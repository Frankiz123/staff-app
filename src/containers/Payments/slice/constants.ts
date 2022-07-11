/**
 *
 */

const scope = 'app/Containers/Payments';

export const WebService = {
  GET_PAYMENT_METHODS: 'get_staff_payment_methods',
  PAY_APPOINTMENT: 'pay_appointment',
  GET_PAYMENT_HASH: 'booking_pay_stripe',
  // UPDATE_APPOINTMENT_WITH_PRODUCTS: 'edit_appointment',
};

//
export const GET_PAYMENT_METHODS = `${scope}/GET_PAYMENT_METHODS`;
export const GET_PAYMENT_METHODS_SUCCESS = `${scope}/GET_PAYMENT_METHODS_SUCCESS`;
export const GET_PAYMENT_METHODS_ERROR = `${scope}/GET_PAYMENT_METHODS_ERROR`;

//
export const GET_PAYMENT_HASH = `${scope}/GET_PAYMENT_HASH`;
export const GET_PAYMENT_HASH_SUCCESS = `${scope}/GET_PAYMENT_HASH_SUCCESS`;
export const GET_PAYMENT_HASH_ERROR = `${scope}/GET_PAYMENT_HASH_ERROR`;
//
export const PAY_APPOINTMENT = `${scope}/PAY_APPOINTMENT`;
export const PAY_APPOINTMENT_SUCCESS = `${scope}/PAY_APPOINTMENT_SUCCESS`;
export const PAY_APPOINTMENT_ERROR = `${scope}/PAY_APPOINTMENT_ERROR`;
//
// export const UPDATE_APPOINTMENT_WITH_PRODUCTS = `${scope}/UPDATE_APPOINTMENT_WITH_PRODUCTS`;
// export const UPDATE_APPOINTMENT_WITH_PRODUCTS_SUCCESS = `${scope}/UPDATE_APPOINTMENT_WITH_PRODUCTS_SUCCESS`;
// export const UPDATE_APPOINTMENT_WITH_PRODUCTS_ERROR = `${scope}/UPDATE_APPOINTMENT_WITH_PRODUCTS_ERROR`;
//
export const SET_SELECTED_PAYMENT_METHOD = `${scope}/SET_SELECTED_PAYMENT_METHOD`;
//
export const TOGGLE_PAYMENT_MODAL = `${scope}/TOGGLE_PAYMENT_MODAL`;
