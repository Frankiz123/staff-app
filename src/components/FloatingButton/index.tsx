import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { FloatingAction, IActionProps } from 'react-native-floating-action';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import useTheme from 'hooks/useTheme';
import FloatingButtonAction from '../FloatingButtonAction';
import messages from 'navigators/messages';
import { SCREENS } from 'navigators/constants';
import { useDispatch } from 'react-redux';
import { setSelectedTasktypeAction } from 'containers/CurrentTask/slice/actions';
import { initiateBookingAction } from 'containers/CurrentBooking/slice/actions';
import { initialState } from 'containers/CurrentBooking/slice/reducer';

const actions: IActionProps[] = [
  {
    render: () => (
      <FloatingButtonAction
        key={'contact'}
        icon={
          <FontAwesome style={[{ color: 'white' }]} name={'user-o'} size={25} />
        }
        messages={messages.contact}
      />
    ),
    name: 'contact',
  },
  {
    render: () => (
      <FloatingButtonAction
        key={'task'}
        icon={
          <Feather
            style={[{ color: 'white' }]}
            name={'check-circle'}
            size={25}
          />
        }
        messages={messages.task}
      />
    ),
    name: 'task',
  },
  // {
  //   render: () => (
  //     <FloatingButtonAction
  //       key={'sale'}
  //       icon={
  //         <Ionicons
  //           style={[{ color: 'white' }]}
  //           name={'receipt-outline'}
  //           size={25}
  //         />
  //       }
  //       messages={messages.sale}
  //     />
  //   ),
  //   name: 'sale',
  // },
  {
    render: () => (
      <FloatingButtonAction
        key={'busyTime'}
        icon={
          <FontAwesome5 style={[{ color: 'white' }]} name={'clock'} size={25} />
        }
        messages={messages.busyTime}
      />
    ),
    name: 'busyTime',
  },
  {
    render: () => (
      <FloatingButtonAction
        key={'appointment'}
        icon={
          <FontAwesome5
            style={[{ color: 'white' }]}
            name={'calendar'}
            size={25}
          />
        }
        messages={messages.appointment}
      />
    ),
    name: 'appointment',
  },
];

type ScreensTypes = 'contact' | 'task' | 'sale' | 'busyTime' | 'appointment';

const ACTIONS_SCREENS = {
  contact: SCREENS.NEW_CLIENT,
  task: SCREENS.ADD_TASK,
  sale: SCREENS.ADD_APPOINTMENT,
  busyTime: SCREENS.BUSY_TIME,
  appointment: SCREENS.ADD_APPOINTMENT,
};

const FloattingButton: React.FC<IFloattingButtonProps> = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <FloatingAction
      iconWidth={25}
      iconHeight={25}
      showBackground
      distanceToEdge={{ vertical: 100, horizontal: 15 }}
      color={theme.colors.primary}
      actions={actions}
      actionsPaddingTopBottom={theme.space.xxxs}
      onPressItem={(name) => {
        name == 'task' && dispatch(setSelectedTasktypeAction('Task'));
        name == 'appointment' &&
          dispatch(initiateBookingAction(initialState.booking, 1));
        navigation.navigate(ACTIONS_SCREENS[name as ScreensTypes] as never);
      }}
    />
  );
};

// const makeStyle = makeStyleSheet((theme) => ({}));
export interface IFloattingButtonProps {}
export default FloattingButton;
