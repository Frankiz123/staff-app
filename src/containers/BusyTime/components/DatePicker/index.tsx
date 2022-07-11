import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-native-date-picker';
import { format } from 'date-fns';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { selectDate } from 'containers/BusyTime/slice/selectors';
import { setDateAction } from 'containers/BusyTime/slice/actions';
import useTheme from 'hooks/useTheme';
import { BottomSheet } from 'components/BottomSheet';
import { FormattedMessage } from 'components/FormattedMessage';
import messages from '../../messages';
import moment from 'moment';
const DatePickerComponent: React.FC<IDatePickerComponentProps> = ({}) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const selectedDate = useSelector(selectDate);

  const [date, setDate] = useState<Date>(selectedDate);
  const [datePickerVisble, setDatePickerVisble] = useState(false);
  return (
    <View style={{ paddingVertical: theme.space.s }}>
      <FormattedMessage
        options={messages.date.options}
        scope={messages.date.scope}
        style={{ marginBottom: theme.space.s, fontWeight: 'bold' }}
      />

      <TouchableOpacity
        onPress={() => {
          setDatePickerVisble(true);
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          padding: 10,
        }}>
        <>
          <Text style={{ color: 'black' }}>
            {format(selectedDate, 'E, dd MMM yyyy hh:mm aa')}
          </Text>
        </>
        <MaterialCommunityIcons
          name={'chevron-down'}
          size={25}
          style={{ color: 'black' }}
        />
      </TouchableOpacity>
      <BottomSheet
        visible={datePickerVisble}
        onBackButtonPress={() => {
          setDatePickerVisble(!datePickerVisble);
        }}
        onBackdropPress={() => {
          setDatePickerVisble(!datePickerVisble);
        }}>
        <View
          style={{
            backgroundColor: 'white',
            paddingTop: theme.space.s,
            paddingBottom: theme.insets.bottom + theme.space.s,
            borderTopLeftRadius: theme.space.s,
            borderTopRightRadius: theme.space.s,
            maxHeight: theme.dimensions.height - 200,
          }}>
          <FormattedMessage
            options={messages.date.options}
            scope={messages.date.scope}
            style={{
              padding: theme.space.m,
              fontWeight: 'bold',
            }}
          />

          <DatePicker
            style={{ width: theme.dimensions.width }}
            date={date}
            fadeToColor="none"
            minimumDate={new Date()}
            onDateChange={setDate}
            minuteInterval={5}
            // mode='time'
          />
          <View
            style={{
              // backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.primary,
                padding: theme.space.s,
                borderRadius: theme.space.xs,
              }}
              onPress={() => {
                dispatch(setDateAction(date));
                setDatePickerVisble(!datePickerVisble);
              }}>
              <Text style={{ color: 'white' }}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};
export interface IDatePickerComponentProps {}
export default DatePickerComponent;
