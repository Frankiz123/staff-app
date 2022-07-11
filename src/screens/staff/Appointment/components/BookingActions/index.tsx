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
  selectServices,
  selectCourses,
  selectBookingType,
  selectDuration,
  selectTotal,
  selectClient,
  selectDate,
  selectStaff,
  selectNotes,
  selectId,
  selectLoading,
  selectInsideBusyIntervals,
  selectStatus,
} from 'containers/CurrentBooking/slice/selectors';
import {
  createAppointmentAction,
  setAlreadyBookedIntervalModalVisibleAction,
  updateAppointmentAction,
} from 'containers/CurrentBooking/slice/actions';
import { format } from 'date-fns';
import { selectUser } from 'containers/AuthHelper/slice/selectors';
import { useNavigation } from '@react-navigation/native';
import { showAlertAction } from 'providers/AlertsProvider/actions';
import { translate } from 'i18n';

const BookingActionsComponent: React.FC<IBookingActionsComponentProps> = ({
  actionType,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = makeStyles();

  const user = useSelector(selectUser);
  const appType = useSelector(selectBookingType);
  const status = useSelector(selectStatus);
  const servicesList = useSelector(selectServices);
  const courses = useSelector(selectCourses);
  const duration = useSelector(selectDuration);
  const price = useSelector(selectTotal);
  const client = useSelector(selectClient);
  const date = useSelector(selectDate);
  const staff = useSelector(selectStaff);
  const notes = useSelector(selectNotes);
  const bookingId = useSelector(selectId);
  const loading = useSelector(selectLoading);

  const currency = useSelector(selectCurrency);
  const insideBusyIntervals = useSelector(selectInsideBusyIntervals);

  const buildItems = () => {
    if (appType === 'service') {
      let csv1: Array<any> = [];
      csv1 = [];
      servicesList.map((service) => {
        csv1.push({ item_id: service?.id, price: service?.price });
      });
      return csv1;
    } else if (appType === 'course') {
      let csv = '';
      courses.map((course) => {
        csv += `,${course.client_course_sid}`;
      });
      csv = csv.substring(1);

      return csv;
    }

    return '';
  };
  const createOrUpdateBooking = () => {
    if (
      !client ||
      !staff ||
      (appType == 'service' && servicesList.length == 0) ||
      (appType == 'course' && courses.length == 0)
    ) {
      dispatch(
        showAlertAction({
          title: translate(
            messages.missingInput.scope,
            messages.missingInput.options,
          ),
          duration: 3000,
          gravity: 'top',
          type: 'warning',
        }),
      );
      return;
    }
    if (insideBusyIntervals.isBusyInterval) {
      return dispatch(setAlreadyBookedIntervalModalVisibleAction(true));
    }
    const bookingPayload: any = {
      client: client.id,
      date: format(date, 'yyyy-MM-dd'),
      time: format(date, 'HH:mm'),
      duration: duration.value,
      items: buildItems(),
      staff: staff.id,
      status: status,
      type: appType,
      salon_id: user.reference_data.salon,
      notes: notes,
    };
    if (actionType == 'update') {
      bookingPayload.appointment_id = bookingId;
    }
    switch (actionType) {
      case 'add':
        dispatch(createAppointmentAction(bookingPayload));
        break;
      case 'update':
        dispatch(updateAppointmentAction(bookingPayload));
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.priceText}>
        {`Total: ${currency?.prefix}${price}${currency?.suffix} (${duration.label})`}
      </Text>
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
            onPress={() => createOrUpdateBooking()}>
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
    color: 'black',
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
export interface IBookingActionsComponentProps {
  actionType: ActionType;
}
export default BookingActionsComponent;
