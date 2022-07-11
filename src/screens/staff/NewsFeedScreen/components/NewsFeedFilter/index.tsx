import React from 'react';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useTheme from 'hooks/useTheme';

const NewsFeedFilterComponent: React.FC<INewsFeedFilterComponentProps> = (
  props,
) => {
  const theme = useTheme();

  return (
    <>
      <TouchableOpacity style={{ paddingHorizontal: theme.space.m }}>
        <AntDesign name="filter" size={25} color={theme.colors.primary} />
      </TouchableOpacity>
    </>
  );
};
export interface INewsFeedFilterComponentProps {}
export default NewsFeedFilterComponent;
