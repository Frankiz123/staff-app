import produce from 'immer';
import { AnyAction } from 'redux';
import {
  GET_NEWS_FEED,
  GET_NEWS_FEED_ERROR,
  GET_NEWS_FEED_SUCCESS,
} from './constants';
import { NewsFeedState, NewsFeedTypes } from './types';

export const initialState: NewsFeedState = {
  error: new Map(),
  loading: new Map(),
  newsFeed: {
    all: { data: [], page: 1 },
    new_booking: { data: [], page: 1 },
    sent_sms: { data: [], page: 1 },
    sms_response: { data: [], page: 1 },
    sent_email: { data: [], page: 1 },
    email_response: { data: [], page: 1 },
    consent_form_added: { data: [], page: 1 },
    new_bill: { data: [], page: 1 },
    clinic_note_added: { data: [], page: 1 },
    booking_resized: { data: [], page: 1 },
    booking_rescheduled: { data: [], page: 1 },
    booking_status_changed: { data: [], page: 1 },
    booking_canceled: { data: [], page: 1 },
    new_course: { data: [], page: 1 },
    new_body_composition_record: {
      data: [],
      page: 1,
    },
    new_body_treatment_record: {
      data: [],
      page: 1,
    },
    balance_add: { data: [], page: 1 },
    balance_use: { data: [], page: 1 },
    dd_mandate_add: { data: [], page: 1 },
    dd_mandate_cancelled: { data: [], page: 1 },
    dd_mandate_deleted: { data: [], page: 1 },
    dd_payment_add: { data: [], page: 1 },
  },
};

const newsFeedReducer = produce(
  (
    draft,
    action: {
      type: string;
      payload: {
        newFeedKey: NewsFeedTypes;
      };
      newsFeedList: Array<any>;
      error?: any;
      newFeedKey: NewsFeedTypes;
    },
  ) => {
    switch (action.type) {
      case GET_NEWS_FEED:
        draft.loading.set(action.payload.newFeedKey, true);
        break;
      case GET_NEWS_FEED_ERROR:
        draft.loading.set(action.newFeedKey, false);
        draft.error.set(action.newFeedKey, action.error);
        break;
      case GET_NEWS_FEED_SUCCESS:
        draft.loading.set(action.newFeedKey, false);
        draft.newsFeed[action.newFeedKey].data = draft.newsFeed[
          action.newFeedKey
        ].data = [
          ...new Map(
            draft.newsFeed[action.newFeedKey].data
              .concat(action.newsFeedList)
              .map((obj) => [obj.data.type + '-' + obj.data.id, obj]),
          ).values(),
        ];
        draft.newsFeed[action.newFeedKey].page += 1;

        break;
    }
  },
  initialState,
);

export default newsFeedReducer;
