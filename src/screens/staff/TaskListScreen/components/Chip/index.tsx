import React, { useMemo } from 'react';

import {
  TouchableOpacity,
  View,
  Text,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from 'react-native';
import useTheme from 'hooks/useTheme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { makeStyleSheet } from 'utils/makeStyleSheet';

function Chip({
  isSelected = false,
  onPress = () => {},
  value,
  shouldHighlightValue = true,
  showIcon = true,
  alwaysShowIcon = false,
  iconPosition = 'left',
  containerStyle = {},
  color = 'blue',
  inactiveColor = 'blue',
  textStyle,
}: IChipProps) {
  const theme = useTheme();
  const styles = makeStyles(inactiveColor, color)();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        containerStyle,
        isSelected && styles.containerSelected,
      ]}>
      {((isSelected && showIcon) || alwaysShowIcon) &&
        iconPosition === 'left' && (
          <AntDesign
            name={'check'}
            style={[
              styles.icon,
              isSelected
                ? shouldHighlightValue && styles.textSelected
                : styles.text,
            ]}
            size={25}
          />
        )}
      <View>
        <Text
          style={[
            isSelected
              ? shouldHighlightValue && styles.textSelected
              : styles.text,
            textStyle,
          ]}>
          {value}
        </Text>
      </View>
      {((isSelected && showIcon) || alwaysShowIcon) &&
        iconPosition === 'right' && (
          <AntDesign
            name={'check'}
            style={[
              styles.icon,
              isSelected
                ? shouldHighlightValue && styles.textSelected
                : styles.text,
            ]}
            size={25}
          />
        )}
    </TouchableOpacity>
  );
}

const makeStyles = (inactiveColor: any, color: any) =>
  makeStyleSheet((theme) => ({
    container: {
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      flexDirection: 'row',
      margin: 5,
      alignItems: 'center',
      paddingVertical: 7,
      borderColor: inactiveColor,
      // padding: 1000,
    },
    containerSelected: {
      borderColor: color,
    },
    icon: {
      fontSize: 15,
    },
    textSelected: {
      color,
    },
    text: {
      color: inactiveColor,
    },
  }));

export interface IChipProps {
  isSelected: boolean;
  value: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  shouldHighlightValue: boolean;
  showIcon: boolean;
  alwaysShowIcon: boolean;
  iconPosition: 'left' | 'right';
  // eslint-disable-next-line react/require-default-props
  // icon: {
  //   name: string;
  //   type: string;
  //   styles: ViewStyle;
  // };
  containerStyle: ViewStyle;
  textStyle: TextStyle;
  color: string;
  inactiveColor: string;
}

export default Chip;
