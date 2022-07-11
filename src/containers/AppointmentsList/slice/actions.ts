/**
 *
 */

import {
  GET_APPOINTMENTS,
  GET_APPOINTMENTS_SUCCESS,
  GET_APPOINTMENTS_ERROR,
  //
  SEARCH_APPOINTMENTS_BY_CLIENT_NAME,
  SEARCH_APPOINTMENTS_BY_CLIENT_NAME_SUCCESS,
  SEARCH_APPOINTMENTS_BY_CLIENT_NAME_ERROR,
  //
  SET_DATE_INTERVAL,
  SET_DATE,
} from './constants';

export function getAppointmentsAction(routeName: string, payload: any) {
  return { type: GET_APPOINTMENTS, routeName, payload };
}
export function getAppointmentsSuccessAction(appointmentsList: any) {
  return { type: GET_APPOINTMENTS_SUCCESS, appointmentsList };
}
export function getAppointmentsErrorAction(error: any) {
  return { type: GET_APPOINTMENTS_ERROR, error };
}

export function searchAppointmentsAction(payload: any) {
  return { type: SEARCH_APPOINTMENTS_BY_CLIENT_NAME, payload };
}
export function searchAppointmentsSuccessAction(appointmentsList: any) {
  return { type: SEARCH_APPOINTMENTS_BY_CLIENT_NAME_SUCCESS, appointmentsList };
}
export function searchAppointmentsErrorAction(error: any) {
  return { type: SEARCH_APPOINTMENTS_BY_CLIENT_NAME_ERROR, error };
}

export function setDateIntervalAction(startDate: Date, endDate: Date) {
  return { type: SET_DATE_INTERVAL, startDate, endDate };
}

export function setDateAction(date: Date) {
  return { type: SET_DATE, date };
}
