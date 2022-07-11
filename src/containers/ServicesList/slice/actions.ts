/**
 *
 */

import {
  GET_SERVICES,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_ERROR,
  //
  TOGGLE_SERVICES,
} from './constants';

/*** */
export function getServicesAction(payload: any) {
  return { type: GET_SERVICES, payload };
}
export function getServicesSuccessAction(servicesList: any) {
  return { type: GET_SERVICES_SUCCESS, servicesList };
}
export function getServicesErrorAction(error: any) {
  return { type: GET_SERVICES_ERROR, error };
}

/*** */
export function toggleServicesAction(title: string) {
  return { type: TOGGLE_SERVICES, title };
}
