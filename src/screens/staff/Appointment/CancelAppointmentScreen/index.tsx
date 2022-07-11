import React from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import BookingCancelActionsComponent from '../components/BookingCancelActions';
import CancelFeesPickerComponent from '../components/CancelFeesPicker';

const CancelAppointmentScreen: React.FC<ICancelAppointmentScreenProps> = (
  props,
) => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <CancelFeesPickerComponent />
      <BookingCancelActionsComponent />
    </View>
  );
};
export interface ICancelAppointmentScreenProps {}
export default CancelAppointmentScreen;
