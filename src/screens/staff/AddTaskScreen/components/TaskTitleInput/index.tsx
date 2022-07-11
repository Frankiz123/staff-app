import { FormattedMessage } from 'components/FormattedMessage';
import {
  setLogDetailsAction,
  setLogTitletion,
} from 'containers/CurrentTask/slice/actions';
import { selectCurrentTask } from 'containers/CurrentTask/slice/selectors';
import useTheme from 'hooks/useTheme';
import { translate } from 'i18n';
import React from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import messages from '../../messages';
import navigatorMessages from 'navigators/messages';

const TaskTitleInput: React.FC<ITaskTitleInputProps> = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { title, details, taskType } = useSelector(selectCurrentTask);
  return (
    <>
      <View style={{ paddingBottom: theme.space.s }}>
        <FormattedMessage
          options={messages.taskTitle.options}
          scope={messages.taskTitle.scope}
          style={{ marginBottom: theme.space.s, fontWeight: 'bold' }}
        />
        <TextInput
          multiline
          defaultValue={title}
          placeholder={`${(() => {
            switch (taskType) {
              case 'Task':
                return translate(
                  navigatorMessages.addTask.scope,
                  navigatorMessages.addTask.options,
                );
              case 'Email':
                return translate(
                  navigatorMessages.addEmailLog.scope,
                  navigatorMessages.addEmailLog.options,
                );
              case 'Meeting':
                return translate(
                  navigatorMessages.addMeetingLog.scope,
                  navigatorMessages.addMeetingLog.options,
                );
              case 'Call':
                return translate(
                  navigatorMessages.addCallLog.scope,
                  navigatorMessages.addCallLog.options,
                );
              default:
                return translate(
                  navigatorMessages.addTask.scope,
                  navigatorMessages.addTask.options,
                );
            }
          })()} ${translate(
            messages.taskTitle.scope,
            messages.taskTitle.options,
          )}`}
          placeholderTextColor={'grey'}
          style={{
            borderRadius: theme.space.xxs,
            borderColor: 'grey',
            borderWidth: 1,
            minHeight: 35,
            justifyContent: 'center',
            textAlignVertical: 'center',
          }}
          onChangeText={(text) => dispatch(setLogTitletion(text))}
        />
      </View>
      <View style={{ paddingVertical: theme.space.s }}>
        <FormattedMessage
          options={messages.taskDetails.options}
          scope={messages.taskDetails.scope}
          style={{ marginBottom: theme.space.s, fontWeight: 'bold' }}
        />
        <TextInput
          multiline
          defaultValue={details}
          placeholder={`${(() => {
            switch (taskType) {
              case 'Task':
                return translate(
                  navigatorMessages.addTask.scope,
                  navigatorMessages.addTask.options,
                );
              case 'Email':
                return translate(
                  navigatorMessages.addEmailLog.scope,
                  navigatorMessages.addEmailLog.options,
                );
              case 'Meeting':
                return translate(
                  navigatorMessages.addMeetingLog.scope,
                  navigatorMessages.addMeetingLog.options,
                );
              case 'Call':
                return translate(
                  navigatorMessages.addCallLog.scope,
                  navigatorMessages.addCallLog.options,
                );
              default:
                return translate(
                  navigatorMessages.addTask.scope,
                  navigatorMessages.addTask.options,
                );
            }
          })()} ${translate(
            messages.taskDetails.scope,
            messages.taskDetails.options,
          )}`}
          placeholderTextColor={'grey'}
          style={{
            borderRadius: theme.space.xxs,
            borderColor: 'grey',
            borderWidth: 1,
            minHeight: 35,
            justifyContent: 'center',
            textAlignVertical: 'center',
          }}
          onChangeText={(text) => dispatch(setLogDetailsAction(text))}
        />
      </View>
    </>
  );
};
export interface ITaskTitleInputProps {}
export default TaskTitleInput;
