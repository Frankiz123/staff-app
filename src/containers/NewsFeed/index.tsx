import React from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import useNewsFeedSlice from './slice';

const NewsFeedContainer: React.FC<INewsFeedContainerProps> = (props) => {
  useNewsFeedSlice();
  return <></>;
};
export interface INewsFeedContainerProps {}
export default NewsFeedContainer;
