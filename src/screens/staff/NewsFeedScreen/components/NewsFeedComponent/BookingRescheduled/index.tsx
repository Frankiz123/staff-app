import React from 'react';
import { Alert, View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { translate } from 'i18n';
import messages from '../messages';
import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'utils/makeStyleSheet';
import statusColors, { ColorTypes } from 'theme/statusColors';
import commonMessages from '../../../messages';
import JSONTree from 'react-native-json-tree';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'navigators/constants';
import { getClientAction } from 'containers/CurrentClient/slice/actions';
import { useDispatch } from 'react-redux';

function showDiff(field: any, from: any, to: any) {
  return (
    from !== to && (
      <>
        <Text style={[{ marginBottom: 5, color: 'black' }, {}]}>
          <Text style={{ color: 'black' }}>
            {translate(messages.fromStaff.scope, messages.fromStaff.options)}
          </Text>
          {from}
        </Text>

        <Text style={[{ marginBottom: 5, color: 'black' }, {}]}>
          <Text style={{ color: 'black' }}>
            {translate(messages.toStaff.scope, messages.toStaff.options)}
          </Text>
          {to}
        </Text>
      </>
    )
  );
}

const Component5: React.FC<ComponentProps> = ({
  item: {
    client_name: clientName,
    staff_nickname: staffNickname,
    staff_from_nickname: staffFromNickname,
    staff_to_nickname: staffToNickname,
    from_date: fromDate,
    to_date: toDate,
    from_time: fromTime,
    to_time: toTime,
    salon_from_name: salonFromName,
    salon_to_name: salonToName,
    date_added,
    duration = 30,
    type,
    title = 'Todo',
    status = 'booked',
    client_id,
    id,
  },
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = makeStyles();

  const theme = useTheme();

  const dateStartAppointment = moment(
    `${fromDate} ${toTime}`,
    'YYYY-MM-DD HH:mm:ss',
  );
  const dateEndAppointment = moment(dateStartAppointment).add(
    duration,
    'minutes',
  );

  const dateAdded = moment(date_added, 'YYYY-MM-DD HH:mm:ss');

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
                    messages.bookingRescheduled.scope,
                    messages.bookingRescheduled.options,
                  )
            }`}
          </Text>
          <Text style={{ color: 'black' }}>
            {staffNickname}{' '}
            <Text style={[{ color: theme.colors.text?.highlightedColor }, {}]}>
              {translate(
                messages.rescheduled.scope,
                messages.rescheduled.options,
              )}{' '}
            </Text>
            {`${translate(
              messages.appAt.scope,
              messages.appAt.options,
            )} ${salonToName} ${translate(
              messages.with.scope,
              messages.with.options,
            )} ${staffToNickname}`}
          </Text>
          <Text style={{ color: 'black' }}>
            {dateAdded.format('dddd, DD MMMM HH:mm ')}
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
              backgroundColor: statusColors[status as ColorTypes],
              padding: theme.space.xs,
              minWidth: 80,
              borderRadius: theme.space.xxs,
            }}
            onPress={() =>
              navigation.navigate(
                SCREENS.BOOKING_DETAILS as never,
                {
                  bookingId: id,
                } as never,
              )
            }>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              {(status || '')
                .replace(/_/g, ' ')
                .replace('confirmation', '')
                .toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: theme.space.s }}>
          <Text style={{ color: 'black' }}>{title}</Text>
          {showDiff('Staff', staffFromNickname, staffToNickname)}

          {showDiff('Date', fromDate, toDate)}

          {showDiff('Time', fromTime, toTime)}

          {showDiff('Salon', salonFromName, salonToName)}
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
export default Component5;
