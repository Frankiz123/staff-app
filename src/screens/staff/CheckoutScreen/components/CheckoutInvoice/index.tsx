import { FormattedMessage } from 'components/FormattedMessage';
import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';
import { selectTotal } from 'containers/CurrentBooking/slice/selectors';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import messages from '../../messages';

const CheckoutInvoiceComponent: React.FC<ICheckoutInvoiceComponentProps> = (
  props,
) => {
  const theme = useTheme();
  const total = useSelector(selectTotal);
  const currency = useSelector(selectCurrency);
  return (
    <>
      <FormattedMessage
        options={messages.payments.options}
        scope={messages.payments.scope}
        style={{ marginBottom: theme.space.s, fontWeight: 'bold' }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <FormattedMessage
          options={messages.total.options}
          scope={messages.total.scope}
          style={{ marginBottom: theme.space.s }}
        />
        <Text style={{ color: 'black' }}>
          {currency?.prefix}
          {total}
          {currency?.suffix}
        </Text>
      </View>
    </>
  );
};
export interface ICheckoutInvoiceComponentProps {}
export default CheckoutInvoiceComponent;
