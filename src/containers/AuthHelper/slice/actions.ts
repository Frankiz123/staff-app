/**
 *
 */

import {
  LOG_OUT,
  REHYDRATE_TOKEN,
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  APPLE_AUTH_ACTION,
  APPLE_AUTH_ACTION_ERROR,
  APPLE_AUTH_ACTION_SUCCESS,
  FACEBOOK_AUTH_ACTION,
  FACEBOOK_AUTH_ACTION_ERROR,
  FACEBOOK_AUTH_ACTION_SUCCESS,
  GET_GOOGLE_LINK,
  GET_GOOGLE_LINK_ERROR,
  GET_GOOGLE_LINK_SUCCESS,
  OAUTH_LOGIN,
  OAUTH_LOGIN_SUCCESS,
  OAUTH_LOGIN_ERROR,
  GET_MESSAGING_TOKEN,
  GET_MESSAGING_TOKEN_SUCCESS,
  GET_MESSAGING_TOKEN_ERROR,
} from './constants';
import { FACEBOOK_APPLE } from './types';

export function signInAction({
  email,
  password,
  messaging_token = '',
  rememberMe = false,
}: {
  email: string;
  password: string;
  messaging_token?: string;
  rememberMe?: boolean;
}) {
  return { type: SIGN_IN, email, password, messaging_token, rememberMe };
}

export function signInSuccessAction(token: string, user: any) {
  return { type: SIGN_IN_SUCCESS, token, user };
}

export function signInErrorAction(error: any) {
  return { type: SIGN_IN_ERROR, error };
}

export function logOutAction() {
  return { type: LOG_OUT };
}

export function rehydrateTokenAction() {
  return { type: REHYDRATE_TOKEN };
}

export function getGoogleLinkAction(payload: any) {
  return { type: GET_GOOGLE_LINK, payload };
}

export function getGoogleLinkSuccessAction(googleLink: any) {
  return { type: GET_GOOGLE_LINK_SUCCESS, googleLink };
}

export function getGoogleLinkErrorAction(error: any) {
  return { type: GET_GOOGLE_LINK_ERROR, error };
}

export function facebookAuthAction(facebookToken: string) {
  return {
    type: FACEBOOK_AUTH_ACTION,
    facebookToken,
  };
}
export function facebookAuthSuccessAction(token: string, user: any) {
  return { type: FACEBOOK_AUTH_ACTION_SUCCESS, token, user };
}
export function facebookAuthErrorAction(error: any) {
  return { type: FACEBOOK_AUTH_ACTION_ERROR, error };
}

export function appleAuthAction({
  appleToken,
  name,
  surname,
  phone,
  company_name,
}: {
  appleToken: string;
  name: string;
  surname: string;
  phone: string;
  company_name: string;
}) {
  return {
    type: APPLE_AUTH_ACTION,
    appleToken,
    name,
    surname,
    phone,
    company_name,
  };
}
export function appleAuthSuccessAction(token: string, user: any) {
  return { type: APPLE_AUTH_ACTION_SUCCESS, token, user };
}
export function appleAuthErrorAction(error: any) {
  return { type: APPLE_AUTH_ACTION_ERROR, error };
}

export function OauthGoogleLoginAction(payload: any) {
  return { type: OAUTH_LOGIN, payload };
}
export function OauthGoogleLoginSuccessAction(token: any, user: any) {
  return { type: OAUTH_LOGIN_SUCCESS, token, user };
}

export function OauthGoogleLoginErrorAction(error: any) {
  return { type: OAUTH_LOGIN_ERROR, error };
}

export function GetMessagingTokenAction() {
  return { type: GET_MESSAGING_TOKEN };
}

export function GetMessagingTokenSuccessAction(messaging_token: any) {
  return { type: GET_MESSAGING_TOKEN_SUCCESS, messaging_token };
}

export function GetMessagingTokenError(error: any) {
  return { type: GET_MESSAGING_TOKEN_ERROR, error };
}
