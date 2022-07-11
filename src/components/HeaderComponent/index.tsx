import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import useTheme from 'hooks/useTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderComponent: React.FC<IHeaderComponentProps> = (props) => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ padding: theme.space.xs }}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}>
          <Ionicons name={'menu'} size={30} />
        </TouchableOpacity>
      </View>
    </>
  );
};
export interface IHeaderComponentProps {}
export default HeaderComponent;
