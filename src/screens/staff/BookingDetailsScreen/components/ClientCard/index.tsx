import { FormattedMessage } from 'components/FormattedMessage';
import React from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  GestureResponderEvent,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { makeStyleSheet } from 'theme/makeStyleSheet';
import messages from '../../messages';
import Avatar from 'components/Avatar';

const ClientCardComponent: React.FC<IClientCardComponentProps> = ({
  clientAvatar,
  clientName,
  clientSurname,
  clientEmail,
  onPress,
}) => {
  const styles = makeStyles();
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Avatar
        uri={clientAvatar}
        title={`${clientName ? clientName[0] : ''}${clientSurname ? clientSurname[0] : ''
          }`}
        style={styles.avatar}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.nameStyle}>
          {clientName} {clientSurname}
        </Text>
        {clientEmail && clientEmail != 'null' ? (
          <Text style={styles.emailStyle}>{clientEmail}</Text>
        ) : (
          <FormattedMessage
            {...messages.noEmailFound}
            style={styles.emailStyle}
          />
        )}
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
        size={25}
        style={{ color: 'black' }}
      />
    </TouchableOpacity>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  container: {
    flexDirection: 'row',
    padding: theme.space.s,
    backgroundColor: "white",
    // ...theme.defaultShadow,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: theme.space.s,
  },
  nameStyle: {
    color: theme.colors.text?.primary,
    fontSize: theme.fontSizes.large
  },
  emailStyle: { color: 'grey' },
}));

export interface IClientCardComponentProps {
  clientName: string;
  clientSurname: string;
  clientEmail: string;
  clientAvatar: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}
export default ClientCardComponent;
