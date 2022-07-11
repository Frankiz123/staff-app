/**
 *
 */
import {
  SET_DATE,
  SET_SELECTED_CLIENT,
  SET_SELECTED_STAFF,
  CREATE_TASK,
  CREATE_TASK_ERROR,
  CREATE_TASK_SUCCESS,
  SET_SELECTED_TASK_TYPE,
  SET_LOG_DETAILS,
  SET_LOG_TITLE,
  SET_REMINDER,
  SET_DUE_DATE,
  SET_SELECTED_LABELS,
  SET_SELECTED_STAGE,
  INITIATE_TASK,
} from './constants';
import { ITaskType } from './types';

/*** */
export function setLogTitletion(value: string) {
  return { type: SET_LOG_TITLE, value };
}

export function setLogDetailsAction(value: string) {
  return { type: SET_LOG_DETAILS, value };
}
/*** */
export function setSelectedclientAction(client: any) {
  return { type: SET_SELECTED_CLIENT, client };
}

/*** */
export function setDateAction(date: Date) {
  return { type: SET_DATE, date };
}
/*** */
export function setReminderDateAction(date: Date) {
  return { type: SET_REMINDER, date };
}
/*** */
export function setDueDateAction(date: Date) {
  return { type: SET_DUE_DATE, date };
}
/*** */
export function setSelectedStaffAction(staff: any) {
  return { type: SET_SELECTED_STAFF, staff };
}

/*** */
export function createTASKAction() {
  return { type: CREATE_TASK };
}
export function createTASKSuccessAction() {
  return { type: CREATE_TASK_SUCCESS };
}
export function createTASKErrorAction(error: any) {
  return { type: CREATE_TASK_ERROR, error };
}
export function setSelectedTasktypeAction(tasktype: ITaskType) {
  return { type: SET_SELECTED_TASK_TYPE, tasktype };
}
