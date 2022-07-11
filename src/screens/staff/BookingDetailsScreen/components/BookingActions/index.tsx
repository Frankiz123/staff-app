import React, { useRef } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ActionSheet from 'react-native-actionsheet';

import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import { translate } from 'i18n';
import messages from '../../messages';
import { FormattedMessage } from 'components/FormattedMessage';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'navigators/constants';
import { initiateBookingAction } from 'containers/CurrentBooking/slice/actions';
import { selectBooking } from 'containers/BookingDetails/slice/selectors';
import { DURATIONS } from 'screens/staff/Appointment/components/DurationPicker/constants';
import moment from 'moment';

const BookingActionsComponent: React.FC<IBookingActionsComponentProps> = ({
  price,
  bookingId,
  duration,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = makeStyles();
  const booking = useSelector(selectBooking);
  const currency = useSelector(selectCurrency);

  const initiateBooking = () => {
    dispatch(
      initiateBookingAction(
        {
          id: booking.id,
          products: [],
          client: {
            id: booking.client_id,
            avatar: booking.client_avatar,
            name: booking.client_name,
            surname: booking.client_surname,
            phone: booking.client_email,
          },
          staff: {
            id: booking.staff,
            full_name: booking.staff_nickname,
          },
          appointmentType: 'service',
          staffAppointments: [],
          staffAvailability: {
            time_in_set: '00:00.00',
            time_out_set: '23:59:59',
          },
          status: booking.status,
          date: moment(booking.date + ' ' + booking.time).toDate(),
          duration: {
            value: booking.duration,
            label:
              DURATIONS.find((duration) => duration.value == booking.duration)
                ?.label || '0min',
          },
          notes: booking.notes,
          services: booking.services.map((service: any) => {
            return {
              id: service.service_id,
              category_title: '',
              service_title: service.title,
              price: service.price,
              open_price_enabled: '0',
              duration: service.duration,
            };
          }),
          courses: booking.course,
          total: 0,
          insideBusyIntervals: {
            nextFreeTime: moment(),
            isBusyInterval: false,
          },
          insideShift: false,
        },
        7,
      ),
    );
  };
  const handleActionSheetAction = (index: number) => {
    initiateBooking();
    switch (index) {
      case 0:
        navigation.navigate(SCREENS.UPDATE_APPOINTMENT as never);
        break;
      case 1:
        navigation.navigate(SCREENS.UPDATE_APPOINTMENT as never);
        break;
      case 2:
        navigation.navigate(SCREENS.CANCEL_APPOINTMENT as never);
        break;
      default:
        break;
    }
  };

  const actionSheetRef = useRef<ActionSheet>(null);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.priceText}>
          {`Total: ${currency?.prefix}${price}${currency?.suffix} (${duration} min)`}
        </Text>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={styles.moreOptionsButton}
            onPress={() => actionSheetRef?.current?.show()}>
            <FormattedMessage
              {...messages.moreOptions}
              style={styles.moreOptionsText}
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={
              booking.status === 'canceled' || booking.status === 'paid'
            }
            style={[
              styles.CheckoutButton,
              (booking.status === 'canceled' || booking.status === 'paid') && {
                backgroundColor: 'lightgray',
                borderColor: 'lightgray',
              },
            ]}
            onPress={() => {
              initiateBooking();
              navigation.navigate(SCREENS.CHECKOUT as never);
            }}>
            {booking.status === 'canceled' || booking.status === 'paid' ? (
              <Text style={styles.checkoutText}>
                {booking.status.charAt(0).toUpperCase() +
                  booking.status.slice(1)}
              </Text>
            ) : (
              <FormattedMessage
                {...messages.checkout}
                style={styles.checkoutText}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <ActionSheet
        ref={actionSheetRef}
        options={[
          translate(messages.editApp.scope, messages.editApp.options),
          translate(
            messages.rescheduleApp.scope,
            messages.rescheduleApp.options,
          ),
          translate(messages.cancelApp.scope, messages.cancelApp.options),
          translate(messages.close.scope, messages.close.options),
        ]}
        cancelButtonIndex={3}
        destructiveButtonIndex={2}
        onPress={handleActionSheetAction}
        // styles={ActionSheetStyle}
      />
    </>
  );
};

// const ActionSheetStyle = {
//   buttonBox: {
//     height: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   cancelButtonBox: {
//     height: 60,
//     marginTop: 6,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
// };

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
  CheckoutButton: {
    flex: 1,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
    borderWidth: 1,
    marginHorizontal: theme.space.s,
    borderRadius: theme.space.xxs,
    padding: theme.space.s,
  },
  moreOptionsButton: {
    flex: 1,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    marginHorizontal: theme.space.s,
    borderRadius: theme.space.xxs,
    padding: theme.space.s,
  },
  moreOptionsText: {
    color: theme.colors.primary,
    textAlign: 'center',
  },
  checkoutText: { textAlign: 'center', color: 'white' },
}));

export interface IBookingActionsComponentProps {
  price: number;
  bookingId: string;
  duration: string;
}
export default BookingActionsComponent;
