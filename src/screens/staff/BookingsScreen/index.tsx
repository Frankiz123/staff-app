import React from 'react';
import AppointmentsList from 'containers/AppointmentsList';
import { CustomTabNavigator } from 'navigators/CustomTabNavigator';
import { SCREENS } from 'navigators/constants';
import FloattingButton from 'components/FloatingButton';

const BookingsScreen: React.FC<IBookingsScreenProps> = (props) => {
  return (
    <>
      <AppointmentsList />
      <CustomTabNavigator screenName={SCREENS.BOOKINGS} />
      <FloattingButton />
    </>
  );
};
export interface IBookingsScreenProps {}
export default BookingsScreen;
