import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import reducer from './reducer';
import saga from './saga';

const key = 'currentBooking';

const useCurrentBookingSlice = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
};

export interface IuseCurrentBookingSliceProps {}
export default useCurrentBookingSlice;
