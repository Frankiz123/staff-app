/**
 *
 */

import {
  GET_CLIENTS,
  GET_CLIENTS_ERROR,
  GET_CLIENTS_SUCCESS,
  //
  GET_CLIENTS_SEARCH,
  GET_CLIENTS_SEARCH_ERROR,
  GET_CLIENTS_SEARCH_SUCCESS,
  //
  SET_SELECTED_CLIENT,
} from './constants';

/*** */
export function getClientsAction(payload: any) {
  return { type: GET_CLIENTS, payload };
}
export function getClientsSuccessAction(clientsList: any) {
  return { type: GET_CLIENTS_SUCCESS, clientsList };
}
export function getCLientsErrorAction(error: any) {
  return { type: GET_CLIENTS_ERROR, error };
}

/*** */
export function getClientsSearchAction(payload: any) {
  return { type: GET_CLIENTS_SEARCH, payload };
}
export function getClientsSearchSuccessAction(clientsList: any) {
  return { type: GET_CLIENTS_SEARCH_SUCCESS, clientsList };
}
export function getClientsSearchErrorAction(error: any) {
  return { type: GET_CLIENTS_SEARCH_ERROR, error };
}

/*** */
export function setSelectedClientAction(client: any) {
  return { type: SET_SELECTED_CLIENT, client };
}
