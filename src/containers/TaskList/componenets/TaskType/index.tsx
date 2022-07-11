import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextPropTypes } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import useTaskListSlice from 'containers/TaskList/slice';
import {
  selectClient,
  selectStaff,
  selectCategories,
} from 'containers/TaskList/slice/selectors';
import {
  getClientAction,
  getStaffAction,
  getStaffTasksCategories,
} from 'containers/TaskList/slice/actions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const TaskType = ({ task }) => {
  useTaskListSlice();

  const theme = useTheme();
  const styles = makeStyles();
  const selectedClient = useSelector(selectClient);
  const selectedStaff = useSelector(selectStaff);
  const selectedCategories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const [stage, setStage] = useState('');

  const {
    id,
    title = '',
    notes,
    due_date: dueDate,
    due_time: dueTime,
    client_id: clientId,
    staff_id: staffId,
    type = '',
    labels: taskLabels,
    category_id,
  } = task;

  useEffect(() => {
    dispatch(getClientAction({ id: clientId }));
    dispatch(getStaffAction({ staff_id: staffId }));
    dispatch(getStaffTasksCategories({}));
  }, []);

  const filterCategory = () => {
    const category = selectedCategories.data.filter(
      (item) => item.id === category_id,
    );
    return category.name;
  };

  useEffect(() => {
    setStage(
      selectedCategories?.data?.find((stage) => stage.id === category_id),
    );
  }, []);

  return (
    <>
      <View style={styles.container}>
        {!!notes ? (
          <View style={styles.notes}>
            <Text style={styles.note}>{notes}</Text>
          </View>
        ) : (
          <></>
        )}
        {type === 'call' ? (
          <View style={{ backgroundColor: 'white' }}>
            <View>
              <Text style={{ color: 'black' }}>CALL</Text>
            </View>
          </View>
        ) : (
          <></>
        )}
        {type === 'email' ? (
          <View style={styles.email}>
            <View>
              {selectedClient?.data ? (
                <Text
                  style={{
                    color: 'black',
                  }}>{`Email ${selectedClient?.data.name} ${selectedClient?.data.surname}`}</Text>
              ) : (
                <Text style={{ color: 'black' }}>Client not found</Text>
              )}
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={styles.actionButton}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={20}
                  style={{ color: 'black' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <></>
        )}

        {!!selectedStaff.data || !!selectedClient.data ? (
          <View style={styles.tagsContainer}>
            {!!selectedStaff.data ? (
              <TouchableOpacity style={styles.nameTag}>
                <Feather name="users" style={styles.name} />
                <Text style={styles.name}>{selectedStaff?.data.full_name}</Text>
              </TouchableOpacity>
            ) : (
              <></>
            )}
            {!!selectedClient && selectedClient?.data?.name !== undefined ? (
              <TouchableOpacity style={styles.nameTag}>
                <FontAwesome name="user-o" style={styles.name} />
                <Text
                  style={
                    styles.name
                  }>{`${selectedClient?.data?.name} ${selectedClient?.data?.surname}`}</Text>
              </TouchableOpacity>
            ) : (
              <></>
            )}
            {!!category_id ? (
              <TouchableOpacity style={styles.nameTag}>
                <MaterialCommunityIcons
                  name="label-variant-outline"
                  style={styles.name}
                />
                <Text style={styles.name}>{stage?.name}</Text>
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
        ) : (
          <></>
        )}
      </View>
    </>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  container: {
    backgroundColor: 'white',
  },
  note: {
    fontSize: 13,
    color: 'black',
  },
  notes: {
    backgroundColor: 'white',
    paddingVertical: theme.space.m,
    paddingLeft: theme.space.m,
    borderBottomWidth: 0.2,
    marginTop: theme.space.s,
    borderBottomColor: theme.colors.text?.grey,
  },
  nameTag: {
    borderColor: '#0275ce',
    borderWidth: 2,
    paddingHorizontal: theme.space.xs,
    paddingVertical: theme.space.xs,
    borderRadius: theme.space.s,
    textAlign: 'center',
    flexDirection: 'row',
    marginVertical: theme.space.xxs,
  },
  name: {
    color: '#0275ce',
    paddingHorizontal: theme.space.xxs,
    paddingVertical: theme.space.xxxs,
    fontSize: theme.fontSizes.small,
  },
  actionButton: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
    padding: theme.space.xs,
    alignContent: 'center',
  },
  email: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: theme.space.m,
    paddingLeft: theme.space.m,
    borderBottomWidth: 0.2,
    borderBottomColor: theme.colors.text?.grey,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: theme.space.m,
    paddingVertical: theme.space.m,
    borderTopWidth: 0.2,
    borderTopColor: theme.colors.text?.grey,
  },
}));

export default TaskType;
