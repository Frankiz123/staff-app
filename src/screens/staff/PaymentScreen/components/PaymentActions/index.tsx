import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import messages from '../../messages';
import { FormattedMessage } from 'components/FormattedMessage';
import { selectTotal } from 'containers/CurrentBooking/slice/selectors';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'navigators/constants';
import {
  getPaymentHashAction,
  payAppointmentAction,
} from 'containers/Payments/slice/actions';
import {
  makeSelectLoading,
  makeSelectPaymentMethods,
  makeSelectSelectedPaymentMethod,
} from 'containers/Payments/slice/selectors';

const PaymentActionsComponent: React.FC<
  IPaymentActionsComponentProps
> = ({}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = makeStyles();
  const price = useSelector(selectTotal);
  const currency = useSelector(selectCurrency);
  const loading = useSelector(makeSelectLoading);
  const paymentMethod = useSelector(makeSelectSelectedPaymentMethod);

  return (
    <View style={styles.container}>
      <Text style={styles.priceText}>
        {`Total: ${currency?.prefix}${price}${currency?.suffix}`}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {loading.payAction || loading.paymentHash ? (
          <View
            style={[
              styles.saveButton,
              {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <ActivityIndicator color="white" />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              // || paymentMethod === 'cash'
              paymentMethod === 'cash' ||
              paymentMethod === 'stripe' ||
              paymentMethod === 'cs card'
                ? dispatch(payAppointmentAction())
                : dispatch(getPaymentHashAction());
            }}>
            <FormattedMessage {...messages.payNow} style={styles.saveText} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    bottom: 0,
    paddingBottom: theme.insets.bottom + theme.space.s,
    width: theme.dimensions.width,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  priceText: {
    fontSize: 18,
    padding: theme.space.s,
    color: 'black',
  },
  saveButton: {
    flex: 1,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
    borderWidth: 1,
    marginHorizontal: theme.space.s,
    borderRadius: theme.space.xxs,
    padding: theme.space.s,
  },
  saveText: { textAlign: 'center', color: 'white' },
}));

export type ActionType = 'add' | 'update';
export interface IPaymentActionsComponentProps {}
export default PaymentActionsComponent;
