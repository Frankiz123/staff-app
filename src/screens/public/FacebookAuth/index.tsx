import React from 'react';
import { SocialIcon } from 'react-native-elements';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';

import { useDispatch } from 'react-redux';
import { facebookAuthAction } from 'containers/AuthHelper/slice/actions';
import messages from './messages';
import { FormattedMessage } from 'components/FormattedMessage';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro';
import { Platform } from 'react-native';

const facebookPermissions = ['public_profile', 'email'];

const FacebookAuth = () => {
  const dispatch = useDispatch();

  const loginWithFacebook = async () => {
    if (Platform.OS === 'android') {
      await LoginManager.setLoginBehavior('native_with_fallback');
    }
    await LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      (login: any) => {
        if (login.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((data: any) => {
            const accessToken = data.accessToken.toString();
            console.log('loginWithFacebook accesToken :: ', accessToken);
            dispatch(facebookAuthAction(accessToken));
          });
        }
      },
      (error: String) => {
        console.log('Login fail with error: ' + error);
      },
    );
  };
  return (
    <>
      <FontAwesome5Brands.Button
        onPress={loginWithFacebook}
        name={'facebook'}
        color={'#4267B2'}
        size={30}
        backgroundColor={'white'}
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          padding: 10,
        }}>
        <FormattedMessage style={{}} {...messages.facebook} />
      </FontAwesome5Brands.Button>
    </>
  );
};

export { FacebookAuth };
