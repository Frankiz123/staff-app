import React from 'react';
import { Text, View, SafeAreaView, Image, ImageStyle } from 'react-native';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import LoginFormComponent from './components/LoginForm';
import { FormattedMessage } from 'components/FormattedMessage';
import messages from './components/LoginForm/messages';
import { IMAGES } from 'assets';
import { FacebookAuth } from '../FacebookAuth';
import { AppleAuth } from '../AppleAuth';
import { GoogleAuth } from '../GoogleAuth';
import appleAuth from '@invertase/react-native-apple-authentication';

const LoginScreen: React.FC<ILoginScreenProps> = (props) => {
  const styles = makeStyles();

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.container}>
        <Image source={IMAGES.LOGO} style={styles.logo} />
        <LoginFormComponent />
        <FormattedMessage
          style={{
            fontSize: 16,
            marginTop: '5%',
            alignSelf: 'center',
            color: 'gray',
          }}
          {...messages.orLoginWith}
        />
        <View>
          {appleAuth.isSupported && <AppleAuth />}
          <FacebookAuth />
          <GoogleAuth />
        </View>
      </View>
    </SafeAreaView>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  screenContainer: { flex: 1 },
  container: {
    flex: 1,
    marginHorizontal: theme.space.s,
    padding: theme.space.s,
    backgroundColor: 'white',
    borderRadius: theme.space.xs,
    ...theme.defaultShadow,
  },
  logo: {
    alignSelf: 'center',
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginHorizontal: theme.space.m,
  } as ImageStyle,
}));
export interface ILoginScreenProps { }
export default LoginScreen;
