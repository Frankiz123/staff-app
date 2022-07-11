import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useAuthHelperSlice from './slice';
import { rehydrateTokenAction } from './slice/actions';

const AuthHelperContainer: React.FC<IAuthHelperContainerProps> = (props) => {
  useAuthHelperSlice();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rehydrateTokenAction());
  }, []);
  return <></>;
};
export interface IAuthHelperContainerProps {}
export default AuthHelperContainer;
