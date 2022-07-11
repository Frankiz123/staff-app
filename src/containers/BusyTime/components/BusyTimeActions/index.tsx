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
import { format } from 'date-fns';
import { selectUser } from 'containers/AuthHelper/slice/selectors';
import { useNavigation } from '@react-navigation/native';
import { showAlertAction } from 'providers/AlertsProvider/actions';
import { translate } from 'i18n';
import { createAppointmentAction } from 'containers/BusyTime/slice/actions';

import {
  selectStaff,
  selectDate,
  selectNotes,
  selectDuration,
  selectCurrentBusyTIme,
  selectLoading,
} from '../../slice/selectors';

const BusyTimeActions: React.FC<IBusyTimeActionsProps> = ({ actionType }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = makeStyles();

  const date = useSelector(selectDate);
  const notes = useSelector(selectNotes);
  const duration = useSelector(selectDuration);
  const busyTime = useSelector(selectCurrentBusyTIme);
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
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
            onPress={() => {
              if (!busyTime.staff) {
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
              dispatch(
                createAppointmentAction({
                  client: '',
                  date: format(date, 'yyyy-MM-dd'),
                  time: format(date, 'HH:mm'),
                  duration: duration.value,
                  staff: busyTime.staff?.id,
                  status: 'booked',
                  type: 'busy_time',
                  salon_id: user.reference_data.salon,
                  notes: notes,
                }),
              );
            }}>
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
    paddingTop: theme.space.m,
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
export interface IBusyTimeActionsProps {
  actionType: ActionType;
}
export default BusyTimeActions;
