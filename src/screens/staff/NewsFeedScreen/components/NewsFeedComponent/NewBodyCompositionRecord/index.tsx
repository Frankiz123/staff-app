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
import messages from '../messages';
import commonMessages from '../../../messages';
import JSONTree from 'react-native-json-tree';
import { color } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'navigators/constants';
import { getClientAction } from 'containers/CurrentClient/slice/actions';
import { useDispatch } from 'react-redux';

const Component14: React.FC<IComponentProps> = ({
  item: { added_by_name, client_id, client_name: clientName, date_added, id },
  item,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = makeStyles();

  const theme = useTheme();

  return (
    <>
      {/* {__DEV__ && <JSONTree hideRoot data={item} sortObjectKeys={true} />} */}

      <View style={styles.container}>
        <View style={{ padding: theme.space.s }}>
          <View>
            <Text style={[{ color: theme.colors.primary }, {}]}>
              {`${
                clientName
                  ? clientName
                  : translate(
                      messages.newBodyCompositionRecord.scope,
                      messages.newBodyCompositionRecord.options,
                    )
              }`}
            </Text>
          </View>
        </View>
        <View style={{ padding: theme.space.s }}>
          <Text style={{ color: 'black' }}>
            {added_by_name}{' '}
            <Text style={[{ color: theme.colors.text?.highlightedColor }, {}]}>
              {`${translate(
                messages.addedBodyComposition.scope,
                messages.addedBodyComposition.options,
              )}`}{' '}
              #{id}
            </Text>
          </Text>
          <Text style={{ color: 'grey' }}>
            {moment(date_added, 'YYYY-MM-DD HH:mm:ss').format(
              'DD/MM/YYYY hh:mm a',
            )}
          </Text>
        </View>
        <View style={{ height: 0.5, backgroundColor: '#00000070' }}></View>

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
export default Component14;
