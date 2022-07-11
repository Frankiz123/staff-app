import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import reducer from './reducer';
import saga from './saga';

const key = 'appointmentsList';

const useAppointmentsListSlice = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
};

export interface IuseAppointmentsListSliceProps { }
export default useAppointmentsListSlice;
