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
} from 'containers/CurrentBooking/slice/selectors';
import {
  cancelAppointmentAction,
  createAppointmentAction,
  updateAppointmentAction,
} from 'containers/CurrentBooking/slice/actions';
import { format } from 'date-fns';
import { selectUser } from 'containers/AuthHelper/slice/selectors';
import { useNavigation } from '@react-navigation/native';
import { showAlertAction } from 'providers/AlertsProvider/actions';
import { translate } from 'i18n';

const BookingCancelActionsComponent: React.FC<
  IBookingCancelActionsComponentProps
> = ({}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = makeStyles();
  const loading = useSelector(selectLoading);

  const currency = useSelector(selectCurrency);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.priceText}>
        {`Total: ${currency?.prefix}${price}${currency?.suffix} (${duration.label})`}
      </Text> */}
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
            onPress={() => dispatch(cancelAppointmentAction())}>
            <FormattedMessage
              {...messages.cancelAppointment}
              style={styles.saveText}
            />
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
    paddingVertical: theme.space.s,
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

export interface IBookingCancelActionsComponentProps {}
export default BookingCancelActionsComponent;
