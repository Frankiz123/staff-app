import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import reducer from './reducer';
import saga from './saga';

const key = 'newClient';

const useNewClientSlice = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
};

export interface IuseAuthHelperSliceProps {}
export default useNewClientSlice;
