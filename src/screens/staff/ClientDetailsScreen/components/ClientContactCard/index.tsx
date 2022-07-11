import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import useTheme from 'hooks/useTheme';
import { useDispatch, useSelector } from 'react-redux';
import { selectClient } from 'containers/CurrentClient/slice/selectors';
import JSONTree from 'react-native-json-tree';
import useCurrentClientSlice from 'containers/CurrentClient/slice';
import Avatar from 'components/Avatar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import { showAlertAction } from 'providers/AlertsProvider/actions';

const ClientContactCard: React.FC<IClientContactCardProps> = (props) => {
  const dispatch = useDispatch();
  const styles = makeStyle();

  const client = useSelector(selectClient);

  const handleAction = async (action: string, url: string) => {
    try {
      await Linking.openURL(url);
    } catch (e) {
      dispatch(
        showAlertAction({
          title: `Couldn't ${action} contact`,
          duration: 3000,
          gravity: 'top',
          type: 'warning',
        }),
      );
    }
  };

  return (
    <View style={styles.container}>
      <Avatar
        uri={client?.avatar}
        title={`${client?.name ? client?.name[0] : ''}${
          client?.surname ? client?.surname[0] : ''
        }`}
        style={{ height: 50, width: 50 }}
      />
      <Text style={styles.clientName}>
        {`${client?.name == null ? '' : client?.name} ${
          client?.surname == null ? '' : client?.surname
        }`}
      </Text>
      <View style={styles.contactIconsContainer}>
        {client?.phone ? (
          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => {
              handleAction('call', `tel:${client?.phone}`);
            }}>
            <Ionicons
              name="call-outline"
              style={styles.contactIcon}
              size={25}
            />
          </TouchableOpacity>
        ) : undefined}

        {client?.email ? (
          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => {
              handleAction('email', `mailto:${client?.email}`);
            }}>
            <MaterialCommunityIcons
              name="email-outline"
              style={styles.contactIcon}
              size={25}
            />
          </TouchableOpacity>
        ) : undefined}

        {client?.phone ? (
          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => {
              handleAction('sms', `sms:${client?.phone}`);
            }}>
            <Feather
              name="message-circle"
              style={styles.contactIcon}
              size={25}
            />
          </TouchableOpacity>
        ) : undefined}
      </View>
    </View>
  );
};

const makeStyle = makeStyleSheet((theme) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.space.s,
  },
  clientName: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: theme.space.s,
    color: 'black',
  },
  contactIconsContainer: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  contactButton: {
    borderColor: theme.colors.primary,
    borderWidth: 1.5,
    borderRadius: 360,
    margin: theme.space.xs,
  },
  contactIcon: { padding: theme.space.xxs, color: theme.colors.primary },
}));

export interface IClientContactCardProps {}
export default ClientContactCard;
