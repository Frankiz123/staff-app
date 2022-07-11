import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import reducer from './reducer';
import saga from './saga';

const key = 'taskAndNotesList';

const useTaskAndNotesListSlice = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
};

export interface IuseTaskAndNotesListSliceProps {}
export default useTaskAndNotesListSlice;
