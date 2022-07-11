import React from 'react';
import { Alert, View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { translate } from 'i18n';
import messages from '../messages';
import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'utils/makeStyleSheet';
import statusColors from 'theme/statusColors';
import commonMessages from '../../../messages';
import JSONTree from 'react-native-json-tree';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'navigators/constants';
import { getClientAction } from 'containers/CurrentClient/slice/actions';
import { useDispatch } from 'react-redux';

const Component4: React.FC<ComponentProps> = ({
  item,
  item: {
    client_name: clientName,
    client_id,
    date_canceled,
    booking_id,
    cancellation,
    notes,
    staff_nickname,
    location_title,
    appointed_staff_nickname,
    duration = 30,
    date,
    time,
  },
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = makeStyles();

  const theme = useTheme();

  const dateStartAppointment = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss');
  const dateEndAppointment = moment(dateStartAppointment).add(
    duration,
    'minutes',
  );
  return (
    <>
      {/* <JSONTree hideRoot data={item} /> */}

      <View style={styles.container}>
        <View style={{ padding: theme.space.s }}>
          <Text
            style={[
              {
                color: theme.colors.primary,
              },
            ]}>
            {`${
              clientName
                ? clientName
                : translate(
                    messages.newBooking.scope,
                    messages.newBooking.options,
                  )
            }`}
          </Text>
          <Text style={{ color: 'black' }}>
            {staff_nickname}{' '}
            <Text style={[{ color: theme.colors.text?.highlightedColor }, {}]}>
              {translate(messages.canceled.scope, messages.canceled.options)}{' '}
            </Text>
            {`${translate(
              messages.appAt.scope,
              messages.appAt.options,
            )} ${location_title} ${translate(
              messages.with.scope,
              messages.with.options,
            )} ${appointed_staff_nickname}`}
          </Text>
          <Text style={{ color: 'grey' }}>
            {moment(date).format('dddd, DD MMMM YYYY')}
          </Text>
        </View>

        <View style={{ height: 0.5, backgroundColor: '#00000070' }}></View>

        <View
          style={{
            padding: theme.space.s,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{ color: 'black' }}>
              {`${dateStartAppointment.format('dddd, DD MMMM YYYY')}`}
            </Text>
            <Text style={{ color: 'black' }}>
              {`${dateStartAppointment.format(
                'HH:mm',
              )} - ${dateEndAppointment.format('HH:mm')}`}
            </Text>
            <Text style={{ color: 'black' }}>
              {`${duration} ${translate(
                messages.mins.scope,
                messages.mins.options,
              )}`}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: statusColors['canceled'],
              padding: theme.space.xs,
              minWidth: 80,
              borderRadius: theme.space.xxs,
            }}
            onPress={() =>
              navigation.navigate(
                SCREENS.BOOKING_DETAILS as never,
                {
                  bookingId: booking_id,
                } as never,
              )
            }>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              CANCELED
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 0.5, backgroundColor: '#00000070' }}></View>
        <View
          style={{
            padding: theme.space.s,
          }}>
          <Text style={{ color: 'black' }}>Cancellation {cancellation}</Text>
          <Text style={{ color: 'black' }}>{notes}</Text>
        </View>

        {clientName && (
          <TouchableOpacity
            onPress={() => {
              dispatch(getClientAction({ id: client_id }));

              navigation.navigate(
                SCREENS.CLIENT_DETAILS as never,
                {
                  clientId: client_id,
                } as never,
              );
            }}>
            <Text
              style={[
                { color: 'deepskyblue', marginLeft: '5%', marginVertical: 10 },
              ]}>
              {translate(
                commonMessages.viewClientProfile.scope,
                commonMessages.viewClientProfile.options,
              )}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  container: {
    backgroundColor: 'white',
    marginVertical: theme.space.xs,
    marginHorizontal: theme.space.xxs,
    borderRadius: theme.space.xxs,
    ...theme.defaultShadow,
  },
}));

export interface ComponentProps {
  item: any;
  booking?: any;
}
export default Component4;
