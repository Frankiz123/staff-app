import React from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import useBookingDetailsSlice from './slice';

const BookingDetailsContainer: React.FC<IBookingDetailsContainerProps> = (
  props,
) => {
  useBookingDetailsSlice();
  return <></>;
};
export interface IBookingDetailsContainerProps {}
export default BookingDetailsContainer;
