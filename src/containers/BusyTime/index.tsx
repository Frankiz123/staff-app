import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { SCREENS } from 'navigators/constants';
import useTheme from 'hooks/useTheme';
import { makeStyles } from './styles';
import StaffPickerComponent from 'containers/BusyTime/components/StaffPicker';
import StartTime from './components/StartTime';
import { format } from 'date-fns';
import moment from 'moment';
import DurationPickerComponent from './components/DurationPicker';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectStaff,
  selectDate,
  selectNotes,
  selectDuration,
  selectCurrentBusyTIme,
} from './slice/selectors';
import { useBusyTimeSlice } from './slice';
import {
  getStaffAppointmentAction,
  getStaffAvailabilityAction,
  setNotesAction,
  createAppointmentAction,
} from './slice/actions';
import DatePickerComponent from './components/DatePicker';
import { Button } from 'react-native-elements';
import { selectUser } from 'containers/AuthHelper/slice/selectors';
import BusyTimeActions from './components/BusyTimeActions';

const BusyTime = () => {
  useBusyTimeSlice();
  const dispatch = useDispatch();
  const theme = useTheme();
  const styles = makeStyles();
  const staff = useSelector(selectStaff);
  const date = useSelector(selectDate);

  useEffect(() => {
    staff &&
      dispatch(
        getStaffAppointmentAction({
          staff_id: staff.id,
          from_days: moment(date).format('yyyy-MM-dd'),
          to_days: moment(date).format('yyyy-MM-dd'),
        }),
      );
    staff &&
      dispatch(
        getStaffAvailabilityAction({
          staff_id: staff.id,
          date: moment(date).format('yyyy-MM-dd'),
        }),
      );
  }, [staff, date]);

  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.headline}>New Busy Time</Text>
        </View>
        <View>
          <View style={styles.seperator}>
            <StaffPickerComponent />
          </View>
          <View>
            <View style={styles.seperator}>
              <DatePickerComponent />
              <DurationPickerComponent />
            </View>
          </View>
          <View style={styles.seperator}>
            <TextInput
              style={{
                borderWidth: 1,
                padding: 10,
                height: 150,
                borderRadius: 6,
              }}
              placeholder={'Notes visible to staff only'}
              multiline
              onChangeText={(notes) => {
                dispatch(setNotesAction(notes));
              }}
            />
          </View>
        </View>
      </ScrollView>
      <BusyTimeActions actionType="add" />
    </>
  );
};

export default BusyTime;
