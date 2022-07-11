import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BottomSheet } from 'components/BottomSheet';
import TaskType from 'containers/TaskList/componenets/TaskType';

import useTaskListSlice from './slice';
import { selectTaskList, selectLoading, selectClient } from './slice/selectors';
import { getTasksAction, getClientAction } from './slice/actions';
import TaskCard from 'components/TaskCard';
import UpcomingCard from './componenets/UpcomingCard';
import { FormattedMessage } from 'components/FormattedMessage';
import messages from './messages';
import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import _ from 'lodash';

const TaskList = () => {
  useTaskListSlice();
  const theme = useTheme();
  const dispatch = useDispatch();
  const styles = makeStyles();

  const [visible, setVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState<any>([]);

  const SelectedTaskList = useSelector(selectTaskList);
  const selectedClient = useSelector(selectClient);
  const loading = useSelector(selectLoading);
  const ownId = AsyncStorage.getItem('@id');

  useEffect(() => {
    dispatch(
      getTasksAction({
        staff_id: ownId,
        limit: 3,
        page: 0,
      }),
    );
  }, []);

  //Toggling the visibility state of the bottom sheet
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  // if (loading) {
  //   return (
  //     <ActivityIndicator
  //       style={{ width: '100%', height: '100%' }}
  //       size="large"
  //     />
  //   );
  // }

  return (
    <SafeAreaView>
      <UpcomingCard />
      {loading ? (
        <ActivityIndicator
          style={{ height: 200 }}
          size="large"
          color={theme.colors.primary}
        />
      ) : (
        SelectedTaskList?.data?.map((task: any) => (
          <TaskCard
            onPress={() => setCurrentTask(task)}
            onPressOut={toggleBottomNavigationView}
            key={task.id}
            task={task.title}
            date={task.due_date}
          />
        ))
      )}
      <TouchableOpacity style={styles.viewButton}>
        <Text style={{ color: 'black' }}>
          <FormattedMessage style={{}} {...messages.viewAllTasks} />
        </Text>
      </TouchableOpacity>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        //Toggling the visibility state on the click of the back botton
        onBackdropPress={toggleBottomNavigationView}
        //Toggling the visibility state on the clicking out side of the sheet
      >
        <View style={styles.bottomNavigationView}>
          <View style={styles.BottomSheetHeader}>
            <View>
              <Text style={styles.black}>{_.capitalize(currentTask.type)}</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.black}>
                <FormattedMessage style={{}} {...messages.editTask} />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.seperator}></View>
          <TaskCard
            task={currentTask.title}
            time={currentTask.due_time}
            date={currentTask.due_date}
          />
          <TaskType task={currentTask} />
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  viewButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colors.primary,
    paddingHorizontal: theme.space.xs,
    paddingVertical: theme.space.m,
    borderTopWidth: 0.2,
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 400,
    borderTopLeftRadius: theme.space.s,
    borderTopRightRadius: theme.space.s,
    paddingVertical: theme.space.m,
  },
  BottomSheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: theme.colors.text?.primary,
    width: '100%',
    paddingHorizontal: theme.space.m,
  },
  black: {
    color: theme.colors.text?.primary,
    borderWidth: 1,
    paddingHorizontal: theme.space.m,
    textAlign: 'center',
    paddingVertical: 1,
    borderRadius: theme.space.xxs,
  },
  seperator: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginTop: theme.space.m,
  },
  UpcomingCard: {
    backgroundColor: 'white',
    borderColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 6,
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: theme.colors.text?.primary,
  },
  description: {
    color: theme.colors.text?.grey,
    paddingVertical: 2,
  },
  icon: {
    color: theme.colors.text?.grey,
    padding: 20,
  },
}));

export default TaskList;
