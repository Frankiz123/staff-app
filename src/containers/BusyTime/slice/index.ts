import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import reducer from './reducer';
import saga from './saga';

const key = 'busyTime';

export const useBusyTimeSlice = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
};
