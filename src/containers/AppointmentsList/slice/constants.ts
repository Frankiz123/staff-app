/**
 *
 */

const scope = 'src/containers/AppointmentsList';

/*** */

export const WebService = {
  GET_APPOINTMENTS: 'get_appointments',
  GET_APPOINTMENTS_BY_STAFF_ID: 'get_staff_appointment',
  SEARCH_APPOINTMENTS_BY_CLIENT_NAME: 'get_appointments_search',
};

/*** */

export const GET_APPOINTMENTS = `${scope}/GET_APPOINTMENTS`;
export const GET_APPOINTMENTS_SUCCESS = `${scope}/GET_APPOINTMENTS_SUCCESS`;
export const GET_APPOINTMENTS_ERROR = `${scope}/GET_APPOINTMENTS_ERROR`;

/*** */
export const SEARCH_APPOINTMENTS_BY_CLIENT_NAME = `${scope}/SEARCH_APPOINTMENTS_BY_CLIENT_NAME`;
export const SEARCH_APPOINTMENTS_BY_CLIENT_NAME_SUCCESS = `${scope}/SEARCH_APPOINTMENTS_BY_CLIENT_NAME_SUCCESS`;
export const SEARCH_APPOINTMENTS_BY_CLIENT_NAME_ERROR = `${scope}/SEARCH_APPOINTMENTS_BY_CLIENT_NAME_ERROR`;

/*** */
export const SET_DATE_INTERVAL = `${scope}/SET_DATE_INTERVAL`;
export const SET_DATE = `${scope}/SET_DATE`;
