import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import useTheme from 'hooks/useTheme';
import { BottomSheet } from 'components/BottomSheet';

import { DATES } from './constants';

const DueDatePickerComponent: React.FC<IDueDatePickerComponentProps> = (
  props,
) => {
  const theme = useTheme();
  const [datePickerVisble, setDatePickerVisble] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setDatePickerVisble(true);
        }}>
        <Text style={{ color: 'black' }}>Select Due Date</Text>
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
            Due Date
          </Text>
          <DatePicker
            style={{ width: theme.dimensions.width }}
            date={new Date()}
            fadeToColor="none"
            minimumDate={new Date()}
            onDateChange={() => {}}
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
                // onDateSelected(date);
                // dispatch(setDateAction(date));
                setDatePickerVisble(!datePickerVisble);
              }}>
              <Text style={{ color: 'white' }}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </>
  );
};
export interface IDueDatePickerComponentProps {}
export default DueDatePickerComponent;
