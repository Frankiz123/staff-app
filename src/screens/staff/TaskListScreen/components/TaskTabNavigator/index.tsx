import React from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import useTheme from 'hooks/useTheme';
import { COLUMNS } from '../../constants';
import TasksTabComponent from '../TasksTab';

const Tab = createMaterialTopTabNavigator();

const TasksTabsNavigator: React.FC<ITasksTabsNavigatorProps> = (props) => {
  const theme = useTheme();
  return (
    <>
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
        {COLUMNS.map((column, index) => (
          <Tab.Screen
            key={column.name + '_' + index}
            name={column.name}
            component={TasksTabComponent}
          />
        ))}
      </Tab.Navigator>
    </>
  );
};
export interface ITasksTabsNavigatorProps {}
export default TasksTabsNavigator;
