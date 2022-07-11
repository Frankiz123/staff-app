import { useNavigation } from '@react-navigation/native';
import {
  getAppointmentsAction,
  searchAppointmentsAction,
} from 'containers/AppointmentsList/slice/actions';
import { selectAppointmentsList } from 'containers/AppointmentsList/slice/selectors';
import BookingDetailsContainer from 'containers/BookingDetails';
import { getBookingAction } from 'containers/BookingDetails/slice/actions';
import {
  selectBooking,
  selectLoading,
} from 'containers/BookingDetails/slice/selectors';
import { selectLoading as bookingLoadingSelector } from 'containers/AppointmentsList/slice/selectors';
import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';
import { format } from 'date-fns';
import useTheme from 'hooks/useTheme';
import { NAVIGATORS, SCREENS } from 'navigators/constants';
import React, { useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import JSONTree from 'react-native-json-tree';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import BookingActionsComponent from './components/BookingActions';
import BookingDetailsComponent from './components/BookingDetails';
import BookingHeaderComponent from './components/BookingHeader';
import BookingsHistoryListComponent from './components/BookingsHistory';
import ClientCardComponent from './components/ClientCard';
import { getClientAction } from 'containers/CurrentClient/slice/actions';

const Separator = () => (
  <View
    style={{
      height: 0.5,
      backgroundColor: '#00000070',
      marginHorizontal: 20,
    }}></View>
);
const BookingDetailsScreen: React.FC<IBookingDetailsScreenProps> = ({
  route: {
    params: { bookingId },
  },
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = makeStyles();

  const booking = useSelector(selectBooking);
  const loading = useSelector(selectLoading);
  const bookingsLoading = useSelector(bookingLoadingSelector);
  const clientBookings = useSelector(selectAppointmentsList);
  const currency = useSelector(selectCurrency);

  useEffect(() => {
    dispatch(getBookingAction(bookingId));
  }, []);

  useEffect(() => {
    if (booking) {
      dispatch(searchAppointmentsAction({ match: booking?.client_name }));
    }
  }, [booking]);

  const price = (booking?.services || []).reduce(
    (acc: number, val: { price: string }) => acc + parseInt(val.price),
    0,
  );

  // return <JSONTree hideRoot data={{ loading, booking }} />;
  return (
    <>
      <ScrollView style={styles.container}>
        <BookingDetailsContainer />
        {loading ? (
          <ActivityIndicator color={theme.colors.primary} size={'large'} />
        ) : (
          <>
            {booking && (
              <>
                <BookingHeaderComponent
                  date={booking.date}
                  time={booking.time}
                />
                {booking.type != 'busy_time' && (
                  <ClientCardComponent
                    clientAvatar={booking.client_avatar}
                    clientName={booking.client_name}
                    clientSurname={booking.client_surname}
                    clientEmail={booking.client_email}
                    onPress={() => {
                      dispatch(getClientAction({ id: booking.client_id }));
                      navigation.navigate(
                        SCREENS.CLIENT_DETAILS as never,
                        {
                          clientId: booking.client_id,
                        } as never,
                      );
                    }}
                  />
                )}
                <Separator />
                <BookingDetailsComponent
                  staffNickName={booking.staff_nickname}
                  time={booking.time}
                  duration={booking.duration}
                  title={booking.title}
                  price={price}
                />

                <Separator />
                {/* <View style={{ padding: 10 }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'blue',
                      borderRadius: 5,
                      padding: 10,
                    }}
                    onPress={() => Alert.alert('ADD INSTANT CONFIRMATIOn')}>
                    <Text style={{ color: 'white' }}>
                      Send Instant Confirmation
                    </Text>
                  </TouchableOpacity>
                </View> */}
                {booking.type != 'busy_time' && (
                  <>
                    {bookingsLoading ? (
                      <ActivityIndicator
                        size={'large'}
                        color={theme.colors.primary}
                      />
                    ) : (
                      <BookingsHistoryListComponent
                        clientBookings={clientBookings}
                      />
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </ScrollView>
      {booking && booking.type != 'busy_time' && (
        <BookingActionsComponent
          price={price}
          bookingId={booking.id}
          duration={booking.duration}
        />
      )}
    </>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  container: {
    backgroundColor: 'white',
  },
}));

export interface IBookingDetailsScreenProps {
  route: any;
}
export default BookingDetailsScreen;
