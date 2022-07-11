import produce from 'immer';
import moment from 'moment';
import {
  SET_SELECTED_CLIENT,
  SET_SELECTED_SERVICE_TYPE,
  ADD_SELECTED_SERVICE,
  DELETE_SELECTED_SERVICE,
  SET_DATE,
  SET_DURATION,
  SET_NOTES,
  SET_SELECTED_STAFF,
  DELETE_SELECTED_COURSE,
  ADD_SELECTED_COURSE,
  CREATE_APPOINTMENT,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_ERROR,
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
  ADD_SELECTED_PRODUCT,
  DELETE_SELECTED_PRODUCT,
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
  calculateDuration,
  getTotal,
  isDateInsideShift,
  isInsideBusyIntervals,
} from './reducerHelper';
import { CurrentBookingState } from './types';

export const initialState: CurrentBookingState = {
  error: false,
  loading: false,
  booking: {
    status: 'booked',
    client: null,
    appointmentType: 'service',
    staff: null,
    staffAppointments: [],
    staffAvailability: { time_in_set: '00:00.00', time_out_set: '23:59:59' },
    date: new Date(),
    duration: { value: 0, label: '0min' },
    notes: '',
    services: [],
    courses: [],
    total: 0,
    insideBusyIntervals: { nextFreeTime: moment(), isBusyInterval: false },
    insideShift: false,
    products: [],
    alreadyBookedIntervalModalVisible: false,
  },
  cancellationFees: [
    { id: '0', name: 'No Fee', hours: '0', value: '0', type: 'value' },
  ],
  selectedCancellationFees: {
    id: '0',
    name: 'No Fee',
    hours: '0',
    value: '0',
    type: 'value',
  },
};

const currentBookingReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_SELECTED_STATUS:
      draft.booking.status = action.status;
      break;
    case SET_ALREADY_BOOKED_MODAL_VISIBILITY:
      draft.booking.alreadyBookedIntervalModalVisible = action.visible;
      break;
    case SET_SELECTED_CLIENT:
      draft.booking.client = action.client;
      break;
    case SET_SELECTED_SERVICE_TYPE:
      draft.booking.appointmentType = action.appointmentType;
      draft.booking.total = getTotal(draft);
      break;
    case ADD_SELECTED_SERVICE:
      draft.booking.services.push(action.service);
      draft.booking.total = getTotal(draft);
      draft.booking.duration = calculateDuration(draft);
      break;
    case DELETE_SELECTED_SERVICE:
      draft.booking.services = draft.booking.services.filter(
        (item, indx) => indx !== action.index,
      );
      draft.booking.total = getTotal(draft);
      draft.booking.duration = calculateDuration(draft);
      break;

    case ADD_SELECTED_PRODUCT:
      draft.booking.products.push(action.product);
      draft.booking.total = getTotal(draft);
      // draft.booking.duration = calculateDuration(draft);
      break;
    case DELETE_SELECTED_PRODUCT:
      draft.booking.products = draft.booking.products.filter(
        (item, indx) => indx !== action.index,
      );
      draft.booking.total = getTotal(draft);
      // draft.booking.duration = calculateDuration(draft);
      break;

    case GET_BOOKING_CANCELATION_FEES:
      draft.cancellationFees = [];
      draft.loading = true;
      draft.error = false;
      break;
    case GET_BOOKING_CANCELATION_FEES_SUCCESS:
      draft.cancellationFees = [
        { id: '0', name: 'No Fee', hours: '0', value: '0', type: 'value' },
      ].concat(action.feesList);
      draft.loading = false;
      draft.error = false;
      break;
    case GET_BOOKING_CANCELATION_FEES_ERROR:
      draft.cancellationFees = [];
      draft.loading = false;
      draft.error = action.error;
      break;

    case SET_SELECTED_CANCELLATION_FEE:
      draft.selectedCancellationFees = action.cancellationFee;
      break;
    case SET_DATE:
      draft.booking.date = action.date;
      draft.booking.insideBusyIntervals = isInsideBusyIntervals(draft);
      draft.booking.insideShift = isDateInsideShift(draft);
      break;
    case SET_DURATION:
      draft.booking.duration = action.duration;
      break;
    case SET_NOTES:
      draft.booking.notes = action.notes;
      break;
    case SET_SELECTED_STAFF:
      draft.booking.staff = action.staff;
      break;
    case ADD_SELECTED_COURSE:
      draft.booking.courses.push(action.course);
      draft.booking.total = getTotal(draft);
      draft.booking.duration = calculateDuration(draft);
      break;
    case DELETE_SELECTED_COURSE:
      draft.booking.courses = draft.booking.courses.filter(
        (item, indx) => indx !== action.index,
      );
      draft.booking.total = getTotal(draft);
      draft.booking.duration = calculateDuration(draft);
      break;
    case CREATE_APPOINTMENT:
      draft.loading = true;
      break;
    case CREATE_APPOINTMENT_SUCCESS:
      draft.loading = false;
      draft.error = false;
      break;
    case CREATE_APPOINTMENT_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;

    case UPDATE_APPOINTMENT:
      draft.loading = true;
      break;
    case UPDATE_APPOINTMENT_SUCCESS:
      draft.loading = false;
      draft.error = false;
      break;
    case UPDATE_APPOINTMENT_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;

    case CANCEL_APPOINTMENT:
      draft.loading = true;
      break;
    case CANCEL_APPOINTMENT_SUCCESS:
      draft.loading = false;
      draft.error = false;
      break;
    case CANCEL_APPOINTMENT_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;

    case GET_STAFF_APPOINTMENT:
      draft.loading = true;
      draft.booking.staffAppointments = [];
      break;
    case GET_STAFF_APPOINTMENT_SUCCESS:
      draft.loading = false;
      draft.booking.staffAppointments = action.appointments;
      draft.booking.insideBusyIntervals = isInsideBusyIntervals(draft);
      draft.booking.insideShift = isDateInsideShift(draft);
      break;
    case GET_STAFF_APPOINTMENT_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;

    case GET_STAFF_AVAILABILITY:
      draft.loading = true;
      draft.booking.staffAvailability = {
        time_in_set: '00:00.00',
        time_out_set: '23:59:59',
      };
      break;
    case GET_STAFF_AVAILABILITY_SUCCESS:
      draft.loading = false;
      draft.booking.staffAvailability = action.staffAvailability;
      break;
    case GET_STAFF_AVAILABILITY_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
    case INITIATE_BOOKING:
      draft.booking = action.booking;
      draft.booking.insideBusyIntervals = isInsideBusyIntervals(draft);
      draft.booking.insideShift = isDateInsideShift(draft);
      draft.booking.total = getTotal(draft);
      draft.booking.duration = calculateDuration(draft);
      break;
  }
}, initialState);

export default currentBookingReducer;
