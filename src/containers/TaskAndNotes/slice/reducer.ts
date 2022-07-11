import produce from 'immer';
import {
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  GET_TASKS_LABELS,
  GET_TASKS_LABELS_SUCCESS,
  GET_TASKS_LABELS_ERROR,
  GET_TASKS_CATEGORIES,
  GET_TASKS_CATEGORIES_SUCCESS,
  GET_TASKS_CATEGORIES_ERROR,
  SET_FOCUSED_TAB,
  GET_MORE_TASKS,
  GET_MORE_TASKS_SUCCESS,
  GET_MORE_TASKS_ERROR,
  CHANGE_SEARCH_TEXT,
} from './constants';
import { TaskAndNotesListState } from './types';

export const initialState: TaskAndNotesListState = {
  taskList: [],
  labels: [],
  categories: [],
  loading: { tasks: false, labels: false, categories: false },
  refreshing: false,
  error: { tasks: false, labels: false, categories: false },
  focusedTasksTab: {
    name: '',
    filters: {
      status: 'DONT_SEND',
    },
  },
  offset: 0,
  searchText: '',
};

/* eslint-disable default-case, no-param-reassign */
const taskListReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      draft.searchText = action.text;
      break;
    case GET_TASKS:
      draft.loading = { ...draft.loading, tasks: true };
      draft.offset = 0;
      draft.taskList = [];
      break;
    case GET_TASKS_SUCCESS:
      draft.loading = { ...draft.loading, tasks: false };
      draft.taskList = action.taskList;
      draft.offset = 1;
      draft.searchText = '';
      draft.categories = draft.categories.map((item: any) => ({
        ...item,
        selected: false,
      }));
      draft.labels = draft.labels.map((item: any) => ({
        ...item,
        selected: false,
      }));
      break;
    case GET_MORE_TASKS:
      draft.refreshing = true;
      draft.offset = 0;
      // draft.taskList = [];
      break;
    case GET_MORE_TASKS_SUCCESS:
      draft.refreshing = false;
      draft.taskList = [
        ...new Map(
          draft.taskList
            .concat(action.taskList)
            .map((obj: any) => [obj.id, obj]),
        ).values(),
      ];
      draft.offset = draft.offset + 1;
      break;
    case GET_TASKS_ERROR:
      draft.error = { ...draft.error, tasks: action.error };
      draft.refreshing = false;
      break;
    case GET_MORE_TASKS_ERROR:
      draft.loading = { ...draft.loading, tasks: false };
      draft.error = { ...draft.error, tasks: action.error };
      break;
    //
    case GET_TASKS_LABELS:
      draft.loading = { ...draft.loading, labels: true };
      draft.labels = [];
      break;
    case GET_TASKS_LABELS_SUCCESS:
      draft.loading = { ...draft.loading, labels: false };
      draft.labels = action.labels;
      break;
    case GET_TASKS_LABELS_ERROR:
      draft.loading = { ...draft.loading, labels: false };
      draft.error = { ...draft.error, labels: action.error };
      break;
    //
    case GET_TASKS_CATEGORIES:
      draft.loading = { ...draft.loading, categories: true };
      draft.categories = [];
      break;
    case GET_TASKS_CATEGORIES_SUCCESS:
      draft.loading = { ...draft.loading, categories: false };
      draft.categories = action.categories;
      break;
    case GET_TASKS_CATEGORIES_ERROR:
      draft.loading = { ...draft.loading, categories: false };
      draft.error = { ...draft.error, categories: action.error };
      break;
    //
    case SET_FOCUSED_TAB:
      draft.focusedTasksTab = action.tab;
      break;
  }
}, initialState);

export default taskListReducer;
