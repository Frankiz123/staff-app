/**
 *
 */

import {
  GET_STAFF,
  GET_STAFF_SUCCESS,
  GET_STAFF_ERROR,
  //
  TOGGLE_STAFF_FILTER,
  //
  SET_STAFF_ID,
} from './constants';

/*** */
export function getStaffAction(payload: any) {
  return { type: GET_STAFF, payload };
}
export function getStaffSuccessAction(staffList: any) {
  return { type: GET_STAFF_SUCCESS, staffList };
}
export function getStaffErrorAction(error: any) {
  return { type: GET_STAFF_ERROR, error };
}

/*** */
export function setStaffIdAction(staffId: string) {
  return { type: SET_STAFF_ID, staffId };
}

/*** */

export function toggleStaffFilterAction() {
  return { type: TOGGLE_STAFF_FILTER };
}
