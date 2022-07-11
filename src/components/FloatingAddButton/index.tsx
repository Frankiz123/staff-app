import useTheme from 'hooks/useTheme';
import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FloatingAddButton: React.FC<IFloatingAddButtonProps> = ({ onPress }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: 'absolute',
        bottom: 50,
        right: 15,
        backgroundColor: 'white',
        borderRadius: 50,
      }}>
      <AntDesign name="pluscircle" size={55} color={theme.colors.primary} />
    </TouchableOpacity>
  );
};
export interface IFloatingAddButtonProps {
  onPress: any;
}
export default FloatingAddButton;
