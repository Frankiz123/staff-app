import React, { useEffect } from 'react';
import { View, ActivityIndicator, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { getNewsFeedAction } from 'containers/NewsFeed/slice/actions';
import {
  selectNewsFeedByFilter,
  selectLoadingByFilter,
  selectError,
  selectErrorByFilter,
} from 'containers/NewsFeed/slice/selectors';
import useNewsFeedSlice from 'containers/NewsFeed/slice';
import BaseNewsFeedComponent from 'screens/staff/NewsFeedScreen/components/NewsFeedComponent';
import useTheme from 'hooks/useTheme';
import { FILTERS } from '../../constants';

const NewsFeedTab: React.FC<INewsFeedTabProps> = ({ route: { name } }) => {
  useNewsFeedSlice();

  const dispatch = useDispatch();
  const theme = useTheme();

  const screenValue =
    FILTERS.find((filter) => filter.name == name)?.value || 'all';
  const newFeed = useSelector(selectNewsFeedByFilter(screenValue));
  const loading = useSelector(selectLoadingByFilter(screenValue));
  const error = useSelector(selectErrorByFilter(screenValue));

  useEffect(() => {
    getNewsFeed();
  }, []);

  const getNewsFeed = () => {
    const today = new Date();
    dispatch(
      getNewsFeedAction({
        page: newFeed.page,
        limit: 10,
        start_date: format(today.setMonth(today.getMonth() - 1), 'yyyy-MM-dd'),
        end_date: format(new Date(), 'yyyy-MM-dd'),
        filters:
          screenValue == 'all'
            ? FILTERS.reduce((acc, filter) => {
                return filter.value == 'all' ? acc : acc + ',' + filter.value;
              }, '')
            : screenValue,
        newFeedKey: screenValue,
      }),
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {newFeed.data.length == 0 && !loading ? (
        <Text style={{ color: 'black' }}>No Data</Text>
      ) : (
        <FlatList
          initialNumToRender={10}
          showsVerticalScrollIndicator={false}
          onEndReached={() => {
            !error && getNewsFeed();
          }}
          onEndReachedThreshold={5}
          ListFooterComponent={() =>
            loading && !error ? (
              <ActivityIndicator size={'large'} color={theme.colors.primary} />
            ) : (
              <></>
            )
          }
          keyExtractor={(item, index) =>
            `${item.type}-${screenValue}-${item.data?.id}-${index}`
          }
          data={newFeed.data}
          renderItem={({ item, index }) => (
            <>
              {/* <Text style={{ color: 'black' }}>{`${item.page} // ${item.type} // ${item.data?.id}`}</Text> */}
              <BaseNewsFeedComponent
                NewsFeedType={item.type}
                item={item.data}
              />
            </>
          )}
        />
      )}
    </View>
  );
};
export interface INewsFeedTabProps {
  route: { name: string };
}

export default NewsFeedTab;
