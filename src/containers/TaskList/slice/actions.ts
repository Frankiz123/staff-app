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

export function getTasksAction(payload: any) {
  return { type: GET_TASKS, payload };
}
export function getTasksSuccessAction(taskList: any) {
  return { type: GET_TASKS_SUCCESS, taskList };
}
export function getTasksErrorAction(error: any) {
  return { type: GET_TASKS_ERROR, error };
}
export function getTasksCounterAction(payload: any) {
  return { type: GET_TASKS_COUNTER, payload };
}
export function getTasksCounterSuccessAction(counter: any) {
  return { type: GET_TASKS_COUNTER_SUCCESS, counter };
}
export function getClientAction(payload: any) {
  return { type: GET_CLIENT, payload };
}
export function getClientSuccessAction(client: any) {
  return { type: GET_CLIENT_SUCCESS, client };
}
export function getStaffAction(payload: any) {
  return { type: GET_STAFF, payload };
}
export function getStaffSuccessAction(staff: any) {
  return { type: GET_STAFF_SUCCESS, staff };
}
export function getStaffTasksCategories(payload: any) {
  return { type: GET_STAFF_TASKS_CATEGORIES, payload };
}
export function getStaffTasksCategoriesSuccess(categories: any) {
  return { type: GET_STAFF_TASKS_CATEGORIES_SUCCESS, categories };
}
