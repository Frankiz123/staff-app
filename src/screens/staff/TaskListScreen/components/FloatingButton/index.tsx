import React from 'react';
import { navigate } from 'utils/rootNavigation';
import { SCREENS } from 'navigators/constants';
import useTheme from 'hooks/useTheme';
import { FloatingAction, IActionProps } from 'react-native-floating-action';
import FloatingButtonAction from 'components/FloatingButtonAction';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Feather from 'react-native-vector-icons/Feather';
import messages from '../../messages';
import { useDispatch } from 'react-redux';
import { setSelectedTasktypeAction } from 'containers/CurrentTask/slice/actions';
import { ITaskType } from 'containers/CurrentTask/slice/types';

const FloatingButton: React.FC<IFloatingButtonProps> = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const actions: IActionProps[] = [
    {
      render: () => (
        <FloatingButtonAction
          key={'Meeting'}
          icon={
            <MaterialIcons
              style={[{ color: 'white' }]}
              name={'meeting-room'}
              size={25}
            />
          }
          messages={messages.addMeetingLog}
        />
      ),
      name: 'Meeting',
    },
    {
      render: () => (
        <FloatingButtonAction
          key={'Email'}
          icon={
            <Feather style={[{ color: 'white' }]} name={'mail'} size={25} />
          }
          messages={messages.addEmailLog}
        />
      ),
      name: 'Email',
    },
    {
      render: () => (
        <FloatingButtonAction
          key={'Call'}
          icon={
            <Ionicons
              style={[{ color: 'white' }]}
              name={'md-call-outline'}
              size={25}
            />
          }
          messages={messages.addCallLog}
        />
      ),
      name: 'Call',
    },
    {
      render: () => (
        <FloatingButtonAction
          key={'Task'}
          icon={
            <Feather
              style={[{ color: 'white' }]}
              name={'check-circle'}
              size={25}
            />
          }
          messages={messages.addTask}
        />
      ),
      name: 'Task',
    },
  ];

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
        dispatch(setSelectedTasktypeAction(name as ITaskType));
        navigate(SCREENS.ADD_TASK as never);
      }}
    />
  );
};
export interface IFloatingButtonProps {}
export default FloatingButton;
