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
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'navigators/constants';
import { getClientAction } from 'containers/CurrentClient/slice/actions';

const Component13: React.FC<IComponentProps> = ({
  item: {
    id,
    client_name: clientName,
    value,
    paid,
    make_date,
    salon_name: salonName,
    list = [],
    client_id,
  },
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const styles = makeStyles();

  const theme = useTheme();

  const currency = useSelector(selectCurrency);
  const makeDate = moment(make_date, 'YYYY-MM-DD HH:mm:ss');
  const formattedValue = parseFloat(value).toFixed(2);

  return (
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
            <Text style={[{ color: theme.colors.text?.highlightedColor }, {}]}>
              {`${translate(
                messages.issue.scope,
                messages.issue.options,
              )}${id}`}
            </Text>
            {`  ${currency?.prefix}${formattedValue}`}
          </Text>

          <Text style={{ color: 'grey' }}>
            {makeDate.format('dddd, DD MMMM HH:mm ')}
          </Text>
        </View>
      </View>
      <View style={{ height: 0.5, backgroundColor: '#00000070' }}></View>

      <View style={{ padding: theme.space.s }}>
        <View>
          <Text style={{ color: 'black' }}>
            <Text style={{ color: 'black' }}>
              {translate(messages.payment.scope, messages.payment.options)}
            </Text>
            {paid}
          </Text>

          <Text style={{ color: 'black' }}>
            <Text style={{ color: 'black' }}>
              {translate(messages.location.scope, messages.location.options)}
            </Text>
            {salonName}
          </Text>

          <Text style={{ color: 'black' }}>
            <Text style={{ color: 'black' }}>
              {translate(messages.paid.scope, messages.paid.options)}
            </Text>
            {`${currency?.prefix}${formattedValue}`}
          </Text>
        </View>
      </View>
      <View style={{ height: 0.5, backgroundColor: '#00000070' }}></View>

      {list.map(({ id, item, price }: any, index: number) => (
        <View key={`${id}${item}${price}`}>
          <View key={`${id}${item}${price}`} style={{ padding: theme.space.s }}>
            <Text style={{ color: 'black' }}>{`${item}: ${
              currency?.prefix
            }${parseFloat(price).toFixed(2)}`}</Text>
          </View>
          <View style={{ height: 0.5, backgroundColor: '#00000070' }}></View>
        </View>
      ))}

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
export default Component13;
