/**
 *
 */

import { translate } from 'i18n';
import moment from 'moment';

const scope = 'src/containers/TaskAndNotes';

/*** */

export const WebService = {
  GET_TASKS: 'get_staff_tasks',
  GET_TASKS_LABELS: 'get_staff_tasks_labels',
  GET_TASKS_CATEGORIES: 'get_staff_tasks_categories',
};

/*** */
export const GET_TASKS = `${scope}/GET_TASKS`;
export const GET_TASKS_SUCCESS = `${scope}/GET_TASKS_SUCCESS`;
export const GET_TASKS_ERROR = `${scope}/GET_TASKS_ERROR`;
/*** */
export const GET_MORE_TASKS = `${scope}/GET_MORE_TASKS`;
export const GET_MORE_TASKS_SUCCESS = `${scope}/GET_MORE_TASKS_SUCCESS`;
export const GET_MORE_TASKS_ERROR = `${scope}/GET_MORE_TASKS_ERROR`;
/*** */
export const GET_TASKS_LABELS = `${scope}/GET_TASKS_LABELS`;
export const GET_TASKS_LABELS_SUCCESS = `${scope}/GET_TASKS_LABELS_SUCCESS`;
export const GET_TASKS_LABELS_ERROR = `${scope}/GET_TASKS_LABELS_ERROR`;
/*** */
export const GET_TASKS_CATEGORIES = `${scope}/GET_TASKS_CATEGORIES`;
export const GET_TASKS_CATEGORIES_SUCCESS = `${scope}/GET_TASKS_CATEGORIES_SUCCESS`;
export const GET_TASKS_CATEGORIES_ERROR = `${scope}/GET_TASKS_CATEGORIES_ERROR`;
/*** */
export const SET_FOCUSED_TAB = `${scope}/SET_FOCUSED_TAB`;
/*** */
export const CHANGE_SEARCH_TEXT = `${scope}/CHANGE_SEARCH_TEXT`;
