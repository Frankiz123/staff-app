import produce from 'immer';
import { GET_CLIENT, GET_CLIENT_ERROR, GET_CLIENT_SUCCESS } from './constants';
import { CurrentClientState } from './types';

export const initialState: CurrentClientState = {
  loading: false,
  error: false,
  client: null,
};

/* eslint-disable default-case, no-param-reassign */
const currentClientReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_CLIENT:
      draft.loading = true;
      break;
    case GET_CLIENT_SUCCESS:
      draft.loading = false;
      draft.client = action.client;
      break;
    case GET_CLIENT_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
  }
}, initialState);

export default currentClientReducer;
