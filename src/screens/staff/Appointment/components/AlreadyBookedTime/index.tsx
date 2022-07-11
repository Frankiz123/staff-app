import { FormattedMessage } from 'components/FormattedMessage';
import {
  setAlreadyBookedIntervalModalVisibleAction,
  setDateAction,
} from 'containers/CurrentBooking/slice/actions';
import {
  selectInsideShift,
  selectInsideBusyIntervals,
  selectDate,
  selectAlreadyBooked,
} from 'containers/CurrentBooking/slice/selectors';
import useTheme from 'hooks/useTheme';
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import JSONTree from 'react-native-json-tree';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import messages from '../../messages';

const AlreadyBookedTimeComponent: React.FC<IAlreadyBookedTimeComponentProps> = (
  props,
) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const styles = makeStyles();

  const date = useSelector(selectDate);
  const insideShift = useSelector(selectInsideShift);
  const insideBusyIntervals = useSelector(selectInsideBusyIntervals);

  // const [modalVisible, setModalVisible] = useState<boolean>(false);
  const modalVisible = useSelector(selectAlreadyBooked);
  const setModalVisible = (visible: boolean) => {
    dispatch(setAlreadyBookedIntervalModalVisibleAction(visible));
  };

  return (
    <>
      <Modal
        isVisible={modalVisible}
        onBackButtonPress={() => {
          setModalVisible(false);
        }}
        onBackdropPress={() => {
          setModalVisible(false);
        }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: theme.space.s,
            // paddingBottom: theme.insets.bottom,

            borderRadius: theme.space.s,
          }}>
          <View style={{ padding: theme.space.s }}>
            <FormattedMessage
              options={messages.timeAlreadyBooked.options}
              scope={messages.timeAlreadyBooked.scope}
              style={{ marginBottom: theme.space.s, fontWeight: 'bold' }}
            />
            <Text style={{ color: 'black' }}>
              <FormattedMessage
                options={messages.nextAvailabeleTime.options}
                scope={messages.nextAvailabeleTime.scope}
                style={{ marginBottom: theme.space.s }}
              />{' '}
              {insideBusyIntervals.nextFreeTime.format('HH:mm')}.
            </Text>

            <FormattedMessage
              options={messages.likeToSet.options}
              scope={messages.likeToSet.scope}
              style={{ marginVertical: theme.space.s }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: theme.space.s,
              }}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}>
                <FormattedMessage {...messages.no} style={styles.cancelText} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => {
                  setModalVisible(false);
                  dispatch(
                    setDateAction(insideBusyIntervals.nextFreeTime.toDate()),
                  );
                }}>
                <FormattedMessage {...messages.yes} style={styles.saveText} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
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
export interface IAlreadyBookedTimeComponentProps {}
export default AlreadyBookedTimeComponent;
