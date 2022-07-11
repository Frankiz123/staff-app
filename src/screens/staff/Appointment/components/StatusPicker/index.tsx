import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FormattedMessage } from 'components/FormattedMessage';
import {
  STATUS_LIST,
  STATUS_LIST_LABELS,
  AppointmentStatuses,
} from './constants';
import useTheme from 'hooks/useTheme';
import { BottomSheet } from 'components/BottomSheet';
import { selectStatus } from 'containers/CurrentBooking/slice/selectors';
import { setSelectedStatus } from 'containers/CurrentBooking/slice/actions';
import messages from '../../messages';
import statusColors, { ColorTypes } from 'theme/statusColors';

const StatusPickerComponent: React.FC<IStatusPickerComponentProps> = (
  props,
) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const status = useSelector(selectStatus);
  const [serviceTypeListvisibe, setServiceTypeListvisibe] = useState(false);

  return (
    <>
      <View style={{ paddingVertical: theme.space.s }}>
        <FormattedMessage
          options={messages.status.options}
          scope={messages.status.scope}
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
              {STATUS_LIST_LABELS[status as AppointmentStatuses]}
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
              options={messages.status.options}
              scope={messages.status.scope}
              style={{
                padding: theme.space.m,
                fontWeight: 'bold',
              }}
            />
            {STATUS_LIST.map((statusItem) => (
              <TouchableOpacity
                key={statusItem.value}
                style={[{ padding: theme.space.m, flexDirection: 'row' }]}
                onPress={() => {
                  setServiceTypeListvisibe(!serviceTypeListvisibe);
                  dispatch(setSelectedStatus(statusItem.value));
                }}>
                <AntDesign
                  name={'check'}
                  style={[]}
                  color={
                    statusItem.value == status
                      ? statusColors[statusItem.value as ColorTypes]
                      : 'transparent'
                  }
                  size={25}
                />
                <Text style={{ color: 'black' }}> {statusItem.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </BottomSheet>
      </View>
    </>
  );
};
export interface IStatusPickerComponentProps {}
export default StatusPickerComponent;
