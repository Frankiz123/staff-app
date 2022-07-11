/**
 *
 */

const scope = 'src/containers/AuthHelper';

/*** */

export const WebService = {
  SIGN_IN: 'auth',
  REHYDRATE_TOKEN: 'login_refresh',
  LOGIN_GOOGLE: 'login_google',
  FACEBOOK_AUTH: 'facebook_login',
  APPLE_LOGIN: 'apple_login',
};

/*** */

export const SIGN_IN = `${scope}/SIGN_IN`;
export const SIGN_IN_SUCCESS = `${scope}/SIGN_IN_SUCCESS`;
export const SIGN_IN_ERROR = `${scope}/SIGN_IN_ERROR`;

export const LOG_OUT = `${scope}/LOG_OUT`;

export const REHYDRATE_TOKEN = `${scope}/REHYDRATE_TOKEN`;

export const GET_GOOGLE_LINK = `${scope}/GET_GOOGLE_LINK`;
export const GET_GOOGLE_LINK_ERROR = `${scope}/SET_GOOGLE_LINK_ERROR`;
export const GET_GOOGLE_LINK_SUCCESS = `${scope}/SET_GOOGLE_LINK_SUCCESS`;

export const FACEBOOK_AUTH_ACTION = `${scope}/FACEBOOK_AUTH_ACTION`;
export const FACEBOOK_AUTH_ACTION_SUCCESS = `${scope}/FACEBOOK_AUTH_ACTION_SUCCESS`;
export const FACEBOOK_AUTH_ACTION_ERROR = `${scope}/FACEBOOK_AUTH_ACTION_ERROR`;

export const APPLE_AUTH_ACTION = `${scope}/APPLE_AUTH_ACTION`;
export const APPLE_AUTH_ACTION_SUCCESS = `${scope}/APPLE_AUTH_ACTION_SUCCESS`;
export const APPLE_AUTH_ACTION_ERROR = `${scope}/APPLE_AUTH_ACTION_ERROR`;

export const OAUTH_LOGIN = `${scope}/OAUTH_LOGIN`;
export const OAUTH_LOGIN_SUCCESS = `${scope}/OAUTH_LOGIN_SUCCESS`;
export const OAUTH_LOGIN_ERROR = `${scope}/OAUTH_LOGIN_ERROR`;

export const GET_MESSAGING_TOKEN = `${scope}/GET_MESSAGING_TOKEN`;
export const GET_MESSAGING_TOKEN_SUCCESS = `${scope}/GET_MESSAGING_TOKEN_SUCCESS`;
export const GET_MESSAGING_TOKEN_ERROR = `${scope}/GET_MESSAGING_TOKEN_ERROR`;
