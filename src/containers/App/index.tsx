import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';

import AuthHelperContainer from 'containers/AuthHelper';
import useTheme from 'hooks/useTheme';
import InitialNavigator from 'navigators/InitialNavigator';
import CurrencyHelperContainer from 'containers/CurrencyHelper';
import useCurrentBookingSlice from 'containers/CurrentBooking/slice';
import useCurrentTaskSlice from 'containers/CurrentTask/slice';
import useStaffListSlice from 'containers/StaffList/slice';
import { GetMessagingTokenAction } from 'containers/AuthHelper/slice/actions';

const App: React.FC<IAppProps> = (props) => {
  const theme = useTheme();
  useCurrentBookingSlice();
  useCurrentTaskSlice();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetMessagingTokenAction())
  }, [])

  return (
    <>
      <AuthHelperContainer />
      <CurrencyHelperContainer />
      <InitialNavigator />
    </>
  );
};
export interface IAppProps { }
export { App };
