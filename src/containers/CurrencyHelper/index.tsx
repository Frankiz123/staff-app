import React from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import useCurrencyHelperSlice from './slice';

const CurrencyHelperContainer: React.FC<ICurrencyHelperContainerProps> = (
  props,
) => {
  useCurrencyHelperSlice();
  return <></>;
};
export interface ICurrencyHelperContainerProps {}
export default CurrencyHelperContainer;
