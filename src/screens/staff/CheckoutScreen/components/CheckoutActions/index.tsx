import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import messages from '../../messages';
import { FormattedMessage } from 'components/FormattedMessage';
import { selectTotal } from 'containers/CurrentBooking/slice/selectors';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'navigators/constants';

const CheckoutActionsComponent: React.FC<
  ICheckoutActionsComponentProps
> = ({}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = makeStyles();
  const price = useSelector(selectTotal);

  const currency = useSelector(selectCurrency);

  return (
    <View style={styles.container}>
      <Text style={styles.priceText}>
        {`Total: ${currency?.prefix}${price}${currency?.suffix}`}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            navigation.navigate(SCREENS.PAYMENT as never);
          }}>
          <FormattedMessage {...messages.pay} style={styles.saveText} />
        </TouchableOpacity>
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
  saveText: { textAlign: 'center', color: 'white' },
}));

export type ActionType = 'add' | 'update';
export interface ICheckoutActionsComponentProps {}
export default CheckoutActionsComponent;
