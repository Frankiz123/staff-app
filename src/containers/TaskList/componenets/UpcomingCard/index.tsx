import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import FontAwsome from 'react-native-vector-icons/FontAwesome';

import useTaskListSlice from 'containers/TaskList/slice';
import { selectCounter } from 'containers/TaskList/slice/selectors';
import { getTasksCounterAction } from 'containers/TaskList/slice/actions';

import { FormattedMessage } from 'components/FormattedMessage';
import messages from 'containers/TaskList/messages';

import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'theme/makeStyleSheet';

const UpcomingCard = () => {
  useTaskListSlice();
  const theme = useTheme();
  const styles = makeStyles();

  const Counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksCounterAction({}));
  }, []);

  return (
    <View style={styles.UpcomingCard}>
      <View style={styles.icon}>
        <FontAwsome name="tasks" style={styles.text} size={20} />
      </View>
      <View>
        <View>
          <Text style={styles.text}>
            <FormattedMessage style={{}} {...messages.upcomingTasks} />
          </Text>
        </View>
        <View>
          <Text style={styles.textHandler}>
            {Counter?.data?.NoOfDueToday || 0}{' '}
            <FormattedMessage
              style={styles.textHandler}
              {...messages.dueToday}
            />
            , {Counter?.data?.NofOverdueTasks || 0}{' '}
            <FormattedMessage
              style={styles.textHandler}
              {...messages.overdue}
            />
          </Text>
        </View>
      </View>
    </View>
  );
};
const makeStyles = makeStyleSheet((theme) => ({
  UpcomingCard: {
    backgroundColor: 'white',
    borderColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: theme.space.xxs,
    alignItems: 'center',
    // marginBottom: theme.space.l,
    borderBottomColor: 'grey',
    borderWidth: 0.2,
    borderTopWidth: 0.2,
  },
  text: {
    color: 'black',
  },
  description: {
    color: 'grey',
    paddingVertical: theme.space.xxxs,
  },
  icon: {
    color: 'grey',
    padding: theme.space.l,
  },
  textHandler: {
    color: 'grey',
  },
}));

export default UpcomingCard;
