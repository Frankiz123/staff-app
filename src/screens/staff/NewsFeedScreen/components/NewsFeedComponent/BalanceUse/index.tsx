import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import { translate } from 'i18n';
import messages from '../messages';
import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'utils/makeStyleSheet';
import JSONTree from 'react-native-json-tree';

const Component3: React.FC<ComponentProps> = ({
  item,
  item: { employee_name, date_added, balance_before, balance_after, amount },
}) => {
  const currencySign = 'EUR';
  const styles = makeStyles();

  const theme = useTheme();

  return (
    <>
      {/* {__DEV__ && <JSONTree hideRoot data={item} />} */}

      <View style={styles.container}>
        <View style={{ padding: theme.space.s }}>
          <Text style={{ color: 'black' }}>
            {employee_name}{' '}
            <Text style={{ color: theme.colors.text?.highlightedColor }}>
              {translate(messages.withdrawn.scope, messages.withdrawn.options)}{' '}
              {currencySign}
              {amount}{' '}
              <Text style={{ color: 'black' }}>
                {translate(
                  messages.fromAccount.scope,
                  messages.fromAccount.options,
                )}
              </Text>
            </Text>
          </Text>
          <Text style={{ color: 'grey' }}>
            {moment(date_added, 'YYYY-MM-DD HH:mm:ss').format(
              'DD/MM/YYYY hh:mm a',
            )}
          </Text>
        </View>
        <View style={{ height: 0.5, backgroundColor: '#00000070' }}></View>
        <View style={{ padding: theme.space.s, flexDirection: 'row' }}>
          <View style={{}}>
            <Text style={{ color: 'black' }}>
              {translate(
                messages.balanceBefore.scope,
                messages.balanceBefore.options,
              )}
            </Text>
            <Text style={{ color: 'black' }}>
              {translate(
                messages.balanceAfter.scope,
                messages.balanceAfter.options,
              )}
            </Text>
          </View>
          <View style={{ paddingLeft: theme.space.s }}>
            <Text style={{ color: 'black' }}>
              {currencySign} {balance_before}
            </Text>
            <Text style={{ color: 'black' }}>
              {currencySign} {balance_after}
            </Text>
          </View>
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

export interface ComponentProps {
  item: any;
  booking?: any;
}
export default Component3;
