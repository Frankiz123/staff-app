import React from 'react';
import { Text, TextProps } from 'react-native';

import * as i18n from 'i18n';
import { createSelector } from 'reselect';
import { makeSelectLocale } from 'providers/LanguageProvider/selectors';
import { useSelector } from 'react-redux';

import { makeStyleSheet } from 'theme/makeStyleSheet';
import JSONTree from 'react-native-json-tree';

const stateSelector = createSelector(makeSelectLocale(), (locale) => ({
  locale,
}));

const FormattedMessage: React.FC<IFormattedMessageProps> = (props) => {
  const { scope, options, ...textProps } = props;
  const styles = useStyles();

  const { locale } = useSelector(stateSelector);

  return (
    <>
      {/* <JSONTree hideRoot data={{ scope, options }} /> */}
      <Text {...textProps} style={[styles.container, textProps.style]}>
        {i18n.t(scope, { locale, ...options })}
      </Text>
    </>
  );
};

const useStyles = makeStyleSheet((theme) => ({
  container: { color: theme.colors.text?.primary },
}));

export interface IFormattedMessageProps extends TextProps {
  scope: string | null;
  options?: Object;
}

export { FormattedMessage };
