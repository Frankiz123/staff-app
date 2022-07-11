import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { CustomTabNavigator } from 'navigators/CustomTabNavigator';
import { SCREENS } from 'navigators/constants';
import useTheme from 'hooks/useTheme';

import ContactsList from 'containers/ContactsList';

const ContactsScreen: React.FC<IContactsScreenProps> = (props) => {
  const theme = useTheme();
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ContactsList />
      </View>

      <CustomTabNavigator screenName={SCREENS.CONTACTS} />
    </>
  );
};
export interface IContactsScreenProps {}
export default ContactsScreen;
