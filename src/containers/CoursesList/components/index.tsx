import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { makeStyleSheet } from 'utils/makeStyleSheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { translate } from 'i18n';
import messages from './messages';

const Separator = () => (
  <View
    style={{
      height: 0.5,
      backgroundColor: '#00000070',
      marginHorizontal: 20,
    }}></View>
);

const CourseComponent: React.FC<ICourseComponentProps> = ({
  title,
  session_no,
  price,
  onCourseSelected,
}) => {
  const styles = makeStyles();
  const currency = useSelector(selectCurrency);

  return (
    <>
      <TouchableOpacity onPress={onCourseSelected} style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={{ color: 'black' }}>{title}</Text>
          <Text style={{ color: 'grey' }}>
            {translate(messages.sessionNo.scope, messages.sessionNo.options)}{' '}
            {session_no}
          </Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ color: 'black' }}>
            {currency?.prefix}
            {price}
            {currency?.suffix}
          </Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            style={{ color: 'black' }}
          />
        </View>
      </TouchableOpacity>
      <Separator />
    </>
  );
};
const makeStyles = makeStyleSheet((theme) => ({
  container: {
    flexDirection: 'row',
    padding: theme.space.s,
    // paddingLeft: theme.space.xxxl,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: theme.space.m,
  },
}));

export interface ICourseComponentProps {
  title: string;
  session_no: string;
  price: string;
  onCourseSelected: (service: any) => void;
}
export default CourseComponent;
