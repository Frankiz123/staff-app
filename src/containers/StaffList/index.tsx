import React from 'react';
import useStaffListSlice from './slice';

const StaffListContainer: React.FC<IStaffListContainerProps> = (props) => {
  useStaffListSlice();
  return <></>;
};
export interface IStaffListContainerProps {}
export default StaffListContainer;
