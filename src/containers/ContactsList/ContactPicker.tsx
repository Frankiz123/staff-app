import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  SafeAreaView,
} from 'react-native';
import {
  getClientsAction,
  getClientsSearchAction,
  setSelectedClientAction,
} from './slice/actions';
import {
  selectClientsList,
  selectLoading,
  selectSeletedClient,
} from './slice/selectors';
// import { setSelectedclientAction as setSelectedClientForCurrentBookingAction } from 'containers/CurrentBooking/slice/actions';

import useClientsListSlice from './slice';

import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import { FormattedMessage } from 'components/FormattedMessage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomSheet } from 'components/BottomSheet';
import messages from './messages';
import ContactsListComponent from './components/ContactsListComponent';
import ClientCardComponent from 'screens/staff/BookingDetailsScreen/components/ClientCard';
// import { selectClient } from 'containers/CurrentBooking/slice/selectors';
// import { IClient } from 'containers/CurrentClient/slice/types';
import { IBookingClient } from 'containers/currentBooking/slice/types';
import SearchComponent from './components/SearchComponent';
const ContactListPickerContainer: React.FC<
  IContactListPickerContainerProps
> = ({ onClientSelected, selectedClient }) => {
  useClientsListSlice();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const styles = makeStyles();
  const theme = useTheme();

  const [clientListVisible, setClientListVisible] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [listView, setListView] = useState(true);
  const clients = useSelector(selectClientsList);
  const loading = useSelector(selectLoading);
  const client = selectedClient;
  const {
    id = null,
    avatar = null,
    name = null,
    surname = null,
    phone = null,
  } = client || {
    id: null,
    avatar: null,
    name: null,
    surname: null,
    phone: null,
  };

  useEffect(() => {
    dispatch(setSelectedClientAction(null));
    dispatch(getClientsAction({ firstPage: true }));
  }, []);

  const handleSearch = () => {
    if (keyword === '') {
      dispatch(getClientsAction({ firstPage: true }));
    } else {
      dispatch(
        getClientsSearchAction({
          match: keyword,
          firstPage: true,
        }),
      );
    }
  };
  return (
    <>
      <View>
        <FormattedMessage
          options={messages.client.options}
          scope={messages.client.scope}
          style={{ fontWeight: 'bold' }}
        />
        <TouchableOpacity
          onPress={() => {
            setClientListVisible(true);
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            padding: 10,
          }}>
          {id ? (
            <ClientCardComponent
              clientAvatar={avatar || ''}
              clientName={name || ''}
              clientSurname={surname || ''}
              clientEmail={phone || ''}
              onPress={() => {
                setClientListVisible(true);
              }}
            />
          ) : (
            <>
              <FormattedMessage
                options={messages.selectClient.options}
                scope={messages.selectClient.scope}
              />
              <MaterialCommunityIcons
                name={'chevron-down'}
                size={25}
                style={{ color: 'black' }}
              />
            </>
          )}
        </TouchableOpacity>
        <BottomSheet
          visible={clientListVisible}
          onBackButtonPress={() => {
            setClientListVisible(!clientListVisible);
          }}
          onBackdropPress={() => {
            setClientListVisible(!clientListVisible);
          }}>
          <View
            style={{
              backgroundColor: 'white',
              paddingTop: theme.space.s,
              paddingBottom: theme.insets.bottom + theme.space.s,
              borderTopLeftRadius: theme.space.s,
              borderTopRightRadius: theme.space.s,
              maxHeight: theme.dimensions.height - 200,
            }}>
            <SearchComponent
              value={keyword}
              onBlur={handleSearch}
              onChangeText={(text: any) => {
                setKeyword(text);
                if (text === '') {
                  dispatch(getClientsAction({ firstPage: true }));
                }
              }}
              onFocus={() => setListView(false)}
              onEndEditing={() => setListView(true)}
            />
            <FormattedMessage
              options={messages.client.options}
              scope={messages.client.scope}
              style={{ fontWeight: 'bold', padding: theme.space.s }}
            />

            {loading ? (
              <ActivityIndicator
                size="large"
                color={theme.colors.primary}
                style={{ height: '100%', width: '100%' }}
              />
            ) : (
              <>
                {listView && (
                  <ContactsListComponent
                    keyword={keyword}
                    onClientPress={(item: any) => {
                      setClientListVisible(!clientListVisible);
                      const { id, avatar, name, surname, phone } = item;
                      onClientSelected({ id, avatar, name, surname, phone });
                    }}
                  />
                )}
              </>
            )}
          </View>
        </BottomSheet>
      </View>
    </>
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

export interface IContactListPickerContainerProps {
  onClientSelected: any;
  selectedClient: IBookingClient | null;
}
export default ContactListPickerContainer;
