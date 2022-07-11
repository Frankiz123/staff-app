import { FormattedMessage } from 'components/FormattedMessage';
import { format } from 'date-fns';
import React from 'react';
import { StyleProp } from 'react-native';
import { Text, View } from 'react-native';
import messages from '../../messages';

import { makeStyleSheet } from 'theme/makeStyleSheet';
import { useSelector } from 'react-redux';
import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';

const BookingDetailsComponent: React.FC<IBookingDetailsComponentProps> = ({
  title,
  time,
  duration,
  staffNickName,
  price,
}) => {
  const currency = useSelector(selectCurrency);
  const styles = makeStyles();
  return (
    <View style={[styles.container]}>
      <FormattedMessage
        {...messages.appointmentDetails}
        style={styles.headerText}
      />
      <View style={styles.detailsContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.text}>Time: {time.slice(0, 5)}</Text>
          <Text style={styles.text}>{title} </Text>
          <Text
            style={
              styles.duration
            }>{`${duration} min with ${staffNickName}`}</Text>
        </View>
        <View>
          <Text style={{ color: 'black' }}>
            {currency?.prefix}
            {price}
            {currency?.suffix}
          </Text>
        </View>
      </View>
    </View>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  container: {
    padding: theme.space.s,
  },
  detailsContainer: {
    // flex: 1,
    flexDirection: 'row',
    paddingHorizontal: theme.space.m,
  },
  headerText: { fontSize: theme.fontSizes.h4.lg, paddingBottom: theme.space.m },
  text: { fontSize: theme.fontSizes.medium },
  duration: { fontSize: theme.fontSizes.small, color: 'grey' },
}));

export interface IBookingDetailsComponentProps {
  title: string;
  time: string;
  duration: string;
  staffNickName: string;
  price: number;
}
export default BookingDetailsComponent;
