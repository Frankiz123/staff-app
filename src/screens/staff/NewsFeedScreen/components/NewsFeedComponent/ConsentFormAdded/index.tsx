import useTheme from 'hooks/useTheme';
import { translate } from 'i18n';
import moment from 'moment';
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
import { makeStyleSheet } from 'utils/makeStyleSheet';
import messages from '../messages';
import commonMessages from '../../../messages';
import JSONTree from 'react-native-json-tree';
import { color } from 'react-native-reanimated';

const Component8: React.FC<IComponentProps> = ({
  item: { staff_nickname, date_created, form_name },
  item,
}) => {
  const styles = makeStyles();

  const theme = useTheme();

  return (
    <>
      {/* {__DEV__ && <JSONTree hideRoot data={item} sortObjectKeys={true} />} */}

      <View style={styles.container}>
        <View style={{ padding: theme.space.s }}>
          <Text style={{ color: 'black' }}>
            {staff_nickname}{' '}
            <Text style={[{ color: theme.colors.text?.highlightedColor }, {}]}>
              {`${translate(
                messages.signedConsentForm.scope,
                messages.signedConsentForm.options,
              )}`}
            </Text>
          </Text>
          <Text style={{ color: 'grey' }}>
            {moment(date_created, 'YYYY-MM-DD HH:mm:ss').format(
              'DD/MM/YYYY hh:mm a',
            )}
          </Text>
        </View>
        <View style={{ height: 0.5, backgroundColor: '#00000070' }}></View>

        <View style={{ padding: theme.space.s }}>
          <Text style={{ color: 'black' }}>{form_name}</Text>
        </View>
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
export interface IComponentProps {
  item: any;
}
export default Component8;
