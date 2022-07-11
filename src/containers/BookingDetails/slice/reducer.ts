import produce from 'immer';
import { AnyAction } from 'redux';
import {
  GET_BOOKING,
  GET_BOOKING_ERROR,
  GET_BOOKING_SUCCESS,
} from './constants';
import { BookingDetailsState } from './types';

export const initialState: BookingDetailsState = {
  error: false,
  loading: false,
  booking: null,
};

const newsFeedReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_BOOKING:
      draft.loading = true;
      draft.booking = null;
      break;
    case GET_BOOKING_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
    case GET_BOOKING_SUCCESS:
      draft.loading = false;
      draft.booking = action.booking;
      break;
  }
}, initialState);

export default newsFeedReducer;
