import React, { useEffect } from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import useCurrentClientSlice from './slice';
import { getClientAction } from './slice/actions';

const CurrentClientContainer: React.FC<ICurrentClientContainerProps> = (
  props,
) => {
  useCurrentClientSlice();
  return <></>;
};
export interface ICurrentClientContainerProps {}
export default CurrentClientContainer;
