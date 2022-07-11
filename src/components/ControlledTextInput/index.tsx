/**
 *
 * ControlledTextInput
 *
 */

import React, { useRef, useEffect } from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { makeStyleSheet } from 'theme/makeStyleSheet';

const ControlledTextInput: React.FC<IControlledTextInputProps> = (props) => {
  const {
    control,
    errorMessage,
    name,
    label,
    defaultValue,
    staticHolder,
    inputStyle,
    showLabel,
    placeHolder = '',
    alwaysFocused = false,
    ...inputProps
  } = props;

  const styles = makeStyles();
  const textIn = useRef(null); //declare ref
  useEffect(() => {
    if (alwaysFocused) {
      (
        textIn.current || { setNativeProps: (selection: any) => {} }
      ).setNativeProps({
        selection: { start: 0, end: 0 },
      });
    }
  });

  return (
    <>
      {showLabel && <Text style={styles.title}>{label}</Text>}
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            ref={textIn}
            {...inputProps}
            style={[styles.input, inputStyle || {}]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={staticHolder}
          />
        )}
      />

      {!!errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  input: {
    padding: theme.space.s,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    color: theme.colors.text?.primary,
    fontSize: theme.fontSizes.small,
    letterSpacing: 0.3,
  },
  title: {
    alignSelf: 'flex-start',
    paddingVertical: theme.space.m,
    fontSize: theme.fontSizes.medium,
    fontWeight: '500',
    color: theme.colors.primary,
  },
  error: {
    alignSelf: 'flex-start',
    marginVertical: theme.space.xxs,
    color: 'red',
  },
}));

export interface IControlledTextInputProps extends TextInputProps {
  control: Control<FieldValues> | undefined;
  errorMessage: string;
  name: string;
  label: string;
  staticHolder: string;
  showLabel?: boolean;
  inputStyle?: StyleProp<TextStyle>;
  placeHolder?: string;
  alwaysFocused?: boolean;
}
export default ControlledTextInput;
