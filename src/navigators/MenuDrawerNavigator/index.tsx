import React from 'react';
import {
  createDrawerNavigator,
  DrawerHeaderProps,
} from '@react-navigation/drawer';
import { translate } from 'i18n';

import { DrawerContent } from './components/DrawerContent';

import { NAVIGATORS, SCREENS } from 'navigators/constants';
import BookingsScreen from 'screens/staff/BookingsScreen';
import ContactsScreen from 'screens/staff/ContactsScreen';
import NewsFeedScreen from 'screens/staff/NewsFeedScreen';
import TodayScreen from 'screens/staff/Today';
import NewsFeedFilterComponent from 'screens/staff/NewsFeedScreen/components/NewsFeedFilter';
import { createStackNavigator } from '@react-navigation/stack';
import AddAppointmentScreen from 'screens/staff/Appointment/AddAppointmentScreen';
import UpdateAppointmentScreen from 'screens/staff/Appointment/UpdateAppointmentScreen';
import BookingDetailsScreen from 'screens/staff/BookingDetailsScreen';
import ClientDetailsScreen from 'screens/staff/ClientDetailsScreen';
import messages from 'navigators/messages';
import StaffListScreen from 'screens/staff/StaffListScreen';
import ServicesScreen from 'screens/staff/ServicesScreen';
import ServiceCategoriesScreen from 'screens/staff/ServiceCategoriesScreen';
import AddClientScreen from 'screens/staff/AddClientScreen';
import InfoScreen from 'screens/staff/InfoScreen';
import AddressDetailsScreen from 'screens/staff/AddressDetailsScreen';
import CheckoutScreen from 'screens/staff/CheckoutScreen';
import InventoryScreen from 'screens/staff/Inventory';
import PaymentScreen from 'screens/staff/PaymentScreen';
import CancelAppointmentScreen from 'screens/staff/Appointment/CancelAppointmentScreen';
import TaskListScreen from 'screens/staff/TaskListScreen';
import TasksFilterComponent from 'screens/staff/TaskListScreen/components/TasksFilter';
import AddTaskScreen from 'screens/staff/AddTaskScreen';
import { useSelector } from 'react-redux';
import { selectCurrentTask } from 'containers/CurrentTask/slice/selectors';
import AddBusyTimeScreen from 'screens/staff/AddBusyTimeScreen';
import GoogleWebView from 'screens/public/GoogleWebView';
import { TouchableOpacity, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import useTheme from 'hooks/useTheme';
import JSONTree from 'react-native-json-tree';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export const DefaultStackNavigator = () => {
  const currentTask = useSelector(selectCurrentTask);
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: (props) => {
          return (
            <TouchableOpacity
              style={{ padding: theme.space.s }}
              onPress={() => navigation.goBack()}>
              <Ionicons
                name={'arrow-back'}
                color={theme.colors.primary}
                size={25}
              />
            </TouchableOpacity>
          );
        },
      }}>
      <Stack.Screen
        options={{ headerShown: false }}
        key={NAVIGATORS.MENU}
        name={NAVIGATORS.MENU}
        component={DrawerNavigator}
      />
      <Stack.Screen
        key={SCREENS.BOOKING_DETAILS}
        name={SCREENS.BOOKING_DETAILS}
        component={BookingDetailsScreen}
        options={{
          title: translate(
            messages.bookingDetails.scope,
            messages.bookingDetails.options,
          ),
        }}
      />
      <Stack.Screen
        key={SCREENS.CLIENT_DETAILS}
        name={SCREENS.CLIENT_DETAILS}
        component={ClientDetailsScreen}
        options={{
          title: translate(
            messages.clientDetails.scope,
            messages.clientDetails.options,
          ),
        }}
      />
      <Stack.Screen
        key={SCREENS.ADD_APPOINTMENT}
        name={SCREENS.ADD_APPOINTMENT}
        component={AddAppointmentScreen}
        options={{
          title: translate(
            messages.addAppointment.scope,
            messages.addAppointment.options,
          ),
        }}
      />
      <Stack.Screen
        key={SCREENS.UPDATE_APPOINTMENT}
        name={SCREENS.UPDATE_APPOINTMENT}
        component={UpdateAppointmentScreen}
        options={{
          title: translate(
            messages.updateAppointment.scope,
            messages.updateAppointment.options,
          ),
        }}
      />
      <Stack.Screen
        key={SCREENS.CANCEL_APPOINTMENT}
        name={SCREENS.CANCEL_APPOINTMENT}
        component={CancelAppointmentScreen}
        options={{
          title: translate(
            messages.cancelAppointment.scope,
            messages.cancelAppointment.options,
          ),
        }}
      />
      <Stack.Screen
        key={SCREENS.CHECKOUT}
        name={SCREENS.CHECKOUT}
        component={CheckoutScreen}
        options={{
          title: translate(messages.checkout.scope, messages.checkout.options),
        }}
      />
      <Stack.Screen
        key={SCREENS.NEW_CLIENT}
        name={SCREENS.NEW_CLIENT}
        component={AddClientScreen}
        options={{
          title: translate(
            messages.newClient.scope,
            messages.newClient.options,
          ),
        }}
      />
      <Stack.Screen
        key={SCREENS.INFO}
        name={SCREENS.INFO}
        component={InfoScreen}
        options={{
          title: translate(messages.info.scope, messages.info.options),
        }}
      />
      <Stack.Screen
        key={SCREENS.ADDRESS_DETAILS}
        name={SCREENS.ADDRESS_DETAILS}
        component={AddressDetailsScreen}
        options={{
          title: translate(
            messages.addressDetails.scope,
            messages.addressDetails.options,
          ),
        }}
      />
      <Stack.Screen
        key={SCREENS.PAYMENT}
        name={SCREENS.PAYMENT}
        component={PaymentScreen}
        options={{
          title: translate(messages.payment.scope, messages.payment.options),
        }}
      />
      <Stack.Screen
        key={SCREENS.ADD_TASK}
        name={SCREENS.ADD_TASK}
        component={AddTaskScreen}
        options={{
          title: `${translate(
            messages.create.scope,
            messages.create.options,
          )} ${(() => {
            switch (currentTask?.taskType) {
              case 'Task':
                return translate(
                  messages.addTask.scope,
                  messages.addTask.options,
                );
              case 'Email':
                return translate(
                  messages.addEmailLog.scope,
                  messages.addEmailLog.options,
                );
              case 'Meeting':
                return translate(
                  messages.addMeetingLog.scope,
                  messages.addMeetingLog.options,
                );
              case 'Call':
                return translate(
                  messages.addCallLog.scope,
                  messages.addCallLog.options,
                );
              default:
                return translate(
                  messages.addTask.scope,
                  messages.addTask.options,
                );
            }
          })()}`,
        }}
      />
      <Stack.Screen
        key={SCREENS.BUSY_TIME}
        name={SCREENS.BUSY_TIME}
        component={AddBusyTimeScreen}
        options={{
          title: translate(messages.busyTime.scope, messages.busyTime.options),
        }}
      />
      {/* <Stack.Screen
        key={SCREENS.GOOGLE_WEB}
        name={SCREENS.GOOGLE_WEB}
        component={GoogleWebView}
        options={{
          title: translate(messages.googleWeb.scope, messages.googleWeb.options),
        }}
      /> */}
    </Stack.Navigator>
  );
};
export const DrawerNavigator = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        headerLeft: () => {
          return (
            <TouchableOpacity
              style={{ padding: theme.space.s }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Ionicons name={'menu'} color={theme.colors.primary} size={25} />
            </TouchableOpacity>
          );
        },
      }}
      drawerContent={DrawerContent}>
      <Drawer.Screen
        name={SCREENS.TODAY}
        component={TodayScreen}
        options={{
          title: translate(messages.today.scope, messages.today.options),
        }}
      />
      <Drawer.Screen
        options={{
          title: translate(messages.contacts.scope, messages.contacts.options),
        }}
        name={SCREENS.CONTACTS}
        component={ContactsScreen}
      />
      <Drawer.Screen
        name={SCREENS.BOOKINGS}
        component={BookingsScreen}
        options={{
          title: translate(messages.bookings.scope, messages.bookings.options),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={SCREENS.NEWS_FEED}
        component={NewsFeedScreen}
        options={{
          title: translate(messages.newsfeed.scope, messages.newsfeed.options),
          // headerRight: ({ tintColor, pressColor, pressOpacity }) => (
          //   <NewsFeedFilterComponent />
          // ),
        }}
      />
      <Drawer.Screen
        name={SCREENS.STAFF}
        component={StaffListScreen}
        options={{
          title: translate(messages.staff.scope, messages.staff.options),
        }}
      />
      <Drawer.Screen
        name={SCREENS.SERVIVES}
        component={ServicesScreen}
        options={{
          title: translate(messages.services.scope, messages.services.options),
        }}
      />
      <Drawer.Screen
        name={SCREENS.INVENTORY}
        component={InventoryScreen}
        options={{
          title: translate(
            messages.inventory.scope,
            messages.inventory.options,
          ),
        }}
      />
      <Drawer.Screen
        name={SCREENS.TASKS}
        component={TaskListScreen}
        options={{
          title: translate(
            messages.tasksAndNotes.scope,
            messages.tasksAndNotes.options,
          ),
          headerRight: ({ tintColor, pressColor, pressOpacity }) => (
            <TasksFilterComponent />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
