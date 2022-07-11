import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import useTheme from 'hooks/useTheme';
import { CustomTabNavigator } from 'navigators/CustomTabNavigator';
import { SCREENS } from 'navigators/constants';

import NewsFeedContainer from 'containers/NewsFeed';
import NewsFeedTab from './components/NewsFeedTab';
import { FILTERS } from './constants';
import useCurrentClientSlice from 'containers/CurrentClient/slice';

const Tab = createMaterialTopTabNavigator();

const NewsFeedScreen: React.FC<INewsFeedScreenProps> = (props) => {
  useCurrentClientSlice();
  const theme = useTheme();

  return (
    <>
      <NewsFeedContainer />
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: { width: 130, height: 60 },
          tabBarLabelStyle: { fontSize: theme.fontSizes.xsmall },
          tabBarStyle: {},
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.secondary,
          tabBarScrollEnabled: true,
          lazy: true,
          lazyPreloadDistance: 1,
          lazyPlaceholder: () => <></>,
        }}>
        {FILTERS.map((filter, index) => (
          <Tab.Screen
            key={filter.name + '_' + index}
            name={filter.name}
            component={NewsFeedTab}
          />
        ))}
      </Tab.Navigator>
      <CustomTabNavigator screenName={SCREENS.NEWS_FEED} />
    </>
  );
};
export interface INewsFeedScreenProps {}
export default NewsFeedScreen;
