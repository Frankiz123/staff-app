import produce from 'immer';
import { AnyAction } from 'redux';
import {
  GET_COURSES,
  GET_COURSES_ERROR,
  GET_COURSES_SUCCESS,
} from './constants';
import { CoursesListState } from './types';

export const initialState: CoursesListState = {
  error: false,
  loading: false,
  courses: [],
};

const coursesListReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_COURSES:
      draft.loading = true;
      break;
    case GET_COURSES_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
    case GET_COURSES_SUCCESS:
      draft.loading = false;
      draft.courses = action.courses;
      break;
  }
}, initialState);

export default coursesListReducer;
