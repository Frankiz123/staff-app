import { useFocusEffect } from '@react-navigation/native';
import {
  getMoreTasksAction,
  getTasksAction,
  setFocusedTabAction,
} from 'containers/TaskAndNotes/slice/actions';
import {
  selectLoading,
  selectRefreshing,
  selectTaskLabels,
  selectTaskList,
} from 'containers/TaskAndNotes/slice/selectors';
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import JSONTree from 'react-native-json-tree';
import { useDispatch, useSelector } from 'react-redux';
import { COLUMNS } from '../../constants';
import Task from '../TaskComponent';
import Feather from 'react-native-vector-icons/Feather';
import { translate } from 'i18n';
import messages from '../../messages';
import useTheme from 'hooks/useTheme';
const TasksTabComponent: React.FC<ITasksTabComponentProps> = ({
  route: { name },
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const tasks = useSelector(selectTaskList);
  const labels = useSelector(selectTaskLabels);
  const loading = useSelector(selectLoading);
  const refreshing = useSelector(selectRefreshing);

  const column = COLUMNS.find((filter) => filter.name == name) || {
    name: '',
    filters: {
      status: 'DONT_SEND',
    },
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(setFocusedTabAction(column));
    }, []),
  );
  return (
    <>
      {/* <JSONTree hideRoot data={{ column, tasks }} /> */}
      {(loading.tasks || refreshing) && (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      )}
      <>
        {tasks.length == 0 ? (
          <>
            {!refreshing && !loading.tasks && (
              <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
                <Feather name="check-circle" style={{}} size={50} />
                <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 16 }}>
                  {translate(messages.noTasks.scope, messages.noTasks.options)}
                </Text>
                <Text style={{ fontSize: 16 }}>
                  {`${translate(
                    messages.youHaveNo.scope,
                    messages.youHaveNo.options,
                  )} "${column.name}"`}
                </Text>
              </View>
            )}
          </>
        ) : (
          <FlatList
            keyExtractor={(item) => item.id}
            data={tasks}
            onEndReached={() => {
              dispatch(getMoreTasksAction());
            }}
            contentContainerStyle={{
              paddingBottom: theme.insets.bottom + theme.space.s,
            }}
            // onEndReachedThreshold={5}
            renderItem={({ item: task, index }) => {
              return (
                <Task
                  task={task}
                  onPress={() => {}}
                  labels={labels}
                  onComplete={() => {}}
                />
              );
            }}
          />
        )}
      </>
    </>
  );
};
export interface ITasksTabComponentProps {
  route: { name: string };
}
export default TasksTabComponent;
