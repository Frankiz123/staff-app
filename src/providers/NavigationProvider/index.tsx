import React from 'react';
import { View } from 'react-native';
import { useInjectSaga } from 'redux-injectors';
import saga from './saga';

export type INavigationProviderProps = {};

const key = 'navigationProvider';

const NavigationProvider: React.FC<INavigationProviderProps> = ({
  children,
}) => {
  useInjectSaga({ key, saga });
  return <>{children}</>;
};

export { NavigationProvider };
