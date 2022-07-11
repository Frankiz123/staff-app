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

export function getTasksAction() {
  return { type: GET_TASKS };
}
export function getTasksSuccessAction(taskList: any) {
  return { type: GET_TASKS_SUCCESS, taskList };
}
export function getTasksErrorAction(error: any) {
  return { type: GET_TASKS_ERROR, error };
}
//
export function getMoreTasksAction() {
  return { type: GET_MORE_TASKS };
}
export function getMoreTasksSuccessAction(taskList: any) {
  return { type: GET_MORE_TASKS_SUCCESS, taskList };
}

export function getMoreTasksErrorAction(error: any) {
  return { type: GET_MORE_TASKS_ERROR, error };
}
//
export function getTasksLabelsAction() {
  return { type: GET_TASKS_LABELS };
}
export function getTasksLabelsSuccessAction(labels: any) {
  return { type: GET_TASKS_LABELS_SUCCESS, labels };
}
export function getTasksLabelsErrorAction(error: any) {
  return { type: GET_TASKS_LABELS_ERROR, error };
}
//
export function getTasksCategoriesAction() {
  return { type: GET_TASKS_CATEGORIES };
}
export function getTasksCategoriesSuccessAction(categories: any) {
  return { type: GET_TASKS_CATEGORIES_SUCCESS, categories };
}
export function getTasksCategoriesErrorAction(error: any) {
  return { type: GET_TASKS_CATEGORIES_ERROR, error };
}
//
export function changeSearchTextAction(text: string) {
  return { type: CHANGE_SEARCH_TEXT, text };
}

export function setFocusedTabAction(tab: {
  name: string;
  filters: {
    status: string;
    due_to?: string;
    due_from?: string;
    is_deleted?: number;
  };
}) {
  return { type: SET_FOCUSED_TAB, tab };
}
