import React from 'react';
import { Text, View } from 'react-native';
import { format } from 'date-fns';
import { FormattedMessage } from 'components/FormattedMessage';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import messages from '../../messages';

const ClientBookingComponent: React.FC<IClientBookingComponentProps> = ({
  date,
  time,
  staff_nickname,
  title,
}) => {
  const styles = makeStyles();
  const DatesRenderer = () => {
    try {
      return (
        <>
          <Text style={{ fontSize: 13, color: 'grey' }}>{`${format(
            new Date(date),
            'EEE',
          )}, ${format(new Date(date), 'dd MMM yyyy')} at ${time.slice(
            0,
            5,
          )}`}</Text>
        </>
      );
    } catch (e) {
      return <></>;
    }
  };
  return (
    <View style={styles.appointmentContainer}>
      <DatesRenderer />
      <Text style={{ fontSize: 14 }}>{`${title}`}</Text>
      <Text
        style={{
          fontSize: 13,
          color: 'grey',
        }}>{`Booked by ${staff_nickname}`}</Text>
    </View>
  );
};

const Separator = () => (
  <View
    style={{
      height: 0.5,
      backgroundColor: '#00000070',
      marginHorizontal: 20,
    }}></View>
);

const BookingsHistoryListComponent: React.FC<
  IBookinsgHistoryComponentProps
> = ({ clientBookings = [] }) => {
  const styles = makeStyles();
  return (
    <View style={styles.container}>
      <FormattedMessage
        {...messages.appointmentHistory}
        style={styles.headerText}
      />
      {clientBookings.map((appointment, index) => (
        <View key={`${appointment.id}-${index}`}>
          <ClientBookingComponent
            date={appointment.date}
            time={appointment.time}
            staff_nickname={appointment.staff_nickname}
            title={appointment.title}
          />
          <Separator />
        </View>
      ))}
    </View>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  container: {
    padding: theme.space.s,
    paddingBottom: 150,
  },
  appointmentContainer: {
    padding: theme.space.m,
  },
  headerText: { fontSize: theme.fontSizes.h4.lg, paddingBottom: theme.space.m },
}));

export interface IClientBookingComponentProps {
  date: string;
  time: string;
  staff_nickname: string;
  title: string;
  id?: string;
}

export interface IBookinsgHistoryComponentProps {
  clientBookings: Array<IClientBookingComponentProps>;
}
export default BookingsHistoryListComponent;
