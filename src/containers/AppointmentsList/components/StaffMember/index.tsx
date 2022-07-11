import Avatar from 'components/Avatar';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const StaffMemberComponent: React.FC<IStaffMemberComponentProps> = ({
  id,
  avatar,
  full_name,
  email,
  phone,
  selected,
  onPressStaffMember,
}) => {
  const theme = useTheme();
  const getAvatarTitle = () => {
    if (!full_name) return '';
    const parts = full_name.split(' ');
    return parts.length > 1
      ? `${parts[0][0]}${parts[1][0]}`
      : `${parts[0][0]}${parts[0][1]}`;
  };

  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: 'row',
          paddingVertical: 5,
          paddingLeft: 10,
        },
        selected && {
          backgroundColor: theme.colors.primary + '30',
        },
      ]}
      onPress={onPressStaffMember}>
      <View style={{ justifyContent: 'center' }}>
        <Avatar
          uri={avatar.replace('getClientImage', 'getStaffImage')}
          title={getAvatarTitle()}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            resizeMode: 'cover',
          }}
        />
      </View>
      <View
        style={{
          alignItems: 'flex-start',
          flex: 1,
          justifyContent: 'center',
          padding: 12,
        }}>
        <Text
          style={{
            fontWeight: '600',
          }}>
          {full_name}
        </Text>
        {!!email && <Text style={{ color: 'black' }}>{email}</Text>}
        {!!phone && <Text style={{ color: 'black' }}>{phone}</Text>}
      </View>
    </TouchableOpacity>
  );
};
export interface IStaffMemberComponentProps {
  id: string;
  avatar: string;
  full_name: string;
  email?: string;
  phone?: string;
  selected: boolean;
  onPressStaffMember: ((event: GestureResponderEvent) => void) | undefined;
}
export default StaffMemberComponent;
