import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  GestureResponderEvent,
} from 'react-native';

import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'theme/makeStyleSheet';

import ClientCardComponent from 'screens/staff/BookingDetailsScreen/components/ClientCard';
import {
  getClientsAction,
  getClientsSearchAction,
} from 'containers/ContactsList/slice/actions';
import {
  selectClientsList,
  selectLoading,
  selectRefreshing,
} from 'containers/ContactsList/slice/selectors';

const ContactsListComponent: React.FC<IContactsListComponentProps> = ({
  keyword,
  onClientPress,
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const styles = makeStyles();
  // if (loading) {
  //   return (
  //     <ActivityIndicator
  //       size="large"
  //       style={{ height: '100%', width: '100%' }}
  //       color={theme.colors.primary}
  //     />
  //   );
  // }

  const clients = useSelector(selectClientsList);
  const loading = useSelector(selectLoading);
  const refreshing = useSelector(selectRefreshing);

  return (
    <View style={styles.container}>
      <FlatList
        data={clients}
        contentContainerStyle={{ paddingBottom: 150 }}
        renderItem={({ item }) => (
          <ClientCardComponent
            clientAvatar={item.avatar}
            clientName={item.name}
            clientSurname={item.surname}
            clientEmail={item.phone}
            onPress={() => onClientPress && onClientPress(item)}
          />
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => (
          <>
            {refreshing && (
              <ActivityIndicator
                style={{ paddingVertical: 20 }}
                color={theme.colors.primary}
              />
            )}
          </>
        )}
        onEndReached={() => {
          if (keyword === '') {
            dispatch(getClientsAction({}));
          }
        }}
        // onEndReachedThreshold={0}
      />
    </View>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  container: {
    width: '100%',
  },
  contactCard: {
    backgroundColor: 'white',
    borderColor: 'black',
  },
}));

export interface IContactsListComponentProps {
  keyword: string;
  onClientPress: ((event: GestureResponderEvent) => void) | undefined;
}

export interface IContactCardProps {
  id: any;
  avatar: any;
  name: string;
  surname: string;
  phone: string;
}

export default ContactsListComponent;
