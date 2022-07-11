import React from 'react';

import { useDispatch } from 'react-redux';
import messages from './messages';
import { FormattedMessage } from 'components/FormattedMessage';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro';
import { Platform } from 'react-native';
import { getGoogleLinkAction } from 'containers/AuthHelper/slice/actions';
import { SCREENS } from 'navigators/constants';
import { useNavigation } from '@react-navigation/native';

const facebookPermissions = ['public_profile', 'email'];

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleGoogleOauth = async () => {
    dispatch(getGoogleLinkAction({}));
    navigation.navigate(SCREENS.GOOGLE_WEB as never);
  };
  return (
    <>
      <FontAwesome5Brands.Button
        onPress={handleGoogleOauth}
        name={'google'}
        color={'#DB4437'}
        size={30}
        backgroundColor={'white'}
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          padding: 10,
        }}>
        <FormattedMessage style={{}} {...messages.google} />
      </FontAwesome5Brands.Button>
    </>
  );
};

export { GoogleAuth };
