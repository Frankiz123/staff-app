import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import messages from '../../messages';
import { FormattedMessage } from 'components/FormattedMessage';
import {
  selectCurrentTask,
  selectLoading,
} from 'containers/CurrentTask/slice/selectors';
import {
  createAppointmentAction,
  updateAppointmentAction,
} from 'containers/CurrentBooking/slice/actions';
import { format } from 'date-fns';
import { selectUser } from 'containers/AuthHelper/slice/selectors';
import { useNavigation } from '@react-navigation/native';
import { showAlertAction } from 'providers/AlertsProvider/actions';
import { translate } from 'i18n';
import { createTASKAction } from 'containers/CurrentTask/slice/actions';

const TaskActionsComponent: React.FC<ITaskActionsComponentProps> = ({
  actionType,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = makeStyles();

  const loading = useSelector(selectLoading);
  const task = useSelector(selectCurrentTask);

  const createTask = () => {
    if (!task.title || task.title == '') {
      return dispatch(
        showAlertAction({
          title: translate(
            messages.plzAddTitle.scope,
            messages.plzAddTitle.options,
          ),
          duration: 3000,
          gravity: 'top',
          type: 'warning',
        }),
      );
    }
    if (!task.client) {
      return dispatch(
        showAlertAction({
          title: translate(
            messages.plzAddClient.scope,
            messages.plzAddClient.options,
          ),
          duration: 3000,
          gravity: 'top',
          type: 'warning',
        }),
      );
    }
    if (!task.staff) {
      return dispatch(
        showAlertAction({
          title: translate(
            messages.plzAddStaff.scope,
            messages.plzAddStaff.options,
          ),
          duration: 3000,
          gravity: 'top',
          type: 'warning',
        }),
      );
    }
    dispatch(createTASKAction());
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}>
          <FormattedMessage {...messages.cancel} style={styles.cancelText} />
        </TouchableOpacity>
        {loading ? (
          <View style={styles.saveButton}>
            <ActivityIndicator color="white" />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => createTask()}>
            <FormattedMessage {...messages.save} style={styles.saveText} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    bottom: 0,
    paddingTop: theme.space.s,
    paddingBottom: theme.insets.bottom + theme.space.s,
    width: theme.dimensions.width,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  priceText: {
    fontSize: 18,
    padding: theme.space.s,
  },
  saveButton: {
    flex: 1,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
    borderWidth: 1,
    marginHorizontal: theme.space.s,
    borderRadius: theme.space.xxs,
    padding: theme.space.s,
  },
  cancelButton: {
    flex: 1,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    marginHorizontal: theme.space.s,
    borderRadius: theme.space.xxs,
    padding: theme.space.s,
  },
  cancelText: {
    color: theme.colors.primary,
    textAlign: 'center',
  },
  saveText: { textAlign: 'center', color: 'white' },
}));

export type ActionType = 'add' | 'update';
export interface ITaskActionsComponentProps {
  actionType: ActionType;
}
export default TaskActionsComponent;
