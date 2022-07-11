import useTheme from 'hooks/useTheme';
import { translate } from 'i18n';
import moment from 'moment';
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { makeStyleSheet } from 'utils/makeStyleSheet';

import JSONTree from 'react-native-json-tree';
import messages from '../messages';
import commonMessages from '../../../messages';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'navigators/constants';
import { getClientAction } from 'containers/CurrentClient/slice/actions';
import { useDispatch } from 'react-redux';

const Component7: React.FC<IComponentProps> = ({
  item,
  item: { client_id, client_name, content, staff_nickname, ts },
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = makeStyles();

  const theme = useTheme();
  const formattedDate = moment.unix(ts).format('dddd, DD MMMM YYYY, HH:mm');

  return (
    <View style={styles.container}>
      <View style={{ padding: theme.space.s }}>
        <Text style={[{ color: theme.colors.primary }, {}]}>
          {`${
            client_name
              ? client_name
              : translate(messages.noteAdded.scope, messages.noteAdded.options)
          } `}
        </Text>
      </View>
      <View style={{ padding: theme.space.s }}>
        <Text style={{ fontSize: 15, marginBottom: 5, color: 'black' }}>
          {staff_nickname} added a client note
        </Text>

        <Text style={{ color: 'black' }}>{formattedDate}</Text>
      </View>

      <View style={{ height: 0.5, backgroundColor: '#00000070' }}></View>

      <View style={{ padding: theme.space.s }}>
        {content.includes('%') ? (
          <Text style={{ fontSize: 15, color: 'black' }}>
            <Text style={{ color: theme.colors.primary }}>
              {
                content
                  .replace(/<\/?[^>]+(>|$)/g, ' ')
                  .replace(/&amp;/g, '&')
                  .replace(/&nbsp;/g, '\n')
                  .split('%')[0]
              }{' '}
              -{' '}
            </Text>
            {
              content
                .replace(/<\/?[^>]+(>|$)/g, ' ')
                .replace(/&amp;/g, '&')
                .replace(/&nbsp;/g, '\n')
                .split('%')[1]
            }
          </Text>
        ) : (
          <Text style={{ fontSize: 15, color: 'black' }}>
            {content
              .replace(/<\/?[^>]+(>|$)/g, ' ')
              .replace(/&amp;/g, '&')
              .replace(/&nbsp;/g, '\n')}
          </Text>
        )}
      </View>
      {client_name && (
        <View style={{ padding: theme.space.s }}>
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
                {
                  color: 'deepskyblue',
                  marginLeft: '5%',
                  marginVertical: 10,
                },
              ]}>
              {translate(
                commonMessages.viewClientProfile.scope,
                commonMessages.viewClientProfile.options,
              )}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
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
export default Component7;
