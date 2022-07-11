import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from 'hooks/useTheme';
import { BottomSheet } from 'components/BottomSheet';
import { FormattedMessage } from 'components/FormattedMessage';
import { selectDuration } from 'containers/CurrentBooking/slice/selectors';
import { setDurationAction } from 'containers/CurrentBooking/slice/actions';
import { DURATIONS } from './constants';
import messages from '../../messages';

const DurationPickerComponent: React.FC<
  IDurationPickerComponentProps
> = ({}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const duration = useSelector(selectDuration);

  const [durationsListvisibe, setDurationsListvisibe] = useState(false);

  return (
    <View style={{ paddingVertical: theme.space.s }}>
      <FormattedMessage
        options={messages.duration.options}
        scope={messages.duration.scope}
        style={{ marginBottom: theme.space.s, fontWeight: 'bold' }}
      />
      <TouchableOpacity
        onPress={() => {
          setDurationsListvisibe(true);
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
          <Text style={{ color: 'black' }}>{duration?.label}</Text>
          <MaterialCommunityIcons
            name={'chevron-down'}
            size={25}
            style={{ color: 'black' }}
          />
        </>
      </TouchableOpacity>
      <BottomSheet
        visible={durationsListvisibe}
        onBackButtonPress={() => {
          setDurationsListvisibe(!durationsListvisibe);
        }}
        onBackdropPress={() => {
          setDurationsListvisibe(!durationsListvisibe);
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
            options={messages.duration.options}
            scope={messages.duration.scope}
            style={{
              padding: theme.space.m,
              fontWeight: 'bold',
            }}
          />
          <ScrollView>
            {DURATIONS.map((duration) => (
              <TouchableOpacity
                key={duration.value}
                style={{ padding: theme.space.m }}
                onPress={() => {
                  setDurationsListvisibe(!durationsListvisibe);
                  dispatch(setDurationAction(duration));
                }}>
                <Text style={{ color: 'black' }}>{duration.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </BottomSheet>
    </View>
  );
};
export interface IDurationPickerComponentProps {}
export default DurationPickerComponent;
