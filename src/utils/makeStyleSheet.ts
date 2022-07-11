import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export type callbackType = (
  theme: ReturnType<typeof useTheme>,
) => StyleSheet.NamedStyles<any>;

export const makeStyleSheet = (callback: callbackType) => () => {
  return ((callback: callbackType) => {
    const theme = useTheme();
    return StyleSheet.create(callback(theme));
  })(callback);
};
