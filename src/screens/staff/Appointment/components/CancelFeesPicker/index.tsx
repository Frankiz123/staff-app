import {
  getCancellationFeesAction,
  setSelectedCancellationFeeAction,
} from 'containers/CurrentBooking/slice/actions';
import {
  selectCancellationFees,
  selectSelectedCancellationFee,
} from 'containers/CurrentBooking/slice/selectors';
import { translate } from 'i18n';
import React, { useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import messages from '../../messages';
import useTheme from 'hooks/useTheme';

const CancelFeesPickerComponent: React.FC<ICancelFeesPickerComponentProps> = (
  props,
) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const cancellationFees = useSelector(selectCancellationFees);
  const selectedCancellationFee = useSelector(selectSelectedCancellationFee);

  useEffect(() => {
    cancellationFees.length <= 1 && dispatch(getCancellationFeesAction());
  }, []);

  return (
    <>
      <FlatList
        data={cancellationFees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: theme.space.s,
              flexDirection: 'row',
              flex: 1,
              borderBottomWidth: 0.5,
              borderColor: 'grey',
            }}
            onPress={() => {
              dispatch(setSelectedCancellationFeeAction(item));
            }}>
            <View
              style={{
                minWidth: 60,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'black' }}>
                {parseFloat(item.value).toFixed(0)}
              </Text>
              <Text style={{ color: 'black' }}>{item.type}</Text>
            </View>

            <View style={{ flex: 1, padding: theme.space.s }}>
              <Text style={{ color: 'grey' }}>
                {item.hours}{' '}
                {translate(messages.hours.scope, messages.hours.options)}
              </Text>

              <Text style={{ width: '95%' }}>{item.name}</Text>
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: 50,
              }}>
              {selectedCancellationFee.id == item.id && (
                <AntDesign
                  name="checkcircleo"
                  style={{ color: 'deepskyblue', fontSize: 33 }}
                />
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
};
export interface ICancelFeesPickerComponentProps {}
export default CancelFeesPickerComponent;
