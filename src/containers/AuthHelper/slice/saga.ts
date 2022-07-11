import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { getCurrency } from 'containers/CurrencyHelper/slice/saga';
import { Alert } from 'react-native';
import { AnyAction } from 'redux';
import { call, takeLatest, put, all } from 'redux-saga/effects';
import { request } from 'utils';
import {
  rehydrateTokenAction,
  signInErrorAction,
  signInSuccessAction,
  getGoogleLinkSuccessAction,
  getGoogleLinkErrorAction,
  facebookAuthSuccessAction,
  facebookAuthErrorAction,
  appleAuthSuccessAction,
  appleAuthErrorAction,
  OauthGoogleLoginAction,
  OauthGoogleLoginSuccessAction,
  OauthGoogleLoginErrorAction,
  GetMessagingTokenSuccessAction,
  GetMessagingTokenError,
} from './actions';
import {
  LOG_OUT,
  REHYDRATE_TOKEN,
  GET_GOOGLE_LINK,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  WebService,
  OAUTH_LOGIN,
  APPLE_AUTH_ACTION,
  APPLE_AUTH_ACTION_SUCCESS,
  FACEBOOK_AUTH_ACTION,
  FACEBOOK_AUTH_ACTION_SUCCESS,
  OAUTH_LOGIN_SUCCESS,
  GET_MESSAGING_TOKEN,
} from './constants';

export function* signIn({
  email,
  password,
  messaging_token,
  rememberMe,
}: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.SIGN_IN, {
        email,
        password,
        messaging_token,
      });
    });

    if (response.type == 'error') {
      yield put(signInErrorAction(response));
    } else {
      yield put(signInSuccessAction(response.token, response.extra.account));
      if (rememberMe) {
        yield call(async () => {
          await AsyncStorage.setItem(
            'rememberMe',
            JSON.stringify({
              email,
              password,
              rememberMe,
            }),
          );
        });
      }
    }
  } catch (error) {
    console.log(error);
    yield put(signInErrorAction(error));
  }
}

export function* persistToken({ token, user }: AnyAction) {
  try {
    yield call(async () => {
      await AsyncStorage.setItem('@token', token);
    });
  } catch (error) {
    console.log(error);
  }
}

export function* clearToken({}: AnyAction) {
  try {
    yield call(async () => {
      await AsyncStorage.removeItem('@token');
    });
  } catch (error) {
    console.log(error);
  }
}

export function* rehydrateToken({}: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.REHYDRATE_TOKEN, {});
    });
    if (response.type == 'success' || response.type == 'ok') {
      yield put(
        signInSuccessAction(response.data.token, response.data.account),
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export function* googleAuth({}: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.LOGIN_GOOGLE, {}, false);
    });
    yield put(getGoogleLinkSuccessAction(response.data));
    console.log('respone', response.data);
  } catch (error) {
    console.log('err  :', error);
    yield put(getGoogleLinkErrorAction(error));
  }
}

export function* facebookAuth({ facebookToken }: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(
        WebService.FACEBOOK_AUTH,
        { do_signup: 1, token: facebookToken },
        false,
      );
    });
    // console.log('respone', response.data);
    yield put(
      facebookAuthSuccessAction(
        response.data?.token || response.token,
        response.data?.extra?.account || response.extra?.account,
      ),
    );
  } catch (error) {
    // console.log('err  :', error);
    yield put(facebookAuthErrorAction(error));
  }
}

export function* appleAuth({
  appleToken,
  name,
  surname,
  phone,
  company_name,
}: AnyAction) {
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(
        WebService.APPLE_LOGIN,
        { do_signup: 1, name, surname, phone, company_name, token: appleToken },
        false,
      );
    });
    // console.log('respone', response.data);
    yield put(
      appleAuthSuccessAction(
        response.data?.token || response.token,
        response.data?.extra?.account || response.extra?.account,
      ),
    );
  } catch (error) {
    // console.log('err  :', error);
    yield put(appleAuthErrorAction(error));
  }
}

export function* OauthGoogleLogin({ payload }: AnyAction) {
  try {
    console.log('payload :', payload);
    const { data: response } = yield call(async () => {
      return await request.runAction(
        WebService.LOGIN_GOOGLE,
        {
          token: payload.code,
        },
        false,
      );
    });
    console.log('response :', response);
    yield put(
      OauthGoogleLoginSuccessAction(
        response.data?.token || response.token,
        response.data?.extra?.account || response.extra?.account,
      ),
    );
  } catch (error) {
    console.log('Oauth google login error:', error);
    yield put(OauthGoogleLoginErrorAction(error));
  }
}

export function* GetMessagingToken() {
  try {
    const respone: AnyAction = yield call(
      async () => await messaging().getToken(),
    );
    yield put(GetMessagingTokenSuccessAction(respone));
  } catch (error) {
    console.log('error messagetoken', error);
    yield put(GetMessagingTokenError(error));
  }
}

// Individual exports for testing
export default function* authHelperSaga() {
  yield takeLatest(SIGN_IN, signIn);
  yield takeLatest(SIGN_IN_SUCCESS, persistToken);
  yield takeLatest(SIGN_IN_SUCCESS, getCurrency);
  yield takeLatest(APPLE_AUTH_ACTION_SUCCESS, persistToken);
  yield takeLatest(APPLE_AUTH_ACTION_SUCCESS, getCurrency);
  yield takeLatest(FACEBOOK_AUTH_ACTION_SUCCESS, persistToken);
  yield takeLatest(FACEBOOK_AUTH_ACTION_SUCCESS, getCurrency);
  yield takeLatest(OAUTH_LOGIN_SUCCESS, persistToken);
  yield takeLatest(OAUTH_LOGIN_SUCCESS, getCurrency);
  yield takeLatest(LOG_OUT, clearToken);
  yield takeLatest(REHYDRATE_TOKEN, rehydrateToken);
  yield takeLatest(GET_GOOGLE_LINK, googleAuth);
  yield takeLatest(OAUTH_LOGIN, OauthGoogleLogin);
  yield takeLatest(FACEBOOK_AUTH_ACTION, facebookAuth);
  yield takeLatest(GET_MESSAGING_TOKEN, GetMessagingToken);
  yield takeLatest(APPLE_AUTH_ACTION, appleAuth);
}
