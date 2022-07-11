import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import reducer from './reducer';
import saga from './saga';

const key = 'bookingDetails';

const useBookingDetailsSlice = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
};

export interface IuseBookingDetailsSliceProps {}
export default useBookingDetailsSlice;
