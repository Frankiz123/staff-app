import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-native-date-picker';
import { format } from 'date-fns';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { selectDate } from 'containers/CurrentBooking/slice/selectors';
import { setDateAction } from 'containers/CurrentBooking/slice/actions';
import useTheme from 'hooks/useTheme';
import { BottomSheet } from 'components/BottomSheet';
import { FormattedMessage } from 'components/FormattedMessage';
import messages from '../../messages';

const DatePickerComponent: React.FC<IDatePickerComponentProps> = ({
  selectedDate,
  onDateSelected,
  title,
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  // const selectedDate = useSelector(selectDate);

  const [date, setDate] = useState<Date>(selectedDate);
  const [datePickerVisble, setDatePickerVisble] = useState(false);

  return (
    <View style={{ paddingVertical: theme.space.s }}>
      <Text style={{ marginBottom: theme.space.s, fontWeight: 'bold' }}>
        {title}
      </Text>
      {/* <FormattedMessage
        options={messages.date.options}
        scope={messages.date.scope}
        style={{ marginBottom: theme.space.s, fontWeight: 'bold' }}
      /> */}

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
          <Text style={{ marginBottom: theme.space.s, fontWeight: 'bold' }}>
            {title}
          </Text>

          <DatePicker
            style={{ width: theme.dimensions.width }}
            date={date}
            fadeToColor="none"
            minimumDate={new Date()}
            onDateChange={setDate}
            minuteInterval={5}
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
                onDateSelected(date);
                // dispatch(setDateAction(date));
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
export interface IDatePickerComponentProps {
  selectedDate: Date;
  onDateSelected: (date: Date) => void;
  title: string;
}
export default DatePickerComponent;
