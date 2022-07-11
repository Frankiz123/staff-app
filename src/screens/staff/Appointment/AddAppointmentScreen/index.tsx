import React, { useState } from 'react';
import { Text, View } from 'react-native';
import ContactListPickerContainer from 'containers/ContactsList/ContactPicker';
import ServiceTypePicker from '../components/ServiceTypePicker';
import useTheme from 'hooks/useTheme';
import StaffPickerComponent from '../components/StaffPicker';
import ServicePicker from '../components/ServicePicker';
import DatePickerComponent from '../components/DatePicker';
import DurationPickerComponent from '../components/DurationPicker';
import BookingActionsComponent from '../components/BookingActions';
import { ScrollView } from 'react-native-gesture-handler';
import NotesInputComponent from '../components/NotesInput';
import CurrentBookingContainer from 'containers/CurrentBooking';
import CoursePickerComponent from '../components/CoursesPicker';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBookingType,
  selectClient,
  selectDate,
  selectStaff,
} from 'containers/CurrentBooking/slice/selectors';
import AlreadyBookedTimeComponent from '../components/AlreadyBookedTime';
import {
  setDateAction,
  setSelectedclientAction as setSelectedClientForCurrentBookingAction,
  setSelectedStaffAction,
} from 'containers/CurrentBooking/slice/actions';
import { IBookingStaff } from 'containers/currentBooking/slice/types';
import { translate } from 'i18n';
import messages from '../messages';

const AddAppointmentScreen: React.FC<IAddAppointmentScreenProps> = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const bookingType = useSelector(selectBookingType);
  const client = useSelector(selectClient);
  const staff = useSelector(selectStaff);
  const date = useSelector(selectDate);

  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 16 }}>
      <CurrentBookingContainer />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          paddingHorizontal: theme.space.s,
          marginBottom: theme.insets.bottom + 100,
        }}>
        <ContactListPickerContainer
          selectedClient={
            client || {
              id: '',
              avatar: '',
              name: '',
              surname: '',
              phone: '',
            }
          }
          onClientSelected={({ id, avatar, name, surname, phone }: any) => {
            dispatch(
              setSelectedClientForCurrentBookingAction({
                id,
                avatar,
                name,
                surname,
                phone,
              }),
            );
          }}
        />

        <ServiceTypePicker />

        {bookingType == 'service' && <ServicePicker />}
        {bookingType == 'course' && <CoursePickerComponent />}

        {bookingType != 'membership' && (
          <>
            <StaffPickerComponent
              selectedStaff={staff || { id: '', full_name: '' }}
              onStaffSelected={({ id, full_name }: IBookingStaff) =>
                dispatch(setSelectedStaffAction({ id, full_name }))
              }
            />
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 2 }}>
                <DatePickerComponent
                  title={translate(messages.date.scope, messages.date.options)}
                  selectedDate={date}
                  onDateSelected={(date) => {
                    dispatch(setDateAction(date));
                  }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <DurationPickerComponent />
              </View>
            </View>

            <NotesInputComponent />
          </>
        )}
      </ScrollView>

      {bookingType != 'membership' && (
        <BookingActionsComponent actionType={'add'} />
      )}
      <AlreadyBookedTimeComponent />
    </View>
  );
};
export interface IAddAppointmentScreenProps {}
export default AddAppointmentScreen;
