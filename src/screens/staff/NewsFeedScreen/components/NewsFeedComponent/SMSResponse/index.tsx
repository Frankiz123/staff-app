import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import { translate } from 'i18n';

import { EmailSmsDetailsModal } from '../EmailSmsDetailsModal';
import messages from '../messages';
import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'utils/makeStyleSheet';
import commonMessages from '../../../messages';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'navigators/constants';
import { getClientAction } from 'containers/CurrentClient/slice/actions';
import { useDispatch } from 'react-redux';

const Component20: React.FC<IComponentProps> = ({
  item: {
    client_name: clientName,
    id,
    booking_id: bookingId,
    phone: phoneNumber,
    date_received: dateReceived,
    message,
    client_id,
  },
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = makeStyles();

  const theme = useTheme();

  const formattedDate = moment(dateReceived, 'YYYY-MM-DD HH:mm:ss');

  const [isOpen, setIsOpen] = useState(false);
  const openDetailsModal = () => setIsOpen(true);
  const closeDetailsModal = () => setIsOpen(false);

  return (
    <>
      <View style={styles.container}>
        <View style={{ padding: theme.space.s }}>
          <View>
            <Text style={[{ color: theme.colors.primary }, {}]}>
              {`${
                clientName
                  ? clientName
                  : translate(
                      messages.receivedSms.scope,
                      messages.receivedSms.options,
                    )
              }`}
            </Text>
          </View>
        </View>

        <View style={{ padding: theme.space.s }}>
          <View>
            <Text style={{ color: 'black' }}>
              {`${translate(
                messages.receivedSmsTo.scope,
                messages.receivedSmsTo.options,
              )} ${phoneNumber}`}
            </Text>

            <Text style={{ color: 'black' }}>{`ID#${id}`}</Text>

            {bookingId && (
              <Text style={{ color: 'black' }}>
                {`${translate(
                  messages.bookingID.scope,
                  messages.bookingID.options,
                )}${bookingId}`}
              </Text>
            )}

            <Text style={{ color: 'black' }}>
              {formattedDate.format('dddd, DD MMMM HH:mm ')}
            </Text>
          </View>
        </View>
        <View style={{ height: 0.5, backgroundColor: '#00000070' }}></View>

        <View style={{ padding: theme.space.s }}>
          <TouchableOpacity onPress={openDetailsModal}>
            <Text style={{ color: 'black' }}>{message}</Text>
          </TouchableOpacity>
        </View>

        {clientName && (
          <TouchableOpacity
            onPress={() => {
              dispatch(getClientAction({ id: client_id }));

              navigation.navigate(
                SCREENS.CLIENT_DETAILS as never,
                {
                  clientId: client_id,
                } as never,
              );
            }}>
            <Text
              style={[
                { color: 'deepskyblue', marginLeft: '5%', marginVertical: 10 },
              ]}>
              {translate(
                commonMessages.viewClientProfile.scope,
                commonMessages.viewClientProfile.options,
              )}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <EmailSmsDetailsModal
        isOpen={isOpen}
        onClose={closeDetailsModal}
        details={{
          message,
        }}
      />
    </>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  container: {
    backgroundColor: 'white',
    marginVertical: theme.space.xs,
    marginHorizontal: theme.space.xxs,
    borderRadius: theme.space.xxs,
    ...theme.defaultShadow,
  },
}));

export interface IComponentProps {
  item: any;
}
export default Component20;
