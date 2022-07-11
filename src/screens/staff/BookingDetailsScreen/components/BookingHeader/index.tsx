import { format } from 'date-fns';
import React from 'react';
import { StyleProp } from 'react-native';
import { Text, View } from 'react-native';

import { makeStyleSheet } from 'utils/makeStyleSheet';

const BookingHeaderComponent: React.FC<IBookingHeaderComponentProps> = ({
  date,
  time,
}) => {
  const styles = makeStyles();
  return (
    <View style={[styles.container]}>
      <Text style={styles.date}>{format(new Date(date), 'dd MMM yyyy')}</Text>
      <Text style={styles.dateDetails}>
        {format(new Date(date), 'EEEE')} at {time.slice(0, 5)}
      </Text>
    </View>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  container: {
    padding: theme.space.s,
  },
  date: {
    fontSize: theme.fontSizes.h3.lg,
    paddingBottom: theme.space.m,
    color: 'black',
  },
  dateDetails: { fontSize: theme.fontSizes.medium, color: 'black' },
}));

export interface IBookingHeaderComponentProps {
  date: string;
  time: string;
}
export default BookingHeaderComponent;
