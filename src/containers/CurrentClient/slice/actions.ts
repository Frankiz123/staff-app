/**
 *
 */

import { GET_CLIENT, GET_CLIENT_SUCCESS, GET_CLIENT_ERROR } from './constants';
import { IClient } from './types';

export function getClientAction({ id }: { id: string }) {
  return { type: GET_CLIENT, id };
}
export function getClientSuccessAction(client: IClient) {
  return { type: GET_CLIENT_SUCCESS, client };
}
export function getClientErrorAction(error: any) {
  return { type: GET_CLIENT_ERROR, error };
}
