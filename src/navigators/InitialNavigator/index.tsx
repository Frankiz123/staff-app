import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { selectToken } from 'containers/AuthHelper/slice/selectors';
import { AuthStackNavigator } from 'navigators/AuthStackNavigator';
import {
  DrawerNavigator,
  DefaultStackNavigator,
} from 'navigators/MenuDrawerNavigator';
import { navigationRef } from 'utils/rootNavigation';

const InitialNavigator = () => {
  const token = useSelector(selectToken);
  return (
    <NavigationContainer ref={navigationRef}>
      {token ? <DefaultStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default InitialNavigator;
