import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import AlertMessage, { IAlertMessageProps } from 'components/AlertMessage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { makeSelectAlerts } from './selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { useInjectReducer } from 'redux-injectors';

import reducer from './reducer';

export type IAlertsProviderProps = { children?: ReactNode };

const stateSelector = createStructuredSelector({
  alerts: makeSelectAlerts,
});

import { key } from './constants';

export const AlertsProvider: React.FC<IAlertsProviderProps> = (props) => {
  const { children } = props;
  useInjectReducer({ key, reducer });

  const insets = useSafeAreaInsets();
  const { alerts } = useSelector(stateSelector);

  return (
    <>
      {children}

      {/* <View
        style={[
          styles.alertMessageContainer,
          { top: Math.max(insets.top + 8, 12) },
        ]}>
        {alerts.top.map((alert: object) => (
          <AlertMessage {...alert} key={alert.id} />
        ))}
      </View>

      <View
        style={[
          styles.alertMessageContainer,
          { bottom: Math.max(insets.bottom + 8, 12) },
        ]}>
        {alerts.bottom.map((alert: IAlertMessageProps) => (
          <AlertMessage {...alert} key={alert.id} />
        ))}
      </View> */}
      <AlertsBlock alerts={alerts.top} gravity="top" />
      <AlertsBlock alerts={alerts.bottom} gravity="bottom" />
    </>
  );
};

type AlertsBlockProptypes = {
  alerts: Array<any>;
  gravity: string;
};

const AlertsBlock = ({ alerts, gravity }: AlertsBlockProptypes) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.alertMessageContainer,
        { [gravity]: Math.max(insets[gravity] + 8, 12) },
      ]}>
      {alerts.map((alert: object) => (
        <AlertMessage {...alert} key={alert.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  alertMessageContainer: {
    position: 'absolute',
    left: 0,
    right: 0,

    alignSelf: 'center',
  },
  top: {
    top: 8,
  },
  bottom: {
    bottom: 8,
  },
});

export default AlertsProvider;
export type { ALERT_GRAVITY } from './constants';
