import React from 'react';
import {
  ColorValue,
  StyleSheet,
  Text,
  TouchableNativeFeedbackProps,
  View,
  TouchableNativeFeedback,
} from 'react-native';
// import {  } from 'react-native-gesture-handler';

export interface IActionButtonProps extends TouchableNativeFeedbackProps {
  textColor?: ColorValue;
  title?: string;
}

const ActionButton: React.FC<IActionButtonProps> = ({
  onPress,
  textColor,
  title,
}) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={onPress}>
        <Text style={[styles.textStyle, { color: textColor }]}>{title}</Text>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { borderRadius: 4, overflow: 'hidden' },
  textStyle: {
    alignSelf: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontWeight: 'bold',
  },
});

export { ActionButton };
