import produce from 'immer';

import {
  SET_SELECTED_CLIENT,
  SET_DATE,
  SET_SELECTED_STAFF,
  SET_DUE_DATE,
  SET_REMINDER,
  CREATE_TASK,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_ERROR,
  SET_LOG_DETAILS,
  SET_LOG_TITLE,
  SET_SELECTED_TASK_TYPE,
} from './constants';

import { CurrentTaskState } from './types';

export const initialState: CurrentTaskState = {
  error: false,
  loading: false,
  task: {
    client: null,
    staff: null,
    date: new Date(),
    dueDate: new Date(),
    reminderDate: new Date(),
    title: '',
    details: '',
    taskType: 'Task',
  },
};

const currentTaskReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_SELECTED_TASK_TYPE:
      draft.task.taskType = action.tasktype;
      break;
    case SET_SELECTED_CLIENT:
      draft.task.client = action.client;
      break;
    case SET_DATE:
      draft.task.date = action.date;
      break;
    case SET_REMINDER:
      draft.task.reminderDate = action.date;
      break;
    case SET_DUE_DATE:
      draft.task.dueDate = action.date;
      break;
    case SET_SELECTED_STAFF:
      draft.task.staff = action.staff;
      break;
    case CREATE_TASK:
      draft.loading = true;
      break;
    case CREATE_TASK_SUCCESS:
      draft.loading = false;
      draft.task = initialState.task;
      break;
    case CREATE_TASK_ERROR:
      draft.loading = false;
      draft.error = false;
      break;
    case SET_LOG_DETAILS:
      draft.task.details = action.value;
      break;
    case SET_LOG_TITLE:
      draft.task.title = action.value;
      break;
  }
}, initialState);

export default currentTaskReducer;
