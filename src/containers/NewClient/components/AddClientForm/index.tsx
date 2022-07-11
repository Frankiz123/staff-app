import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm, Controller, } from 'react-hook-form';
import { List } from 'react-native-paper';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { launchImageLibrary } from 'react-native-image-picker'
import { useNavigation } from '@react-navigation/native';
import useTheme from 'hooks/useTheme';
import ControlledTextInput from 'components/ControlledTextInput';
import Avatar from 'components/Avatar'
import { makeStyles } from 'containers/NewClient/styles';
import AdditionalInfo from '../AdditionalInfo';
import { addClientAction } from "../../slice/actions"
import { selectClientSuccess } from "../../slice/selectors"

import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../validationSchema';

const AddClientForm = () => {
    const theme = useTheme();
    const styles = makeStyles();
    const [avatar, setAvatar] = useState('')
    const navigate = useNavigation()
    const dispatch = useDispatch();
    const selectedState = useSelector(selectClientSuccess)

    const { register, handleSubmit,
        formState: { errors },
        setValue,
        control } = useForm({
            mode: 'onChange',

            resolver: yupResolver(schema),
        })


    const handleAvatarPress = () => {
        launchImageLibrary({ mediaType: 'photo', includeBase64: true }
            , ({ didCancel, assets }) =>
                !didCancel && setAvatar(`data:image/png;base64,${assets[0]?.base64}`)
        )
    }
    const onSubmit = async (payload: any) => {
        const GetInfoData = await AsyncStorage.getItem('@infoData') || '{}';
        const GetAddressData = await AsyncStorage.getItem('@AddressData') || '{}';
        const Info = JSON.parse(GetInfoData)
        const Address = JSON.parse(GetAddressData)
        const image = {
            image_file: avatar
        }
        const data = {
            ...payload,
            ...Info,
            ...Address,
            ...image
        }
        dispatch(addClientAction(data))
        navigate.goBack()
        console.log('form ', data)
    }

    console.log('render')
    return (
        <ScrollView style={styles.container}>
            <View style={{ alignItems: 'center', height: 200, justifyContent: 'center' }}>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',

                }} onPress={handleAvatarPress}>
                    <Avatar
                        title='Avatar'
                        uri={avatar}
                        style={styles.avatar}
                        size={'medium'}
                    />
                </TouchableOpacity>
            </View>
            <ControlledTextInput
                name={'name'}
                label={'First Name'}
                showLabel
                errorMessage={errors.name?.message}
                staticHolder={'name'}
                control={control}
                keyboardType={'default'}
                inputStyle={styles.input}

            />
            <ControlledTextInput
                name={'surname'}
                label={'Last Name'}
                showLabel
                errorMessage={errors.surname?.message}
                staticHolder={'surname'}
                control={control}
                keyboardType={'default'}
                inputStyle={styles.input}
            />
            <ControlledTextInput
                name={'phone'}
                label={'Phone'}
                showLabel
                errorMessage={errors.phone?.message}
                staticHolder={'phone'}
                control={control}
                keyboardType={'phone-pad'}
                inputStyle={styles.input}
            />
            <ControlledTextInput
                name={'email'}
                label={'email'}
                showLabel
                errorMessage={errors.email?.message}
                staticHolder={'email'}
                control={control}
                keyboardType={'email-address'}
                inputStyle={styles.input}
            />
            <View style={styles.accordionHolder} >

                <List.Accordion
                    title="Email Notifications Preferences"
                    style={{ backgroundColor: 'white' }}
                >
                    <View style={{ alignItems: 'flex-start', paddingVertical: 12 }}>
                        <Controller
                            control={control}
                            name={'email_appointments_optin'}
                            defaultValue={"0"}
                            render={({ field: { onChange, onBlur, value } }) => (<BouncyCheckbox
                                size={25}
                                textComponent={<Text style={styles.checkBoxText}>Appointment Notification</Text>}
                                fillColor={theme.colors.primary}
                                onPress={(bool) => { bool ? onChange("1") : onChange("0") }}
                                style={{ padding: 8 }}
                            />)}
                        />
                        <Controller
                            control={control}
                            name={'email_purchases_optin'}
                            defaultValue={"0"}
                            render={({ field: { onChange, onBlur, value } }) => (<BouncyCheckbox
                                size={25}
                                text={'Purchases Notification'}
                                textComponent={<Text style={styles.checkBoxText}>Purchases Notification</Text>}
                                fillColor={theme.colors.primary}
                                onPress={(bool) => { bool ? onChange("1") : onChange("0") }}
                                style={{ padding: 8 }}
                            />)}
                        />
                        <Controller
                            control={control}
                            name={'email_marketing_optin'}
                            defaultValue={"0"}
                            render={({ field: { onChange, onBlur, value } }) => (<BouncyCheckbox
                                size={25}
                                text={'Marketing Offers and Promotions'}
                                textComponent={<Text style={styles.checkBoxText}>Marketing Offers and Promotions</Text>}
                                fillColor={theme.colors.primary}
                                onPress={(bool) => { bool ? onChange("1") : onChange("0") }}
                                style={{ padding: 8 }}
                            />)}
                        />
                        <Controller
                            control={control}
                            name={'email_other_optin'}
                            defaultValue={"0"}
                            render={({ field: { onChange, onBlur, value } }) => (<BouncyCheckbox
                                size={25}
                                text={'Other Notifications'}
                                textComponent={<Text style={styles.checkBoxText}>Other Notifications</Text>}
                                fillColor={theme.colors.primary}
                                onPress={(bool) => { bool ? onChange("1") : onChange("0") }}
                                style={{ padding: 8 }}
                            />)}
                        />
                    </View>
                </List.Accordion>
            </View>

            <View style={styles.accordionHolder} >

                <List.Accordion
                    title="SMS Notifications Preferences"
                    style={{ backgroundColor: 'white' }}
                >
                    <View style={{ alignItems: 'flex-start', paddingVertical: 12 }}>
                        <Controller
                            control={control}
                            name={'sms_appointments_opti'}
                            defaultValue={"0"}
                            render={({ field: { onChange, onBlur, value } }) => (<BouncyCheckbox
                                size={25}
                                text={'Appointment Notification'}
                                textComponent={<Text style={styles.checkBoxText}>Appointment Notification</Text>}
                                fillColor={theme.colors.primary}
                                onPress={(bool) => { bool ? onChange("1") : onChange("0") }}
                                style={{ padding: 8 }}
                            />)}
                        />
                        <Controller
                            control={control}
                            name={'sms_purchases_optin'}
                            defaultValue={"0"}
                            render={({ field: { onChange, onBlur, value } }) => (<BouncyCheckbox
                                size={25}
                                text={'Purchases Notification'}
                                textComponent={<Text style={styles.checkBoxText}>Purchases Notification</Text>}
                                fillColor={theme.colors.primary}
                                onPress={(bool) => { bool ? onChange("1") : onChange("0") }}
                                style={{ padding: 8 }}
                            />)}
                        />
                        <Controller
                            control={control}
                            name={'sms_marketing_optin'}
                            defaultValue={"0"}
                            render={({ field: { onChange, onBlur, value } }) => (<BouncyCheckbox
                                size={25}
                                text={'Marketing Offers and Promotions'}
                                textComponent={<Text style={styles.checkBoxText}>Marketing Offers and Promotions</Text>}
                                fillColor={theme.colors.primary}
                                onPress={(bool) => { bool ? onChange("1") : onChange("0") }}
                                style={{ padding: 8 }}
                            />)}
                        />
                        <Controller
                            control={control}
                            name={'sms_other_optin'}
                            defaultValue={"0"}
                            render={({ field: { onChange, onBlur, value } }) => (<BouncyCheckbox
                                size={25}
                                text={'Other Notifications'}
                                textComponent={<Text style={styles.checkBoxText}>Other Notifications</Text>}
                                fillColor={theme.colors.primary}
                                onPress={(bool) => { bool ? onChange("1") : onChange("0") }}
                                style={{ padding: 8 }}
                            />)}
                        />
                    </View>
                </List.Accordion>
            </View>
            <ControlledTextInput
                name={'notes'}
                label={'Client Notes (opt)'}
                showLabel
                errorMessage={errors.notes?.message}
                staticHolder={'notes'}
                control={control}
                keyboardType={'default'}
                inputStyle={styles.notesInput}
                multiline
                defaultValue={" "}

            />
            <AdditionalInfo />
            <View style={styles.buttonHolder}>
                <TouchableOpacity style={styles.saveButton}
                    onPress={handleSubmit(onSubmit)}
                >
                    <Text style={{ fontSize: 18, color: 'white' }}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default AddClientForm