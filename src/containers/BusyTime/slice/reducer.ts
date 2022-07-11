import produce from 'immer';
import { AnyAction } from 'redux';
import {
  SET_SELECTED_STAFF,
  SET_DATE,
  SET_NOTES,
  SET_DURATION,
  GET_STAFF_APPOINTMENT,
  GET_STAFF_APPOINTMENT_SUCCESS,
  GET_STAFF_AVAILABILITY,
  GET_STAFF_APPOINTMENT_ERROR,
  GET_STAFF_AVAILABILITY_ERROR,
  GET_STAFF_AVAILABILITY_SUCCESS,
  CREATE_APPOINTMENT,
  CREATE_APPOINTMENT_ERROR,
  CREATE_APPOINTMENT_SUCCESS,
} from './constants';

import moment from 'moment';
import { BusyTimeState } from './types';
import { isDateInsideShift, isInsideBusyIntervals } from './reducerHelper';

export const initialState: BusyTimeState = {
  error: false,
  loading: false,
  lastCreatedOrUpdatedBooking: null,
  busytime: {
    clientId: '',
    time: new Date(),
    date: new Date(),
    staff: null, //staffID
    staffAppointments: [],
    staffAvailability: { time_in_set: '00:00.00', time_out_set: '23:59:59' },
    duration: { value: 0, label: '0min' },
    notes: '',
    type: 'busy_time',
    status: 'booked',
    salon_id: Number,
    insideBusyIntervals: { nextFreeTime: moment(), isBusyInterval: false },
    insideShift: false,
  },
};
const BusyTimeReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_SELECTED_STAFF:
      draft.busytime.staff = action.staff;
      break;
    case SET_DATE:
      draft.busytime.date = action.date;
      draft.busytime.insideBusyIntervals = isInsideBusyIntervals(draft);
      draft.busytime.insideShift = isDateInsideShift(draft);
      break;
    case SET_NOTES:
      draft.busytime.notes = action.notes;
      break;
    case GET_STAFF_APPOINTMENT:
      draft.loading = true;
      draft.busytime.staffAppointments = [];
      break;
    case GET_STAFF_APPOINTMENT_SUCCESS:
      draft.loading = false;
      draft.busytime.staffAppointments = action.appointments;
      draft.busytime.insideBusyIntervals = isInsideBusyIntervals(draft);
      draft.busytime.insideShift = isDateInsideShift(draft);
      break;
    case GET_STAFF_APPOINTMENT_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
    case SET_DURATION:
      draft.busytime.duration = action.duration;
      break;
    case GET_STAFF_AVAILABILITY:
      draft.loading = true;
      draft.busytime.staffAvailability = {
        time_in_set: '00:00.00',
        time_out_set: '23:59:59',
      };
      break;
    case GET_STAFF_AVAILABILITY_SUCCESS:
      draft.loading = false;
      draft.busytime.staffAvailability = action.staffAvailability;
      break;
    case GET_STAFF_AVAILABILITY_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
    case CREATE_APPOINTMENT:
      draft.loading = true;
      draft.lastCreatedOrUpdatedBooking = null;
      break;
    case CREATE_APPOINTMENT_SUCCESS:
      draft.loading = false;
      draft.error = false;
      draft.lastCreatedOrUpdatedBooking = action.booking;
      break;
    case CREATE_APPOINTMENT_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
  }
}, initialState);

export default BusyTimeReducer;
