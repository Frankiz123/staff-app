import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import JSONTree from 'react-native-json-tree';
import { selectUser } from 'containers/AuthHelper/slice/selectors';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import { logOutAction } from 'containers/AuthHelper/slice/actions';
import { SCREENS } from 'navigators/constants';
interface IDrawerContentProps {
  state: any;
  navigation: any;
  descriptors: any;
}

export const DrawerContent: React.FC<IDrawerContentProps> = ({
  state,
  navigation,
  descriptors,
}: DrawerContentComponentProps) => {
  const styles = makeStyles();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView
      style={styles.drawerContentScroll}
      showsVerticalScrollIndicator={false}>
      <View style={styles.drawerHeaderContainer}>
        <View style={styles.headerIconContainer}>
          <FontAwesome style={{ color: 'white' }} name={'user'} size={25} />
        </View>
        <Text style={{ color: 'white' }}>
          {user.reference_data.full_name}{' '}
          <Text style={{ color: '#f0f0f0' }}>
            ({user.reference_data.user_type})
          </Text>
        </Text>
      </View>
      <View style={styles.drawerBody}>
        <DrawerItemList
          state={state}
          navigation={navigation}
          descriptors={descriptors}
        />
        <DrawerItem
          label={'LOGOUT'}
          onPress={() => {
            dispatch(logOutAction());
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  headerIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bebebe',
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: theme.space.s,
  },
  drawerContentScroll: {
    backgroundColor: theme.colors.primary,
    paddingRight: theme.space.s,
  },
  drawerHeaderContainer: {
    padding: theme.space.l,
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerBody: {
    flex: 1,
    backgroundColor: 'white',
    minHeight: theme.dimensions.height - 100,
    borderTopRightRadius: 30,
    paddingTop: 30,
  },
}));
