import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import useTheme from 'hooks/useTheme';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectClient,
  selectLoading,
} from 'containers/CurrentClient/slice/selectors';
import JSONTree from 'react-native-json-tree';
import useCurrentClientSlice from 'containers/CurrentClient/slice';
import Avatar from 'components/Avatar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import { showAlertAction } from 'providers/AlertsProvider/actions';
import ClientContactCard from './components/ClientContactCard';

const Tab = createMaterialTopTabNavigator();

const ClientDetailsScreen: React.FC<IClientDetailsScreenProps> = ({}) => {
  // useCurrentClientSlice();
  const styles = makeStyle();
  const theme = useTheme();
  const dispatch = useDispatch();
  const client = useSelector(selectClient);
  const loading = useSelector(selectLoading);

  return (
    <>
      {/* <JSONTree hideRoot data={{ client }} /> */}
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      ) : (
        <>
          <ClientContactCard />
        </>
      )}
      {/* <Tab.Navigator
        screenOptions={{
          // tabBarItemStyle: { width: 130, height: 60 },
          tabBarLabelStyle: { fontSize: theme.fontSizes.xsmall },
          tabBarStyle: {},
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.secondary,
          tabBarScrollEnabled: true,
          lazy: true,
          lazyPreloadDistance: 1,
          lazyPlaceholder: () => <></>,
        }}>
        <Tab.Screen
          key={'activity'}
          name={'Activity'}
          component={() => <></>}
        />
        <Tab.Screen key={'about'} name={'About'} component={() => <></>} />
        <Tab.Screen
          key={'bookings'}
          name={'Bookings'}
          component={() => <></>}
        />
      </Tab.Navigator> */}
    </>
  );
};

const makeStyle = makeStyleSheet((theme) => ({}));

export interface IClientDetailsScreenProps {}
export default ClientDetailsScreen;
