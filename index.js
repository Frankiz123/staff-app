/**
 * @format
 */

if (__DEV__) {
  import('./src/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async (remoteMessage) => {});
// import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
