import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';
import { selectCurrentBooking } from 'containers/CurrentBooking/slice/selectors';
import ContactListPickerContainer from 'containers/ContactsList/ContactPicker';
import useTheme from 'hooks/useTheme';
import ServicesListComponent from 'containers/ServicesList/components/ServicesList';
import ProductPickerComponent from './components/ProductPicker';
import { FormattedMessage } from 'components/FormattedMessage';
import messages from './messages';
import CheckoutActionsComponent from './components/CheckoutActions';
import CheckoutInvoiceComponent from './components/CheckoutInvoice';
import ClientCardComponent from '../BookingDetailsScreen/components/ClientCard';

const CheckoutScreen: React.FC<ICheckoutScreenProps> = (props) => {
  const theme = useTheme();
  const booking = useSelector(selectCurrentBooking);
  const { services, total, client } = booking;

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ padding: theme.space.s }}>
        {/* <ContactListPickerContainer
          onClientSelected={(client: any) => {
            Alert.alert(JSON.stringify(client));
          }}
          selectedClient={client}
        /> */}
        <ClientCardComponent
          clientAvatar={client?.avatar || ''}
          clientName={client?.name || ''}
          clientSurname={client?.surname || ''}
          clientEmail={client?.phone || ''}
          onPress={() => {}}
        />
      </View>
      <View style={{ padding: theme.space.s }}>
        <FormattedMessage
          options={messages.services.options}
          scope={messages.services.scope}
          style={{ marginBottom: theme.space.s, fontWeight: 'bold' }}
        />
        <ServicesListComponent servicesList={services} />
      </View>
      <View style={{ padding: theme.space.s }}>
        <ProductPickerComponent />
      </View>
      <View style={{ padding: theme.space.s }}>
        <CheckoutInvoiceComponent />
      </View>
      <CheckoutActionsComponent />
    </View>
  );
};
export interface ICheckoutScreenProps {}
export default CheckoutScreen;
