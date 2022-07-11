/*
 *
 *  reducer
 *
 */

import produce from 'immer';
import {
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  LOG_OUT,
  GET_GOOGLE_LINK,
  GET_GOOGLE_LINK_SUCCESS,
  OAUTH_LOGIN_SUCCESS,
  APPLE_AUTH_ACTION,
  APPLE_AUTH_ACTION_ERROR,
  APPLE_AUTH_ACTION_SUCCESS,
  FACEBOOK_AUTH_ACTION,
  FACEBOOK_AUTH_ACTION_ERROR,
  FACEBOOK_AUTH_ACTION_SUCCESS,
  GET_MESSAGING_TOKEN_SUCCESS,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  token: null,
  user: null,
  googleLink: null,
  facebookAccessToken: null,
  messaging_token: null,
};

/* eslint-disable default-case, no-param-reassign */
const authHelperReducer = produce((draft, action) => {
  switch (action.type) {
    case SIGN_IN:
      draft.loading = true;
      break;
    case SIGN_IN_SUCCESS:
      draft.user = action.user;
      draft.token = action.token;
      draft.loading = false;
      break;
    case SIGN_IN_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
    case LOG_OUT:
      draft.loading = false;
      draft.error = false;
      draft.user = null;
      draft.token = null;
    case GET_GOOGLE_LINK:
      draft.googleLink = null;
      break;
    case GET_GOOGLE_LINK_SUCCESS:
      draft.googleLink = action.googleLink;
      break;
    case OAUTH_LOGIN_SUCCESS:
      draft.user = action.user;
      draft.token = action.token;
      draft.loading = false;
      break;
    case APPLE_AUTH_ACTION:
    case FACEBOOK_AUTH_ACTION:
      draft.loading = true;
      break;
    case APPLE_AUTH_ACTION_SUCCESS:
    case FACEBOOK_AUTH_ACTION_SUCCESS:
      draft.user = action.user;
      draft.token = action.token;
      draft.loading = false;
      break;
    case APPLE_AUTH_ACTION_ERROR:
    case FACEBOOK_AUTH_ACTION_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
    case GET_MESSAGING_TOKEN_SUCCESS:
      draft.messaging_token = action.messaging_token;
      break;
  }
}, initialState);

export default authHelperReducer;
