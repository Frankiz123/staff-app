/**
 *
 */
const scope = 'src/containers/BusyTime';

/*** */
export const WebService = {
  CREATE_APPOINTMENT: 'add_appointment',
  GET_STAFF_AVAILABILITY: 'get_staff_availability',
  GET_STAFF_BY_ID: 'get_staff_id',
  GET_STAFF_APPOINTMENT: 'get_staff_appointment',
};

/*** */
export const SET_SELECTED_STAFF = `${scope}/SET_SELECTED_STAFF`;
export const SET_DURATION = `${scope}/SET_DURATION`;
export const SET_NOTES = `${scope}/SET_NOTES`;
export const SET_DATE = `${scope}/SET_DATE`;

/*** */
export const GET_STAFF_APPOINTMENT = `${scope}/GET_STAFF_APPOINTMENT`;
export const GET_STAFF_APPOINTMENT_SUCCESS = `${scope}/GET_STAFF_APPOINTMENT_SUCCESS`;
export const GET_STAFF_APPOINTMENT_ERROR = `${scope}/GET_STAFF_APPOINTMENT_ERROR`;

/*** */
export const GET_STAFF_AVAILABILITY = `${scope}/GET_STAFF_AVAILABILITY`;
export const GET_STAFF_AVAILABILITY_SUCCESS = `${scope}/GET_STAFF_AVAILABILITY_SUCCESS`;
export const GET_STAFF_AVAILABILITY_ERROR = `${scope}/GET_STAFF_AVAILABILITY_ERROR`;

/*** */
export const CREATE_APPOINTMENT = `${scope}/CREATE_APPOINTMENT`;
export const CREATE_APPOINTMENT_SUCCESS = `${scope}/CREATE_APPOINTMENT_SUCCESS`;
export const CREATE_APPOINTMENT_ERROR = `${scope}/CREATE_APPOINTMENT_ERROR`;
