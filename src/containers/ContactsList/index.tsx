import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { getClientsAction, getClientsSearchAction } from './slice/actions';
import { selectClientsList, selectLoading } from './slice/selectors';

import useClientsListSlice from './slice';

import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'theme/makeStyleSheet';

import { SCREENS } from 'navigators/constants';
import ContactsListComponent from './components/ContactsListComponent';
import SearchComponent from './components/SearchComponent';
import { getClientSuccessAction } from 'containers/CurrentClient/slice/actions';
import useCurrentClientSlice from 'containers/CurrentClient/slice';
import FloatingAddButton from 'components/FloatingAddButton';

const ContactsList = () => {
  useClientsListSlice();
  useCurrentClientSlice();
  const dispatch = useDispatch();
  const theme = useTheme();
  const styles = makeStyles();
  const navigation = useNavigation();
  const [keyword, setKeyword] = useState('');
  const loading = useSelector(selectLoading);

  useEffect(() => {
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
      <View style={{ backgroundColor: 'white' }}>
        <View>
          <SearchComponent
            onBlur={handleSearch}
            onChangeText={(text: any) => {
              setKeyword(text);
              if (text === '') {
                dispatch(getClientsAction({ firstPage: true }));
              }
            }}
            value={keyword}
          />
        </View>
        {loading ? (
          <ActivityIndicator
            size="large"
            color={theme.colors.primary}
            style={{ height: '100%', width: '100%' }}
          />
        ) : (
          <View style={styles.container}>
            <ContactsListComponent
              keyword={keyword}
              onClientPress={(item: any) => {
                dispatch(getClientSuccessAction(item));
                navigation.navigate(
                  SCREENS.CLIENT_DETAILS as never,
                  {
                    clientId: item.id,
                  } as never,
                );
              }}
            />
          </View>
        )}
      </View>
      <FloatingAddButton
        onPress={() => navigation.navigate(SCREENS.NEW_CLIENT as never)}
      />
    </>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  container: {
    backgroundColor: 'white',
  },
  contactCard: {
    backgroundColor: 'white',
    borderColor: 'black',
  },
}));

export interface IContactCardProps {
  id: any;
  avatar: any;
  name: string;
  surname: string;
  phone: string;
}

export default ContactsList;
