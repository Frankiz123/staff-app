/**
 *
 */
const scope = 'src/containers/ContactsList';

/*** */
export const WebService = {
  GET_CLIENTS: 'get_clients',
  GET_CLIENTS_SEARCH: 'get_clients_search',
};

/*** */
export const GET_CLIENTS = `${scope}/GET_CLIENTS`;
export const GET_CLIENTS_SUCCESS = `${scope}/GET_CLIENTS_SUCCESS`;
export const GET_CLIENTS_ERROR = `${scope}/GET_CLIENTS_ERROR`;
/*** */
export const GET_CLIENTS_SEARCH = `${scope}/GET_CLIENTS_SEARCH`;
export const GET_CLIENTS_SEARCH_SUCCESS = `${scope}/GET_CLIENTS_SEARCH_SUCCESS`;
export const GET_CLIENTS_SEARCH_ERROR = `${scope}/GET_CLIENTS_SEARCH_ERROR`;

/*** */
export const SET_SELECTED_CLIENT = `${scope}/SET_SELECTED_CLIENT`;
