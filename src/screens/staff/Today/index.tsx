import React from 'react';
import { ScrollView } from 'react-native';
import { CustomTabNavigator } from 'navigators/CustomTabNavigator';
import { SCREENS } from 'navigators/constants';
import TaskList from 'containers/TaskList';
import BookingsList from 'containers/AppointmentsList/BookingsList';
import useTheme from 'hooks/useTheme';

const TodayScreen: React.FC<ITodayScreenProps> = (props: ITodayScreenProps) => {
  const theme = useTheme();
  return (
    <>
      <ScrollView style={{ flex: 1, paddingBottom: theme.space.xl }}>
        <TaskList />
        <BookingsList />
      </ScrollView>
      <CustomTabNavigator screenName={SCREENS.TODAY} />
    </>
  );
};

export interface ITodayScreenProps { }
export default TodayScreen;
