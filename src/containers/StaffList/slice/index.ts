import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import reducer from './reducer';
import saga from './saga';

const key = 'staffList';

const useStaffListSlice = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
};

export interface IuseStaffListSliceProps {}
export default useStaffListSlice;
