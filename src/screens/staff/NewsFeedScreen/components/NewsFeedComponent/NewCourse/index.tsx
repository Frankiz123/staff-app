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
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'navigators/constants';
import { getClientAction } from 'containers/CurrentClient/slice/actions';

const Component17: React.FC<IComponentProps> = ({
  item: {
    id,
    client_name: clientName,
    client_id,
    staff_nickname,
    date_added,
    title,
    price,
    duration,
    num_payments,
    num_sessions,
    tax_value,
  },
  item,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const currency = useSelector(selectCurrency);

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
                  : translate(messages.newBill.scope, messages.newBill.options)
              } `}
            </Text>
          </View>
        </View>

        <View style={{ padding: theme.space.s }}>
          <View>
            <Text style={{ color: 'black' }}>
              {staff_nickname}{' '}
              <Text style={[{ color: theme.colors.text?.highlightedColor }]}>
                {`${translate(
                  messages.orderedNewSessionCourse.scope,
                  messages.orderedNewSessionCourse.options,
                )}`}
              </Text>
              {' #'}
              {id}
            </Text>

            <Text style={{ color: 'grey' }}>
              {moment(date_added, 'YYYY-MM-DD HH:mm:ss').format(
                'DD/MM/YYYY hh:mm a',
              )}
            </Text>
          </View>
        </View>

        <View style={{ height: 0.5, backgroundColor: '#00000070' }}></View>
        <View style={{ padding: theme.space.s }}>
          <Text style={{ color: 'black' }}>{title}</Text>
        </View>
        <View style={{ padding: theme.space.s, flexDirection: 'row' }}>
          <View style={{}}>
            <Text style={{ color: 'black' }}>
              {translate(messages.price.scope, messages.price.options)} (
              {translate(
                messages.includingTax.scope,
                messages.includingTax.options,
              )}
              ):
            </Text>
            <Text style={{ color: 'black' }}>
              {translate(messages.duration.scope, messages.duration.options)}:
            </Text>
            <Text style={{ color: 'black' }}>
              {translate(
                messages.nbrInstallment.scope,
                messages.nbrInstallment.options,
              )}
              :
            </Text>
            <Text style={{ color: 'black' }}>
              {translate(
                messages.nbrSessions.scope,
                messages.nbrSessions.options,
              )}
              :
            </Text>
          </View>
          <View style={{ paddingLeft: theme.space.s }}>
            <Text style={{ color: 'black' }}>
              {currency?.prefix} {price * (1 + tax_value / 100)}
            </Text>
            <Text style={{ color: 'black' }}>
              {duration}{' '}
              <Text style={{ color: 'black' }}>
                {translate(messages.mins.scope, messages.mins.options)}
              </Text>
            </Text>
            <Text style={{ color: 'black' }}>{num_payments}</Text>
            <Text style={{ color: 'black' }}>{num_sessions}</Text>
          </View>
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
                {},
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
export default Component17;
