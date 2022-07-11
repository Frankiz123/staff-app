import React, { useEffect } from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import useTaskAndNotesListSlice from './slice';
import {
  getTasksAction,
  getTasksCategoriesAction,
  getTasksLabelsAction,
} from './slice/actions';
import { selectFocusedTab } from './slice/selectors';

const TasksAndNotesContainer: React.FC<ITasksAndNotesContainerProps> = (
  props,
) => {
  useTaskAndNotesListSlice();
  const dispatch = useDispatch();

  const focusedTab = useSelector(selectFocusedTab);

  useEffect(() => {
    dispatch(getTasksCategoriesAction());
    dispatch(getTasksLabelsAction());
  }, []);

  useEffect(() => {
    dispatch(getTasksAction());
  }, [focusedTab]);
  return <></>;
};
export interface ITasksAndNotesContainerProps {}
export default TasksAndNotesContainer;
