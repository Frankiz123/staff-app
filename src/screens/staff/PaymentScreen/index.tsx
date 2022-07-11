import PaymentsContainer from 'containers/Payments';
import React from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import PaymentActionsComponent from './components/PaymentActions';
import PaymentWebView from './components/PymentWebView';

const PaymentScreen: React.FC<IPaymentScreenProps> = (props) => {
  return (
    <>
      <PaymentsContainer />
      <PaymentActionsComponent />
      <PaymentWebView />
    </>
  );
};
export interface IPaymentScreenProps {}
export default PaymentScreen;
