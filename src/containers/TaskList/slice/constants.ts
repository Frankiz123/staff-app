/**
 *
 */

const scope = 'src/containers/TaskList';

/*** */

export const WebService = {
  GET_TODAY_TASKS: 'get_staff_tasks_today',
  GET_TASKS_COUNTER: 'get_staff_tasks_counter',
  GET_CLIENT: 'get_client',
  GET_STAFF: 'get_staff_id',
  GET_STAFF_TASKS_CATEGORIES: 'get_staff_tasks_categories',
};

/*** */

export const GET_TASKS = `${scope}/GET_TASKS`;
export const GET_TASKS_SUCCESS = `${scope}/GET_TASKS_SUCCESS`;
export const GET_TASKS_ERROR = `${scope}/GET_TASKS_ERROR`;
export const GET_TASKS_COUNTER = `${scope}/GET_TASKS_COUNTER`;
export const GET_TASKS_COUNTER_SUCCESS = `${scope}/GET_TASKS_COUNTER_SUCCESS`;
export const GET_CLIENT = `${scope}/GET_CLIENT`;
export const GET_CLIENT_SUCCESS = `${scope}/GET_CLIENT_SUCCESS`;
export const GET_STAFF = `${scope}/GET_STAFF`;
export const GET_STAFF_SUCCESS = `${scope}/GET_STAFF_SUCCESS`;
export const GET_STAFF_TASKS_CATEGORIES = `${scope}/GET_STAFF_TASKS_CATEGORIES`;
export const GET_STAFF_TASKS_CATEGORIES_SUCCESS = `${scope}/GET_STAFF_TASKS_CATEGORIES_SUCCESS`;
