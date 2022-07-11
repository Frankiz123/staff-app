/*
 *
 * AppointmentsList reducer
 *
 */

import { DrawerGestureContext } from '@react-navigation/drawer';
import produce from 'immer';
import {
  GET_CLIENTS,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_ERROR,
  //
  GET_CLIENTS_SEARCH,
  GET_CLIENTS_SEARCH_ERROR,
  GET_CLIENTS_SEARCH_SUCCESS,
  //
  SET_SELECTED_CLIENT,
} from './constants';
import { ClientsListState } from './types';

export const initialState: ClientsListState = {
  loading: false,
  refreshing: false,
  error: false,
  clientsList: [],
  searchResult: [],
  offset: 0,
  limit: 10,
  selectedClient: null,
};

/* eslint-disable default-case, no-param-reassign */
const clientsListReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_CLIENTS:
    case GET_CLIENTS_SEARCH:
      if (action.payload.firstPage) {
        draft.clientsList = [];
        draft.offset = 0;
        draft.loading = true;
      } else {
        draft.refreshing = true;
      }
      break;
    case GET_CLIENTS_SUCCESS:
      draft.loading = false;
      draft.refreshing = false;
      draft.clientsList = draft.clientsList.concat(action.clientsList);
      draft.offset = draft.offset + 10;
      break;
    case GET_CLIENTS_SEARCH_SUCCESS:
      draft.loading = false;
      draft.refreshing = false;
      draft.clientsList = action.clientsList;
      draft.offset = draft.offset + 10;
      break;
    case GET_CLIENTS_ERROR:
    case GET_CLIENTS_SEARCH_ERROR:
      draft.loading = false;
      draft.refreshing = false;
      draft.error = action.error;
      break;
  }
}, initialState);

export default clientsListReducer;
