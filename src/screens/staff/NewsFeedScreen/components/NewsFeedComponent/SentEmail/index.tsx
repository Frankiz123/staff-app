import { FormattedMessage } from 'components/FormattedMessage';
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
import { EmailSmsDetailsModal } from '../EmailSmsDetailsModal';
import messages from '../messages';
import moment from 'moment';
import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'utils/makeStyleSheet';
import commonMessages from '../../../messages';
import { translate } from 'i18n';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'navigators/constants';
import { getClientAction } from 'containers/CurrentClient/slice/actions';
import { useDispatch } from 'react-redux';

const Component18: React.FC<IComponentProps> = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = makeStyles();

  const [isOpen, setIsOpen] = useState(false);

  const {
    client_name: clientName,
    from_name: fromName,
    to_email: toEmail,
    date_sent: dateSent,
    subject,
    message,
    client_id,
  } = item;
  const formattedDate = moment(dateSent, 'YYYY-MM-DD HH:mm:ss');

  const openDetailsModal = () => setIsOpen(true);
  const closeDetailsModal = () => setIsOpen(false);

  return (
    <>
      <View style={styles.container}>
        <View style={{ padding: theme.space.s }}>
          <View>
            {clientName ? (
              <Text
                style={[
                  { color: theme.colors.primary },
                  {},
                ]}>{`${clientName}`}</Text>
            ) : (
              <FormattedMessage style={{}} {...messages.sentEmail} />
            )}
          </View>
        </View>

        <View style={{ padding: theme.space.s }}>
          <View>
            {/* <Text style={{ color: 'black' }}>{`${fromName} `}</Text> */}
            <FormattedMessage style={{}} {...messages.sentEmailTo} />
            <Text style={{ color: 'black' }}>{`${toEmail}`}</Text>

            <Text style={{ color: 'grey' }}>
              {formattedDate.format('dddd, DD MMMM HH:mm ')}
            </Text>
          </View>
        </View>
        <View style={{ height: 0.5, backgroundColor: '#00000070' }}></View>
        <View style={{ padding: theme.space.s }}>
          <TouchableOpacity onPress={openDetailsModal}>
            <View>
              <Text style={[{ marginBottom: 5, color: 'black' }]}>
                <FormattedMessage style={{}} {...messages.from} />
                {fromName}
              </Text>

              <Text style={[{ marginBottom: 5, color: 'black' }, {}]}>
                <FormattedMessage style={{}} {...messages.subject} />
                {subject}
              </Text>

              <Text style={{ color: 'black' }}>
                <FormattedMessage style={{}} {...messages.to} />
                {toEmail}
              </Text>
            </View>
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
          sender: fromName,
          receiver: toEmail,

          subject,
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
export default Component18;
