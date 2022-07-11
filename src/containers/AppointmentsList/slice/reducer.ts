/*
 *
 * AppointmentsList reducer
 *
 */

import produce from 'immer';
import {
  GET_APPOINTMENTS,
  GET_APPOINTMENTS_SUCCESS,
  GET_APPOINTMENTS_ERROR,
  //
  SET_DATE_INTERVAL,
  SET_DATE,
  //
  SEARCH_APPOINTMENTS_BY_CLIENT_NAME,
  SEARCH_APPOINTMENTS_BY_CLIENT_NAME_ERROR,
  SEARCH_APPOINTMENTS_BY_CLIENT_NAME_SUCCESS,
} from './constants';
import { AppointmentsListState } from './types';

export const initialState: AppointmentsListState = {
  appointmentsList: [],
  loading: false,
  error: false,
  //
  selectedDate: new Date(),
  calendarInterval: { start: new Date(), end: new Date() },
};

/* eslint-disable default-case, no-param-reassign */
const appointmentsListReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_APPOINTMENTS:
    case SEARCH_APPOINTMENTS_BY_CLIENT_NAME:
      draft.loading = true;
      // draft.appointmentsList = [];
      break;
    case GET_APPOINTMENTS_SUCCESS:
    case SEARCH_APPOINTMENTS_BY_CLIENT_NAME_SUCCESS:
      draft.loading = false;
      draft.appointmentsList = action.appointmentsList;
      break;
    case GET_APPOINTMENTS_ERROR:
    case SEARCH_APPOINTMENTS_BY_CLIENT_NAME_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
    case SET_DATE_INTERVAL:
      draft.calendarInterval = { start: action.startDate, end: action.endDate };
    case SET_DATE:
      draft.selectedDate = action.date;
      break;
  }
}, initialState);

export default appointmentsListReducer;
