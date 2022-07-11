import React, { useState } from 'react';
import { BottomSheet } from 'components/BottomSheet';
import { FormattedMessage } from 'components/FormattedMessage';
import StaffMemberComponent from 'containers/AppointmentsList/components/StaffMember';
import StaffListContainer from 'containers/StaffList';
import { selectStaffList } from 'containers/StaffList/slice/selectors';
import useTheme from 'hooks/useTheme';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import messages from '../../messages';
import { selectStaff } from 'containers/BusyTime/slice/selectors';
import { setSelectedStaffAction } from 'containers/BusyTime/slice/actions';
import { useBusyTimeSlice } from 'containers/BusyTime/slice';

const StaffPickerComponent: React.FC<IStaffPickerComponentProps> = ({}) => {
  useBusyTimeSlice();
  const dispatch = useDispatch();
  const theme = useTheme();
  const staffList = useSelector(selectStaffList);
  const staff = useSelector(selectStaff);
  const { id, full_name } = staff || { id: null, full_name: null };
  const [serviceTypeListvisibe, setServiceTypeListvisibe] = useState(false);

  return (
    <View style={{ paddingVertical: theme.space.s }}>
      <StaffListContainer />
      <FormattedMessage
        options={messages.staff.options}
        scope={messages.staff.scope}
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
          {id ? (
            <Text style={{ color: 'black' }}>{full_name}</Text>
          ) : (
            <FormattedMessage
              options={messages.selectStaff.options}
              scope={messages.selectStaff.scope}
              style={{}}
            />
          )}
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
            maxHeight: theme.dimensions.height - 200,
          }}>
          <FormattedMessage
            options={messages.selectStaff.options}
            scope={messages.selectStaff.scope}
            style={{
              padding: theme.space.m,
              fontWeight: 'bold',
            }}
          />

          <FlatList
            data={staffList.filter((item) => item.state != 'inactive')}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <>
                  <StaffMemberComponent
                    id={item.id}
                    avatar={item.avatar}
                    full_name={item.full_name}
                    onPressStaffMember={() => {
                      const { id, full_name } = item;
                      dispatch(setSelectedStaffAction({ id, full_name }));
                      setServiceTypeListvisibe(!serviceTypeListvisibe);
                    }}
                    selected={false}
                  />
                </>
              );
            }}
          />
        </View>
      </BottomSheet>
    </View>
  );
};
export interface IStaffPickerComponentProps {}
export default StaffPickerComponent;
