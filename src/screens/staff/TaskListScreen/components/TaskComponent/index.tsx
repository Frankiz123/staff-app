import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
// import { Body, Left, Card, CardItem, Icon, Text } from 'native-base';
import moment from 'moment';

// import styles from './styles';
import { TouchableOpacity } from 'react-native';
import Chip from '../Chip';
import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'utils/makeStyleSheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
function Task({ task, labels, onPress, onComplete }: any) {
  const theme = useTheme();
  const styles = makeStyles();

  const {
    id,
    title,
    due_date: dueDate,
    due_time: dueTime,
    labels: taskLabels,
    client_name: clientName,
    status,
  } = task;

  let formattedDate;

  if (dueTime) {
    formattedDate = moment(dueDate + ' ' + dueTime).format(
      'DD MMM YYYY, HH:mm',
    );
  } else {
    formattedDate = moment(dueDate).format('DD MMM YYYY');
  }

  if (formattedDate === 'Invalid date') {
    formattedDate = 'No date';
  }

  const formattedLabels = useMemo(
    () =>
      taskLabels
        ?.split(',')
        .map((id: any) => {
          const label = labels?.find((label: any) => label.id === id);
          return label ? (
            <Chip
              key={label.id}
              value={label.name}
              isSelected
              showIcon={false}
              containerStyle={{}}
              color={label.color}
              textStyle={{ fontSize: 14 }}
              onPress={() => {}}
              alwaysShowIcon={label.selected}
              iconPosition="left"
              inactiveColor="grey"
              shouldHighlightValue={true}
            />
          ) : undefined;
        })
        .filter((label: any) => label),
    [taskLabels, labels],
  );

  const handlePress = () => onPress(task);

  return (
    <View style={styles.dealCard} key={id}>
      <TouchableOpacity
        onPress={handlePress}
        style={[
          styles.cardItem,
          // formattedLabels?.length && { paddingBottom: 0 },
        ]}>
        <View style={styles.taskLeft}>
          <TouchableOpacity
            style={styles.completeButton}
            onPress={() => onComplete(task)}>
            <AntDesign
              name="checkcircle"
              style={[
                styles.completeButtonIcon,
                {
                  color:
                    status === 'complete'
                      ? theme.colors.text?.green
                      : theme.colors.inactiveTintColor,
                },
              ]}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.taskBody}>
          {title.includes('%') ? (
            <Text style={{ fontSize: 15 }}>
              <Text style={{ color: theme.colors.primary }}>
                {title.split('%')[0]} -{' '}
              </Text>
              {title.split('%')[1]}
            </Text>
          ) : (
            <Text style={{ fontSize: 15 }}>{title}</Text>
          )}

          <Text style={{ color: 'grey', fontSize: theme.fontSizes.medium }}>
            {formattedDate}
          </Text>

          {!!clientName && <Text style={{ color: 'black' }}>{clientName}</Text>}
        </View>
      </TouchableOpacity>

      {!!formattedLabels?.length && (
        <View style={[styles.cardItem, styles.chipContainer]}>
          {formattedLabels}
        </View>
      )}
    </View>
  );
}

const makeStyles = makeStyleSheet((theme) => ({
  contentContainerStyle: {
    backgroundColor: theme.colors.background,
  },
  columnHeader: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  dealCard: {
    padding: theme.space.s,
    marginHorizontal: theme.space.s,
    marginVertical: theme.space.xs,
    backgroundColor: 'white',
    borderRadius: theme.space.xs,
    ...theme.defaultShadow,
  },
  cardItem: {
    borderRadius: 10,
    flexDirection: 'row',
  },
  completeButton: {
    marginLeft: 0,
  },
  completeButtonIcon: {
    marginLeft: 0,
    color: theme.colors.inactiveTintColor,
    fontSize: 35,
  },
  bigCenteredBoldText: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  noDataIcon: {
    marginTop: 50,
    marginBottom: 20,
    fontSize: 50,
    alignSelf: 'center',
  },
  noDealsText: {
    textAlign: 'center',
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  taskLeft: {
    justifyContent: 'center',
  },
  taskBody: {
    marginLeft: 10,
    flex: 1,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 5,
    paddingRight: 5,
  },
  chip: {
    paddingVertical: 0,
    borderRadius: 5,
  },
}));

export default Task;
