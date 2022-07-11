import ContactListPickerContainer from 'containers/ContactsList/ContactPicker';
import {
  IBookingClient,
  IBookingStaff,
} from 'containers/currentBooking/slice/types';
import {
  setSelectedclientAction,
  setSelectedStaffAction,
  setDateAction,
  setDueDateAction,
  setReminderDateAction,
} from 'containers/CurrentTask/slice/actions';
import { selectCurrentTask } from 'containers/CurrentTask/slice/selectors';
import TasksAndNotesContainer from 'containers/TaskAndNotes';
import useTheme from 'hooks/useTheme';
import { translate } from 'i18n';
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DatePickerComponent from '../Appointment/components/DatePicker';
import StaffPickerComponent from '../Appointment/components/StaffPicker';
import DueDatePickerComponent from './components/DueDatePicker';
import LabelPickerComponent from './components/LabelPicker';
import StagePickerComponent from './components/StagePicker';
import TaskActionsComponent from './components/TaskActions';
import TaskTitleInput from './components/TaskTitleInput';
import messages from './messages';

const AddTaskScreen: React.FC<IAddTaskScreenProps> = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { client, staff, date, dueDate, reminderDate } =
    useSelector(selectCurrentTask);

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: theme.insets.bottom + 100,
        }}
        style={{
          backgroundColor: 'white',
          flex: 1,
          padding: theme.space.s,
          // marginBottom: theme.insets.bottom,
        }}>
        <TasksAndNotesContainer />
        <TaskTitleInput />
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
          onClientSelected={({
            id,
            avatar,
            name,
            surname,
            phone,
          }: IBookingClient) => {
            dispatch(
              setSelectedclientAction({
                id,
                avatar,
                name,
                surname,
                phone,
              }),
            );
          }}
        />
        <StaffPickerComponent
          selectedStaff={staff || { id: '', full_name: '' }}
          onStaffSelected={({ id, full_name }: IBookingStaff) =>
            dispatch(setSelectedStaffAction({ id, full_name }))
          }
        />
        <DatePickerComponent
          title={translate(messages.dueDate.scope, messages.dueDate.options)}
          selectedDate={dueDate}
          onDateSelected={(date) => {
            dispatch(setDueDateAction(date));
          }}
        />
        <DatePickerComponent
          title={translate(messages.reminder.scope, messages.reminder.options)}
          selectedDate={reminderDate}
          onDateSelected={(date) => {
            dispatch(setReminderDateAction(date));
          }}
        />
        <LabelPickerComponent />
        <StagePickerComponent />
      </ScrollView>
      <TaskActionsComponent actionType="add" />
    </>
  );
};
export interface IAddTaskScreenProps {}
export default AddTaskScreen;
