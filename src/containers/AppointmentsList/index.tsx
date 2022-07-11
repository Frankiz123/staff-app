import React, { useEffect, useState } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Text,
  TextBase,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { format } from 'date-fns';
import Calendar from 'react-native-big-calendar';

import useTheme from 'hooks/useTheme';
import statusColors, { ColorTypes } from 'theme/statusColors';

import useAppointmentsListSlice from './slice';
import { getAppointmentsAction, setDateIntervalAction } from './slice/actions';
import { selectCalendarInterval, selectSelectedDate } from './slice/selectors';
import { selectAppointmentsList, selectLoading } from './slice/selectors';
import { selectUser } from 'containers/AuthHelper/slice/selectors';
import { getStaffAction } from 'containers/StaffList/slice/actions';
import { selectSelectedStaffId } from 'containers/StaffList/slice/selectors';
import StaffFilterCompnent from './components/StaffFilter';
import { CustomCalendarHeader } from './components/CalendarHeader';
import { WebService } from './slice/constants';
import { SCREENS } from 'navigators/constants';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {
  initiateBookingAction,
  setDateAction,
} from 'containers/CurrentBooking/slice/actions';
import { initialState } from 'containers/CurrentBooking/slice/reducer';

const AppointmentsList: React.FC<IAppointmentsListProps> = () => {
  useAppointmentsListSlice();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const theme = useTheme();

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const listData = useSelector(selectAppointmentsList);
  const loading = useSelector(selectLoading);
  const selectedDate = useSelector(selectSelectedDate);
  const selectedCalendarInterval = useSelector(selectCalendarInterval);
  const user = useSelector(selectUser);
  const staffId = useSelector(selectSelectedStaffId);
  /* eslint-enable @typescript-eslint/no-unused-vars */

  useFocusEffect(
    React.useCallback(() => {
      getAppointments();
    }, [selectedDate, selectedCalendarInterval, staffId]),
  );

  useEffect(() => {
    if (user && user.reference_data) {
      dispatch(getStaffAction({ salon_id: user.reference_data.salon }));
    }
  }, [user]);

  const getAppointments = () => {
    if (selectedCalendarInterval) {
      if (staffId == 'all') {
        dispatch(
          getAppointmentsAction(WebService.GET_APPOINTMENTS, {
            date_start: format(selectedCalendarInterval.start, 'yyyy-MM-dd'),
            date_end: format(selectedCalendarInterval.end, 'yyyy-MM-dd'),
            version: 2,
          }),
        );
      } else {
        dispatch(
          getAppointmentsAction(WebService.GET_APPOINTMENTS_BY_STAFF_ID, {
            from_days: format(selectedCalendarInterval.start, 'yyyy-MM-dd'),
            to_days: format(selectedCalendarInterval.end, 'yyyy-MM-dd'),
            staff_id: staffId,
          }),
        );
      }
    }
  };

  const onPress = (event: any) => {
    if (event.type === 'service' || event.type === 'course') {
      navigation.navigate(
        SCREENS.BOOKING_DETAILS as never,
        {
          bookingId: event.id,
        } as never,
      );
    } else if (event.type === 'busy_time') {
      navigation.navigate(
        SCREENS.BOOKING_DETAILS as never,
        {
          bookingId: event.id,
        } as never,
      );
    }
  };

  const onChangeDate = ([startdate, endDate]: Array<Date>) => {
    if (
      startdate.getDate() != selectedCalendarInterval.start.getDate() ||
      endDate.getDate() != selectedCalendarInterval.end.getDate()
    ) {
      dispatch(setDateIntervalAction(startdate, endDate));
    }
  };

  const [mode, setMode] = useState<'day' | '3days' | 'week'>('3days');

  return (
    <>
      {loading && (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </View>
      )}
      <StaffFilterCompnent />
      <Calendar
        scrollOffsetMinutes={420}
        hideNowIndicator
        events={listData}
        height={50}
        eventCellStyle={(item) => {
          return { backgroundColor: statusColors[item.status as ColorTypes] };
        }}
        bodyContainerStyle={{ backgroundColor: 'white' }}
        date={selectedDate}
        onPressCell={(date) => {
          dispatch(initiateBookingAction(initialState.booking, 0));
          dispatch(setDateAction(date));
          navigation.navigate(SCREENS.ADD_APPOINTMENT as never);
        }}
        onPressEvent={onPress}
        onChangeDate={onChangeDate}
        swipeEnabled
        mode={mode || '3days'}
        renderHeader={(props) => (
          <CustomCalendarHeader
            customMode={mode}
            setMode={setMode}
            {...props}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    position: 'absolute',
    zIndex: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height - 100,
  },
});

export interface IAppointmentsListProps {}
export default AppointmentsList;
