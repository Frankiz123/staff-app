/**
 *
 */

import { ADD_CLIENT, ADD_CLIENT_SUCCESS, ADD_CLIENT_ERROR } from './constants';

export function addClientAction(data: any) {
  return { type: ADD_CLIENT, data };
}
export function addClientSuccessAction(clients: any) {
  return { type: ADD_CLIENT_SUCCESS, clients };
}
export function addClientErrorAction(error: any) {
  return { type: ADD_CLIENT_ERROR, error };
}
