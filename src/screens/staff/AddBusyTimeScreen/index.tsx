import React from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import BusyTime from 'containers/BusyTime';

const AddBusyTimeScreen: React.FC<IAddBusyTimeScreenProps> = (props) => {
  return (
    <>
      <BusyTime />
    </>
  );
};
export interface IAddBusyTimeScreenProps { }
export default AddBusyTimeScreen;
