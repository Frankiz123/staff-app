/**
 *
 */
import {
  SET_SELECTED_STAFF,
  SET_DURATION,
  SET_NOTES,
  SET_DATE,
  GET_STAFF_APPOINTMENT,
  GET_STAFF_APPOINTMENT_ERROR,
  GET_STAFF_APPOINTMENT_SUCCESS,
  GET_STAFF_AVAILABILITY,
  GET_STAFF_AVAILABILITY_ERROR,
  GET_STAFF_AVAILABILITY_SUCCESS,
  CREATE_APPOINTMENT,
  CREATE_APPOINTMENT_ERROR,
  CREATE_APPOINTMENT_SUCCESS,
} from './constants';

/*** */
/*** */
export function setSelectedStaffAction(staff: any) {
  return { type: SET_SELECTED_STAFF, staff };
}
/*** */
export function setDurationAction(duration: { value: number; label: string }) {
  return { type: SET_DURATION, duration };
}

/*** */
export function setNotesAction(notes: string) {
  return { type: SET_NOTES, notes };
}

/*** */
export function setDateAction(date: Date) {
  return { type: SET_DATE, date };
}
/*** */

/*** */
export function getStaffAppointmentAction(payload: any) {
  return { type: GET_STAFF_APPOINTMENT, payload };
}
export function getStaffAppointmentSuccessAction(appointments: any) {
  return { type: GET_STAFF_APPOINTMENT_SUCCESS, appointments };
}
export function getStaffAppointmentErrorAction(error: any) {
  return { type: GET_STAFF_APPOINTMENT_ERROR, error };
}

/*** */
export function getStaffAvailabilityAction(payload: any) {
  return { type: GET_STAFF_AVAILABILITY, payload };
}
export function getStaffAvailabilitySuccessAction(staffAvailability: any) {
  return { type: GET_STAFF_AVAILABILITY_SUCCESS, staffAvailability };
}
export function getStaffAvailabilityErrorAction(error: any) {
  return { type: GET_STAFF_AVAILABILITY_ERROR, error };
}

/*** */
export function createAppointmentAction(payload: any) {
  return { type: CREATE_APPOINTMENT, payload };
}
export function createAppointmentSuccessAction(booking: any) {
  return { type: CREATE_APPOINTMENT_SUCCESS, booking };
}
export function createAppointmentErrorAction(error: any) {
  return { type: CREATE_APPOINTMENT_ERROR, error };
}
