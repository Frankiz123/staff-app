import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import reducer from './reducer';
import saga from './saga';

const key = 'currencyHelper';

const useCurrencyHelperSlice = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
};

export interface IuseCurrencyHelperSliceProps {}
export default useCurrencyHelperSlice;
