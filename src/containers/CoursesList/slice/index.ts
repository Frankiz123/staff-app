import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import reducer from './reducer';
import saga from './saga';

const key = 'coursesList';

const useCoursesListSlice = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
};

export interface IuseCoursesListSliceProps {}
export default useCoursesListSlice;
