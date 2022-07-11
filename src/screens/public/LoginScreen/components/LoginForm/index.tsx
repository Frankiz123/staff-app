import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
} from 'react-native';
import ControlledTextInput from 'components/ControlledTextInput';
import { FormattedMessage } from 'components/FormattedMessage';
import { useForm, UseFormHandleSubmit, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validationSchema';
import messages from './messages';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import useTheme from 'hooks/useTheme';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectLoading,
  selectMessagingToken
} from 'containers/AuthHelper/slice/selectors';
import { showAlertAction } from 'providers/AlertsProvider/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInAction } from 'containers/AuthHelper/slice/actions';

const LoginFormComponent: React.FC<ILoginFormComponentProps> = ({ }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const styles = makeStyles();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const messaging_token = useSelector(selectMessagingToken)
  const [initalFormValues, setInitalFormValues] = useState({
    email: '',
    password: '',
    // email: 'raoul@clinicsoftware.com',
    // password: 'alex@in-picture.com',
    rememberMe: false,
  });

  const onSubmit = (payload: any) => {
    const { email, password } = payload;
    dispatch(
      signInAction({
        email,
        password,
        messaging_token: messaging_token,
        rememberMe: initalFormValues.rememberMe,
      }),
    );
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const checkRememberMe = async () => {
    try {
      const rememberMe = await AsyncStorage.getItem('rememberMe');
      if (rememberMe) {
        const rememberMeObject = JSON.parse(rememberMe);
        if (rememberMeObject.rememberMe) {
          setInitalFormValues({
            email: rememberMeObject.email,
            password: rememberMeObject.password,
            rememberMe: rememberMeObject.rememberMe,
          });
          setValue('email', rememberMeObject.email);
          setValue('password', rememberMeObject.password);
        }
      }
    } catch (e) { }
  };

  useEffect(() => {
    checkRememberMe();
  }, []);

  useEffect(() => {
    error &&
      dispatch(
        showAlertAction({
          title: error.display,
          duration: 3000,
          gravity: 'top',
          type: 'error',
        }),
      );
  }, [error]);

  return (
    <>
      <ControlledTextInput
        control={control}
        label="Email"
        name="email"
        errorMessage={errors.email?.message}
        staticHolder="email"
        inputStyle={styles.inputStyle}
        keyboardType={'email-address'}
        defaultValue={initalFormValues.email}
      />

      <ControlledTextInput
        control={control}
        label="Password"
        name="password"
        errorMessage={errors.password?.message}
        secureTextEntry
        staticHolder="password"
        inputStyle={styles.inputStyle}
        defaultValue={initalFormValues.password}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: theme.space.xs,
          alignItems: 'center',
        }}>
        <TouchableOpacity
        // onPress={goToPasswordRecovery}
        >
          <FormattedMessage
            style={styles.forgotPasswordText}
            {...messages.forgot}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Switch
            trackColor={{
              true: theme.colors.primary,
              false: theme.colors.secondary,
            }}
            value={initalFormValues.rememberMe}
            onValueChange={(value) => {
              setInitalFormValues({
                email: initalFormValues.email,
                password: initalFormValues.password,
                rememberMe: value,
              });
            }}
          />
          <FormattedMessage
            style={styles.rememberMeText}
            {...messages.rememberMe}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleSubmit(onSubmit)}>
        {loading ? (
          <ActivityIndicator color={'white'} />
        ) : (
          <FormattedMessage
            style={styles.loginButtonText}
            {...messages.login}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.createAccountButton}
      // onPress={handleSubmit(onSubmit)}
      >
        <FormattedMessage
          style={styles.createAccountButtonText}
          {...messages.createAcc}
        />
      </TouchableOpacity>
    </>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  container: {},
  logo: {
    alignSelf: 'center',
    width: '90%',
    height: '15%',
    resizeMode: 'contain',
  },
  inputStyle: { marginBottom: theme.space.s },
  forgotPasswordText: {
    alignSelf: 'flex-start',
    fontSize: 15,
    color: theme.colors.primary,
  },
  loginButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.space.s,
    marginTop: theme.space.m,
  },
  loginButtonText: {
    fontSize: theme.fontSizes.large,
    color: 'white',
    textAlign: 'center',
  },
  createAccountButton: {
    padding: theme.space.s,
    marginTop: theme.space.m,
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
  createAccountButtonText: {
    fontSize: theme.fontSizes.large,
    color: theme.colors.text?.primary,
    textAlign: 'center',
  },
  rememberMeText: {
    paddingLeft: theme.space.s,
  },
}));
export interface ILoginFormComponentProps { }
export default LoginFormComponent;
