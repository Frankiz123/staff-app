import produce from 'immer';
import {
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  GET_TASKS_COUNTER,
  GET_CLIENT,
  GET_CLIENT_SUCCESS,
  GET_STAFF,
  GET_STAFF_SUCCESS,
  GET_STAFF_TASKS_CATEGORIES,
  GET_STAFF_TASKS_CATEGORIES_SUCCESS,
  GET_TASKS_COUNTER_SUCCESS,
} from './constants';
import { TaskListState } from './types';

export const initialState: TaskListState = {
  taskList: [],
  loading: false,
  error: false,
  counter: [],
  client: [],
  staff: [],
  categories: [],
};

/* eslint-disable default-case, no-param-reassign */
const taskListReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_TASKS:
      draft.loading = true;
      draft.taskList = [];
      break;
    case GET_TASKS_SUCCESS:
      draft.loading = false;
      draft.taskList = action.taskList;
      break;
    case GET_TASKS_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
    case GET_TASKS_COUNTER:
      draft.counter = [];
      break;
    case GET_TASKS_COUNTER_SUCCESS:
      draft.counter = action.counter;
      break;
    case GET_CLIENT:
      draft.client = [];
      break;
    case GET_CLIENT_SUCCESS:
      draft.client = action.client;
      break;
    case GET_STAFF:
      draft.staff = [];
      break;
    case GET_STAFF_SUCCESS:
      draft.staff = action.staff;
      break;
    case GET_STAFF_TASKS_CATEGORIES:
      draft.categories = [];
      break;
    case GET_STAFF_TASKS_CATEGORIES_SUCCESS:
      draft.categories = action.categories;
      break;
  }
}, initialState);

export default taskListReducer;
