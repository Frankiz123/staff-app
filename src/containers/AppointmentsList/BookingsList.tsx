import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import useAppointmentsListSlice from './slice';
import { selectAppointmentsList, selectLoading } from './slice/selectors';
import { getAppointmentsAction } from './slice/actions';

import { WebService } from './slice/constants';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { format } from 'date-fns';

import { FormattedMessage } from 'components/FormattedMessage';
import messages from 'containers/TaskList/messages';

import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'navigators/constants';

const BookingsList = () => {
  useAppointmentsListSlice();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const AppointmentList = useSelector(selectAppointmentsList);
  const loading = useSelector(selectLoading);
  const today = format(new Date(), 'yyyy-MM-dd');

  const theme = useTheme();
  const styles = makeStyles();

  useEffect(() => {
    dispatch(
      getAppointmentsAction(WebService.GET_APPOINTMENTS, {
        date_start: today,
        date_end: today,
        offset: 0,
      }),
    );
  }, []);

  const onPress = (event: any) => {
    if (event.type === 'service' || event.type === 'course') {
      navigation.navigate(
        SCREENS.BOOKING_DETAILS as never,
        {
          bookingId: event.id,
        } as never,
      );
    } else if (event.type === 'busy_time') {
      // navigation.navigate(
      //   SCREENS.BOOKING_DETAILS as never,
      //   {
      //     bookingId: event.id,
      //   } as never,
      // );
    }
  };

  return (
    <>
      <View style={styles.UpcomingCard}>
        <View style={styles.icon}>
          <Ionicons name="calendar-outline" style={styles.text} size={20} />
        </View>
        <View>
          <View>
            <Text style={styles.text}>
              <FormattedMessage style={{}} {...messages.upcomingBook} />
            </Text>
          </View>
          <View>
            <Text style={styles.description}>
              {AppointmentList.length}
              <FormattedMessage
                style={{ color: 'grey' }}
                {...messages.meetingsSched}
              />
            </Text>
          </View>
        </View>
      </View>

      {loading ? (
        <ActivityIndicator
          style={{ height: 200 }}
          size="large"
          color={theme.colors.primary}
        />
      ) : (
        <>
          {AppointmentList?.slice(0, 3).map((appointment) => (
            <TouchableOpacity
              onPress={() => onPress(appointment)}
              key={appointment.id}
              style={styles.appointmentCard}>
              <View style={{ marginRight: theme.space.l }}>
                <Text style={styles.text}>
                  {format(appointment.start, 'p')}
                </Text>
                <Text style={{ color: 'grey' }}>
                  {format(appointment.end, 'p')}
                </Text>
              </View>
              <View>
                <Text style={{ color: 'grey' }}> {appointment.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => navigation.navigate(SCREENS.BOOKINGS as never)}>
            <Text style={{ color: 'black' }}>
              <FormattedMessage style={{}} {...messages.viewAllBook} />
            </Text>
          </TouchableOpacity>
        </>
      )}
    </>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  container: {
    width: '100%',
    height: theme.width[4],
  },
  UpcomingCard: {
    backgroundColor: 'white',
    borderColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: theme.space.xxs,
    alignItems: 'center',
    marginTop: theme.space.l,
    borderBottomWidth: 0.2,
  },
  text: {
    color: 'black',
  },
  description: {
    color: 'grey',
    paddingVertical: theme.space.xxxs,
  },
  icon: {
    color: 'grey',
    padding: theme.space.l,
  },
  viewButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    paddingHorizontal: theme.space.xs,
    paddingVertical: theme.space.m,
    borderColor: 'black',
    borderTopWidth: 0.2,
  },
  appointmentCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: theme.space.m,
    paddingHorizontal: theme.space.l,
  },
}));
export default BookingsList;
