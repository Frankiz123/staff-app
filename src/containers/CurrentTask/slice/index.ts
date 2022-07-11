import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import reducer from './reducer';
import saga from './saga';

const key = 'currentTask';

const useCurrentTaskSlice = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
};

export interface IuseCurrentTaskSliceProps {}
export default useCurrentTaskSlice;
