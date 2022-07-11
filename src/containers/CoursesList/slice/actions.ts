/**
 *
 */
import {
  GET_COURSES,
  GET_COURSES_ERROR,
  GET_COURSES_SUCCESS,
} from './constants';

/*** */
export function getCoursesAction({
  salon_id,
  client_id,
}: {
  salon_id: string;
  client_id: string;
}) {
  return { type: GET_COURSES, payload: { salon_id, client_id } };
}

export function getCoursesSuccessAction(courses: Array<any>) {
  return { type: GET_COURSES_SUCCESS, courses };
}

export function getCoursesErrorAction(error: any) {
  return { type: GET_COURSES_ERROR, error };
}
