import React from 'react';
import { View } from 'react-native';
import { FormattedMessage } from 'components/FormattedMessage';
import { makeStyleSheet } from 'theme/makeStyleSheet';

const FloatingButtonAction: React.FC<IFloatingButtonActionProps> = ({
  icon,
  messages,
}) => {
  const styles = makeStyle();
  return (
    <View key={Math.random() + ''} style={styles.container}>
      <View style={styles.textContainer}>
        <FormattedMessage {...messages} style={styles.text} />
      </View>
      <View style={styles.iconContainer}>{icon}</View>
    </View>
  );
};

const makeStyle = makeStyleSheet((theme) => ({
  container: {
    marginRight: -1 * theme.space.xxs,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    padding: theme.space.xs,
    color: 'white',
    textAlign: 'center',
  },
  textContainer: {
    backgroundColor: theme.colors.primary,
    minWidth: 120,
    paddingHorizontal: theme.space.xxs,
    paddingVertical: theme.space.xxxs,
    marginRight: theme.space.m,
    borderRadius: 10,
    ...theme.defaultShadow,
  },
  iconContainer: {
    backgroundColor: theme.colors.primary,
    padding: 13,
    borderRadius: 50,
    ...theme.defaultShadow,
  },
}));

export interface IFloatingButtonActionProps {
  icon: JSX.Element;
  messages: any;
}
export default FloatingButtonAction;
