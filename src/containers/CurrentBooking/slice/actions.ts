/**
 *
 */
import {
  DEFAULT_ACTION,
  SET_DATE,
  SET_SELECTED_CLIENT,
  SET_SELECTED_SERVICE_TYPE,
  ADD_SELECTED_SERVICE,
  DELETE_SELECTED_SERVICE,
  SET_DURATION,
  SET_NOTES,
  SET_SELECTED_STAFF,
  ADD_SELECTED_COURSE,
  DELETE_SELECTED_COURSE,
  CREATE_APPOINTMENT,
  CREATE_APPOINTMENT_ERROR,
  CREATE_APPOINTMENT_SUCCESS,
  GET_STAFF_APPOINTMENT,
  GET_STAFF_APPOINTMENT_SUCCESS,
  GET_STAFF_APPOINTMENT_ERROR,
  GET_STAFF_AVAILABILITY,
  GET_STAFF_AVAILABILITY_SUCCESS,
  GET_STAFF_AVAILABILITY_ERROR,
  INITIATE_BOOKING,
  UPDATE_APPOINTMENT,
  UPDATE_APPOINTMENT_SUCCESS,
  UPDATE_APPOINTMENT_ERROR,
  DELETE_SELECTED_PRODUCT,
  ADD_SELECTED_PRODUCT,
  GET_BOOKING_CANCELATION_FEES,
  GET_BOOKING_CANCELATION_FEES_SUCCESS,
  GET_BOOKING_CANCELATION_FEES_ERROR,
  SET_SELECTED_CANCELLATION_FEE,
  CANCEL_APPOINTMENT,
  CANCEL_APPOINTMENT_SUCCESS,
  CANCEL_APPOINTMENT_ERROR,
  SET_ALREADY_BOOKED_MODAL_VISIBILITY,
  SET_SELECTED_STATUS,
} from './constants';
import {
  IBookingCourse,
  IBookingProduct,
  IBookingService,
  ICurrentBooking,
} from './types';

/*** */
export function defaultAction() {
  return { type: DEFAULT_ACTION };
}

/*** */
export function setSelectedclientAction(client: any) {
  return { type: SET_SELECTED_CLIENT, client };
}
/*** */
export function setSelectedServiceTypeAction(appointmentType: string) {
  return { type: SET_SELECTED_SERVICE_TYPE, appointmentType };
}

/*** */
export function addSelectedServiceAction(service: IBookingService) {
  return { type: ADD_SELECTED_SERVICE, service };
}
export function deleteSelectedServiceAction(index: number) {
  return { type: DELETE_SELECTED_SERVICE, index };
}

/*** */
export function addSelectedProductAction(product: IBookingProduct) {
  return { type: ADD_SELECTED_PRODUCT, product };
}
export function deleteSelectedProductAction(index: number) {
  return { type: DELETE_SELECTED_PRODUCT, index };
}
/*** */
export function setDateAction(date: Date) {
  return { type: SET_DATE, date };
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
export function setSelectedStatus(status: string) {
  return { type: SET_SELECTED_STATUS, status };
}
/*** */
export function setSelectedStaffAction(staff: any) {
  return { type: SET_SELECTED_STAFF, staff };
}

/*** */
export function addSelectedCourseAction(course: IBookingCourse) {
  return { type: ADD_SELECTED_COURSE, course };
}
export function deleteSelectedCourseAction(index: number) {
  return { type: DELETE_SELECTED_COURSE, index };
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

/*** */
export function updateAppointmentAction(payload: any) {
  return { type: UPDATE_APPOINTMENT, payload };
}
export function updateAppointmentSuccessAction(booking: any) {
  return { type: UPDATE_APPOINTMENT_SUCCESS, booking };
}
export function updateAppointmentErrorAction(error: any) {
  return { type: UPDATE_APPOINTMENT_ERROR, error };
}

/*** */
export function cancelAppointmentAction() {
  return { type: CANCEL_APPOINTMENT };
}
export function cancelAppointmentSuccessAction() {
  return { type: CANCEL_APPOINTMENT_SUCCESS };
}
export function cancelAppointmentErrorAction(error: any) {
  return { type: CANCEL_APPOINTMENT_ERROR, error };
}

/*** */
export function getCancellationFeesAction() {
  return { type: GET_BOOKING_CANCELATION_FEES };
}
export function getCancellationFeesSuccessAction(feesList: Array<any>) {
  return { type: GET_BOOKING_CANCELATION_FEES_SUCCESS, feesList };
}
export function getCancellationFeesErrorAction(error: any) {
  return { type: GET_BOOKING_CANCELATION_FEES_ERROR, error };
}
export function setSelectedCancellationFeeAction(cancellationFee: any) {
  return { type: SET_SELECTED_CANCELLATION_FEE, cancellationFee };
}

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

export function initiateBookingAction(booking: ICurrentBooking, debug: number) {
  return { type: INITIATE_BOOKING, booking, debug };
}

export function setAlreadyBookedIntervalModalVisibleAction(visible: boolean) {
  return { type: SET_ALREADY_BOOKED_MODAL_VISIBILITY, visible };
}
