import React from 'react';
import { View } from 'react-native';
import TasksAndNotesContainer from 'containers/TaskAndNotes';
import TasksTabsComponent from './components/TaskTabNavigator';
import FloatingButton from './components/FloatingButton';

const TaskListScreen: React.FC<ITaskListScreenProps> = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TasksAndNotesContainer />
      <TasksTabsComponent />
      <FloatingButton />
    </View>
  );
};
export interface ITaskListScreenProps {}
export default TaskListScreen;
