import { BottomSheet } from 'components/BottomSheet';
import {
  payAppointmentAction,
  payAppointmentErrorAction,
  payAppointmentSuccessAction,
  togglePaymentModalAction,
} from 'containers/Payments/slice/actions';
import {
  selectPaymentHash,
  selectPaymentModalVisible,
} from 'containers/Payments/slice/selectors';
import useTheme from 'hooks/useTheme';
import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import JSONTree from 'react-native-json-tree';
import ReactNativeModal from 'react-native-modal';
import WebView from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import Fontisto from 'react-native-vector-icons/Fontisto';
import alertsProviderReducer from 'providers/AlertsProvider/reducer';
import { initiateBookingAction } from 'containers/CurrentBooking/slice/actions';
import { initialState } from 'containers/CurrentBooking/slice/reducer';
import { SCREENS } from 'navigators/constants';
import { useNavigation } from '@react-navigation/native';
const PaymentWebView: React.FC<IPaymentWebViewProps> = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const theme = useTheme();
  const paymentmodalVisible = useSelector(selectPaymentModalVisible);
  const paymentHash = useSelector(selectPaymentHash);
  const [webViewLoading, setWebViewLoading] = useState<boolean>(true);

  return (
    <>
      <BottomSheet
        visible={paymentmodalVisible}
        onBackButtonPress={() => {
          dispatch(togglePaymentModalAction(false));
        }}
        onBackdropPress={() => {
          dispatch(togglePaymentModalAction(false));
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#f2f2ff',
            borderTopLeftRadius: theme.space.s,
            borderTopRightRadius: theme.space.s,
            maxHeight: theme.dimensions.height - 50,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              padding: 10,
            }}
            onPress={() => {
              dispatch(togglePaymentModalAction(false));
            }}>
            <Fontisto name="close" size={25} />
          </TouchableOpacity>
          {webViewLoading && (
            <View
              style={{
                // flex: 1,
                left: (theme.dimensions.width - 25) / 2,
                top: 200,
                zIndex: 1000,
                position: 'absolute',
              }}>
              <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
          )}
          <WebView
            // injectedJavaScript={`window.ReactNativeWebView.postMessage('{"error" : null }');`}
            onLoadStart={() => setWebViewLoading(true)}
            onLoad={() => setWebViewLoading(false)}
            showsVerticalScrollIndicator={false}
            useWebKit
            allowsBackForwardNavigationGestures={false}
            sharedCookiesEnabled
            cacheEnabled={false}
            thirdPartyCookiesEnabled={true}
            onMessage={(event) => {
              console.log(event?.nativeEvent?.data);
              try {
                let data = JSON.parse(event?.nativeEvent?.data || '{}');
                if (data?.error === null) {
                  dispatch(togglePaymentModalAction(false));
                  // dispatch(payAppointmentAction());
                  dispatch(initiateBookingAction(initialState.booking, 8));
                  navigation.navigate(SCREENS.BOOKINGS as never);
                  dispatch(payAppointmentSuccessAction());
                }
              } catch (e) {
                dispatch(
                  payAppointmentErrorAction(
                    'Could not set appointment as paid',
                  ),
                );
                console.log('ERROR PAYMENT ', e);
              }
            }}
            source={{
              uri: `https://server3.clinicsoftware.com/mobile_api_payments/stripe_payment/${paymentHash}`,
            }}
          />
        </View>
      </BottomSheet>
    </>
  );
};
export interface IPaymentWebViewProps {}
export default PaymentWebView;
