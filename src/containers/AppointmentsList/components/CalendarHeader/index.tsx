import { selectCalendarInterval } from '../../slice/selectors';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CalendarHeader, CalendarHeaderProps } from 'react-native-big-calendar';
import { format } from 'date-fns';
import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import { toggleStaffFilterAction } from 'containers/StaffList/slice/actions';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { FormattedMessage } from 'components/FormattedMessage';
import messages from './messages';
interface ICustomCalendarHeaderProps extends CalendarHeaderProps<any> {
  customMode: 'day' | '3days' | 'week';
  setMode: Function;
}

const CustomCalendarHeader = ({
  customMode,
  setMode,
  ...props
}: ICustomCalendarHeaderProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const theme = useTheme();
  const styles = makeStyles();
  const selectedCalendarInterval = useSelector(selectCalendarInterval);
  return (
    <>
      <View style={{ paddingTop: theme.insets.top, backgroundColor: 'white' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingTop: theme.space.s,
          }}>
          <TouchableOpacity
            style={{ padding: 6 }}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Ionicons name={'menu'} color={theme.colors.primary} size={25} />
          </TouchableOpacity>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setMode('day')}>
              <FormattedMessage
                style={[
                  styles.button,
                  customMode == 'day' && {
                    color: theme.colors.primary,
                    fontWeight: 'bold',
                  },
                ]}
                {...messages.day}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMode('3days')}>
              <FormattedMessage
                style={[
                  styles.button,
                  customMode == '3days' && {
                    color: theme.colors.primary,
                    fontWeight: 'bold',
                  },
                ]}
                {...messages._3days}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMode('week')}>
              <FormattedMessage
                style={[
                  styles.button,
                  customMode == 'week' && {
                    color: theme.colors.primary,
                    fontWeight: 'bold',
                  },
                ]}
                {...messages.week}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{ padding: 6 }}
            onPress={() => dispatch(toggleStaffFilterAction())}>
            <Entypo name={'sound-mix'} color={theme.colors.primary} size={25} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingVertical: 10, backgroundColor: 'white' }}>
        <View style={[styles.monthNameContainer, props.dayHeaderStyle]}>
          <Text style={styles.month}>
            {format(selectedCalendarInterval.start, 'MMMM').substring(0, 3)}
          </Text>
          <Text style={styles.month}>
            {selectedCalendarInterval.start.getFullYear()}
          </Text>
        </View>
        <CalendarHeader {...props} showAllDayEventCell={false} />
      </View>
    </>
  );
};

export { CustomCalendarHeader };

const makeStyles = makeStyleSheet((theme) => ({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 50,
    marginHorizontal: 16,
  },
  button: {
    paddingVertical: 10,
    color: 'grey',
    textAlign: 'center',
    borderRadius: 5,
  },
  month: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  monthNameContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingVertical: 20,
    paddingLeft: 6,
  },
}));
