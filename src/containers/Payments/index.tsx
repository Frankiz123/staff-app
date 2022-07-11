import { FormattedMessage } from 'components/FormattedMessage';
import useTheme from 'hooks/useTheme';
import React, { useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import WebView from 'react-native-webview';
import messages from './messages';
import usePaymentsSlice from './slice';
import {
  getPaymentHashAction,
  getPaymentMethodsAction,
  setSelectedPaymentMethodAction,
} from './slice/actions';
import {
  makeSelectLoading,
  makeSelectPaymentMethods,
  makeSelectSelectedPaymentMethod,
  selectPaymentHash,
} from './slice/selectors';
import { selectBooking } from 'containers/BookingDetails/slice/selectors';
import { getPaymentHash } from './slice/saga';
import JSONTree from 'react-native-json-tree';

const PaymentsContainer: React.FC<IPaymentsContainerProps> = (props) => {
  usePaymentsSlice();
  const dispatch = useDispatch();
  const theme = useTheme();
  const paymentMethods = useSelector(makeSelectPaymentMethods);
  const selectedMethode = useSelector(makeSelectSelectedPaymentMethod);
  const loading = useSelector(makeSelectLoading);
  const booking = useSelector(selectBooking);

  useEffect(() => {
    paymentMethods.length == 0 && dispatch(getPaymentMethodsAction());
  }, []);

  return (
    <>
      <FormattedMessage
        style={{ fontWeight: 'bold', padding: theme.space.s }}
        {...messages.selectPayment}
      />
      {loading.paymentMethods ? (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      ) : (
        <View
          style={{
            flexDirection: 'row',
            width: theme.dimensions.width,
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          {paymentMethods.map((paymentMethod) => (
            <TouchableOpacity
              key={`${paymentMethod?.name}${paymentMethod?.id}`}
              onPress={() => {
                // if (paymentMethod?.name === 'cs card') {
                //   handlePaySense();
                // } else {
                //   onPressMethod(paymentMethod);
                // }
                dispatch(
                  setSelectedPaymentMethodAction(
                    paymentMethod?.name.toLocaleLowerCase(),
                  ),
                );
              }}
              style={[
                {
                  backgroundColor: 'rgba(51,51,51,1)',
                  paddingVertical: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                  paddingHorizontal: 20,
                },
                {
                  width: theme.dimensions.width * 0.47,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 20,
                  marginVertical: 4,
                  backgroundColor:
                    selectedMethode === paymentMethod?.name.toLocaleLowerCase()
                      ? 'deepskyblue'
                      : theme.colors.primary,
                },
              ]}>
              <Text
                numberOfLines={1}
                style={[
                  {
                    fontSize: 12,
                    color: 'rgba(255,255,255,1)',
                  },
                  { fontSize: 16 },
                ]}>
                {paymentMethod?.name?.toLocaleUpperCase().replace(/_/g, ' ')}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
};
export interface IPaymentsContainerProps {}
export default PaymentsContainer;
