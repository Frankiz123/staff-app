import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { FormattedMessage } from 'components/FormattedMessage';

import { APPOINTMENT_TYPES, APPOINTMENT_TYPES_LABELS } from './constants';
import useTheme from 'hooks/useTheme';
import { BottomSheet } from 'components/BottomSheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { selectBookingType } from 'containers/CurrentBooking/slice/selectors';
import { setSelectedServiceTypeAction } from 'containers/CurrentBooking/slice/actions';

import messages from '../../messages';

const ServiceTypePicker: React.FC<IServiceTypePickerProps> = ({}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const appointmentType = useSelector(selectBookingType);
  const [serviceTypeListvisibe, setServiceTypeListvisibe] = useState(false);

  return (
    <>
      <View style={{ paddingVertical: theme.space.s }}>
        <FormattedMessage
          options={messages.appointmentType.options}
          scope={messages.appointmentType.scope}
          style={{ marginBottom: theme.space.s, fontWeight: 'bold' }}
        />
        <TouchableOpacity
          onPress={() => {
            setServiceTypeListvisibe(true);
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
              {APPOINTMENT_TYPES_LABELS[appointmentType]}
            </Text>
            <MaterialCommunityIcons
              name={'chevron-down'}
              size={25}
              style={{ color: 'black' }}
            />
          </>
        </TouchableOpacity>
        <BottomSheet
          visible={serviceTypeListvisibe}
          onBackButtonPress={() => {
            setServiceTypeListvisibe(!serviceTypeListvisibe);
          }}
          onBackdropPress={() => {
            setServiceTypeListvisibe(!serviceTypeListvisibe);
          }}>
          <View
            style={{
              backgroundColor: 'white',
              paddingTop: theme.space.s,
              paddingBottom: theme.insets.bottom + theme.space.s,
              borderTopLeftRadius: theme.space.s,
              borderTopRightRadius: theme.space.s,
            }}>
            <FormattedMessage
              options={messages.appointmentType.options}
              scope={messages.appointmentType.scope}
              style={{
                padding: theme.space.m,
                fontWeight: 'bold',
              }}
            />
            {APPOINTMENT_TYPES.map((appType) => (
              <TouchableOpacity
                key={appType.value}
                style={{ padding: theme.space.m }}
                onPress={() => {
                  setServiceTypeListvisibe(!serviceTypeListvisibe);
                  dispatch(setSelectedServiceTypeAction(appType.value));
                }}>
                <Text style={{ color: 'black' }}> {appType.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </BottomSheet>
      </View>
    </>
  );
};
export interface IServiceTypePickerProps {}
export default ServiceTypePicker;
