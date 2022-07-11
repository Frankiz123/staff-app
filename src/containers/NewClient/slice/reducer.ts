import produce from 'immer';
import { ADD_CLIENT, ADD_CLIENT_ERROR, ADD_CLIENT_SUCCESS } from './constants';
import { NewClientState } from './types';

export const initialState: NewClientState = {
  loading: false,
  error: false,
  client: {
    name: '',
    surname: '',
    phone: '',
    email: '',
    email_appointments_optin: 0,
    email_purchases_optin: 0,
    email_marketing_optin: 0,
    email_other_optin: 0,
    sms_appointments_optin: 0,
    sms_purchases_optin: 0,
    sms_marketing_optin: 0,
    sms_other_optin: 0,
    notes: '',
    sex: '',
    dob: '',
    marketing_source_id: '',
    address: '',
    postcode: '',
    image_file: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const newClientReducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_CLIENT:
      draft.loading = true;
      draft.client = action.client;
      break;
    // case ADD_CLIENT_SUCCESS:
    //   draft.loading = true;
    //   draft.client = action.client;
    //   break;
  }
}, initialState);

export default newClientReducer;
