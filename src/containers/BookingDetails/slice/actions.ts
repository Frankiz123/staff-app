/**
 *
 */
import {
  GET_BOOKING,
  GET_BOOKING_ERROR,
  GET_BOOKING_SUCCESS,
} from './constants';

/*** */
export function getBookingAction(bookingId: string) {
  return { type: GET_BOOKING, bookingId };
}
export function getBookingSuccessAction(booking: any) {
  return { type: GET_BOOKING_SUCCESS, booking };
}
export function getBookingErrorAction(error: any) {
  return { type: GET_BOOKING_ERROR, error };
}
