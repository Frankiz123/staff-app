/*
 *
 * AppointmentsList reducer
 *
 */

import produce from 'immer';
import {
  GET_STAFF,
  GET_STAFF_SUCCESS,
  GET_STAFF_ERROR,
  //
  TOGGLE_STAFF_FILTER,
  SET_STAFF_ID,
} from './constants';
import { StaffListState } from './types';

export const initialState: StaffListState = {
  loading: false,
  error: false,
  staffList: [],
  staffFilterShown: false,
  selectedStaffId: 'all',
};

/* eslint-disable default-case, no-param-reassign */
const appointmentsListReducer = produce((draft, action) => {
  switch (action.type) {
    case TOGGLE_STAFF_FILTER:
      draft.staffFilterShown = !draft.staffFilterShown;
      break;
    case SET_STAFF_ID:
      draft.selectedStaffId = action.staffId;
      break;

    case GET_STAFF:
      draft.loading = true;
      draft.staffList = [];
      break;
    case GET_STAFF_SUCCESS:
      draft.loading = false;
      draft.staffList = action.staffList;
      break;
    case GET_STAFF_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
  }
}, initialState);

export default appointmentsListReducer;
