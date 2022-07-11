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
import { SCREENS } from 'navigators/constants';
import { useNavigation } from '@react-navigation/native';
import { getClientAction } from 'containers/CurrentClient/slice/actions';

const Component1: React.FC<IComponentProps> = ({
  item: {
    client_name: clientName,
    client_id,
    staff_nickname,
    id,
    //
    type,
    gc_amount,
    gc_multiplier,
    gc_charge_date,
    date_added,
    gc_payment_id,
    gc_status,
    gc_description,
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
              {`${clientName} `}
            </Text>
          </View>
        </View>

        <View style={{ padding: theme.space.s }}>
          <View>
            <Text style={{ color: 'black' }}>
              {staff_nickname}{' '}
              <Text style={[{ color: theme.colors.text?.green }]}>
                {`${translate(
                  messages.addedDirectDebitPayment.scope,
                  messages.addedDirectDebitPayment.options,
                )} ${currency?.prefix}${gc_amount / gc_multiplier}`}
              </Text>
            </Text>
            <Text style={[{ color: theme.colors.text?.green }]}>
              {`${translate(
                messages.chargeDate.scope,
                messages.chargeDate.options,
              )}: ${moment(gc_charge_date, 'YYYY-MM-DD HH:mm:ss').format(
                'DD/MM/YYYY hh:mm a',
              )}`}
            </Text>

            <Text style={{ color: 'grey' }}>
              {moment(date_added, 'YYYY-MM-DD HH:mm:ss').format(
                'DD/MM/YYYY hh:mm a',
              )}
            </Text>
          </View>
        </View>

        <View style={{ height: 0.5, backgroundColor: '#00000070' }}></View>
        <View style={{ padding: theme.space.s, flexDirection: 'row' }}>
          <View style={{}}>
            <Text style={{ color: 'black' }}>
              {translate(messages.paymentId.scope, messages.paymentId.options)}:
            </Text>
            <Text style={{ color: 'black' }}>
              {translate(messages.status.scope, messages.status.options)}:
            </Text>
            <Text style={{ color: 'black' }}>
              {translate(messages.type.scope, messages.type.options)}:
            </Text>
            <Text style={{ color: 'black' }}>
              {translate(
                messages.description.scope,
                messages.description.options,
              )}
              :
            </Text>
          </View>
          <View style={{ paddingLeft: theme.space.s }}>
            <Text style={{ color: 'black' }}>{gc_payment_id}</Text>
            <Text style={{ color: 'black' }}>{gc_status}</Text>
            <Text style={{ color: 'black' }}>{type}</Text>
            <Text style={{ color: 'black' }}>{gc_description}</Text>
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
export default Component1;
