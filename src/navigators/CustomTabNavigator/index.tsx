import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import useTheme from 'hooks/useTheme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import { SCREENS } from 'navigators/constants';
import { setDateAction } from 'containers/AppointmentsList/slice/actions';
import { translate } from 'i18n';
import messages from 'navigators/messages';

const ROUTES = [
  SCREENS.TODAY,
  SCREENS.CONTACTS,
  SCREENS.BOOKINGS,
  SCREENS.NEWS_FEED,
];
const TEXTS = (screenName: string) =>
  ({
    SCREEN_TODAY: translate(messages.today.scope, messages.today.options),
    SCREEN_BOOKINGS: translate(
      messages.bookings.scope,
      messages.bookings.options,
    ),
    SCREEN_NEWS_FEED: translate(
      messages.newsfeed.scope,
      messages.newsfeed.options,
    ),
    SCREEN_CONTACTS: translate(
      messages.contacts.scope,
      messages.contacts.options,
    ),
  }[screenName]);

const Icons =
  (isFocused: boolean, color: string = '') =>
  (screenName: string) =>
    ({
      SCREEN_TODAY: (
        <AntDesign
          style={[{ color: '#aeaeae' }, isFocused && { color }]}
          name={'home'}
          size={25}
        />
      ),
      SCREEN_BOOKINGS: (
        <Ionicons
          style={[{ color: '#aeaeae' }, isFocused && { color }]}
          name={isFocused ? 'calendar' : 'calendar-outline'}
          size={25}
        />
      ),
      SCREEN_NEWS_FEED: (
        <Ionicons
          style={[{ color: '#aeaeae' }, isFocused && { color }]}
          name={isFocused ? 'mail-unread' : 'mail-unread-outline'}
          size={25}
        />
      ),
      SCREEN_CONTACTS: (
        <FontAwesome
          style={[{ color: '#aeaeae' }, isFocused && { color }]}
          name={isFocused ? 'user' : 'user-o'}
          size={25}
        />
      ),
    }[screenName]);

export const CustomTabNavigator = ({ screenName }: { screenName: string }) => {
  const styles = makeStyle();
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <>
      {/* <HeaderComponent /> */}
      <View style={styles.tabsContainer}>
        {ROUTES.map((route: string) => {
          const isFocused = screenName == route;

          const onPress = () => {
            if (screenName == SCREENS.BOOKINGS) {
              dispatch(setDateAction(new Date()));
            }
            navigation.navigate(route as never);
          };
          return (
            <TouchableOpacity key={route} style={styles.tab} onPress={onPress}>
              {Icons(isFocused, theme.colors.primary)(route)}
              <Text
                style={[styles.tabLabel, isFocused && styles.tabLabelFocused]}>
                {TEXTS(route)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

const makeStyle = makeStyleSheet((theme) => ({
  tabsContainer: {
    paddingBottom: theme.insets.bottom + theme.space.xxs,
    paddingTop: theme.space.xxs,
    backgroundColor: 'white',
    flexDirection: 'row',
    ...theme.defaultShadow,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: { textAlign: 'center', color: '#aeaeae' },
  tabLabelFocused: { color: theme.colors.primary },
}));
