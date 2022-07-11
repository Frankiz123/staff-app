import React from 'react';
import { Provider } from 'react-redux';
import { LanguageProvider } from 'providers/LanguageProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { firebase } from '@react-native-firebase/messaging';

import ThemeProvider from 'providers/ThemeProvider';
import AlertsProvider from 'providers/AlertsProvider';

import { App } from 'containers/App';
import configureStore from './src/configureStore';
// import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import { LogBox } from 'react-native';
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";

import { AnySchema } from 'yup';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export type IAppProps = {};

const initialState = {};
const store = configureStore(initialState);

let firebaseConfig = {
  apiKey: "AIzaSyAlxU9N_J7Df5f9oR87sbjeYkUtCwYCaFg",
  authDomain: "cs-bk-cs.firebaseapp.com",
  databaseURL: "https://cs-bk-cs.firebaseio.com",
  projectId: "cs-bk-cs",
  storageBucket: "cs-bk-cs.appspot.com",
  messagingSenderId: "298030132448",
  appId: "1:298030132448:android:591ec8a8c64e5cb5a07485",
  // measurementId: "G-measurement-id",
};
// firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


PushNotification.configure({
  onRegister: function (token: any) {
  },
  onNotification: function (notification: any) {
    notification.finish(PushNotificationIOS.FetchResult.NoData)
  },
  onAction: function (notification: any) {
  },
  onRegistrationError: function (err: any) {
    console.error(err.message, err)
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
})

export const app: React.FC<IAppProps> = () => {
  // const navigationRef = React.useRef();

  return (
    <Provider store={store}>
      <LanguageProvider>
        <SafeAreaProvider>
          <AlertsProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </AlertsProvider>
        </SafeAreaProvider>
      </LanguageProvider>
    </Provider>
  );
};

export default app;
