import React from 'react';

import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { format } from 'date-fns';

import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'theme/makeStyleSheet';

const TaskCard: React.FC<ITaskCardProps> = ({
  onPress,
  onPressOut,
  time,
  task,
  date,
}) => {
  const theme = useTheme();
  const styles = makeStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressOut={onPressOut}
      style={styles.TaskCard}>
      <View style={styles.iconHolder}>
        <AntDesign name="checkcircleo" style={styles.icon} size={35} />
      </View>
      <View style={styles.textHolder}>
        <View>
          {/* <Text style={styles.taskText}>{task}</Text> */}
          {task.includes('%') ? (
            <Text style={{ fontSize: 15, color: 'black' }}>
              <Text style={{ color: theme.colors.primary }}>
                {task.split('%')[0]} -{' '}
              </Text>
              {task.split('%')[1]}
            </Text>
          ) : (
            <Text style={{ fontSize: 15, color: 'black' }}>{task}</Text>
          )}
        </View>
        <View>
          <Text style={styles.date}>
            {date} {time}
          </Text>
        </View>
      </View>
      <View style={styles.arrow}>
        <MaterialCommunityIcons
          name="chevron-right"
          size={25}
          style={{ color: 'black' }}
        />
      </View>
    </TouchableOpacity>
  );
};

export interface ITaskCardProps {
  onPress?: any;
  onPressOut?: any;
  time?: Date;
  task: String;
  date: Date;
}

const makeStyles = makeStyleSheet((theme) => ({
  TaskCard: {
    backgroundColor: 'white',
    borderColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    padding: theme.space.xxxs,
    alignItems: 'center',
  },
  textHolder: {
    flexDirection: 'column',
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
    paddingHorizontal: theme.space.xs,
    paddingVertical: theme.space.s,
  },
  taskText: {
    color: 'black',
  },
  date: {
    color: 'grey',
    paddingVertical: theme.space.xxxs,
  },
  iconHolder: {
    paddingHorizontal: theme.space.s,
    justifyContent: 'center',
  },
  icon: {
    color: 'grey',
  },
  arrow: {
    color: 'black',
    justifyContent: 'center',
    paddingHorizontal: theme.space.xxs,
  },
  viewButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    paddingHorizontal: theme.space.xs,
    paddingVertical: theme.space.m,
  },
}));

export default TaskCard;
