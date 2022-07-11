import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import ControlledTextInput from 'components/ControlledTextInput';
import { useForm, Controller, } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validationSchema';

const AddressDetailsScreen = () => {
    const theme = useTheme();
    const styles = makeStyles();

    const { handleSubmit,
        formState: { errors },
        setValue,
        control } = useForm({
            resolver: yupResolver(schema),
        })

    const onSubmit = async (payload: any) => {

        let fullAddress = payload.region !== '' ? payload.address?.toString() + ', ' + payload.city?.toString() + ', ' + payload.region?.toString() : payload.address?.toString() + ', ' + payload.city?.toString()
        const obj = {
            address: fullAddress,
            postcode: payload.postcode
        }
        const SetAddressData = await AsyncStorage.setItem('@AddressData', JSON.stringify(obj))
        const GetAddressData = await AsyncStorage.getItem('@AddressData')
        console.log('address screen ', GetAddressData)
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: '600', paddingVertical: 16 }}>Address Details</Text>
            </View>
            <ControlledTextInput
                name={'address'}
                label={'Address'}
                showLabel
                errorMessage={errors.address?.message}
                staticHolder={'address'}
                control={control}
                keyboardType={'default'}
                inputStyle={styles.input}
            />
            <ControlledTextInput
                name={'city'}
                label={'City'}
                showLabel
                errorMessage={errors.city?.message}
                staticHolder={'city'}
                control={control}
                keyboardType={'default'}
                inputStyle={styles.input}
            />
            <ControlledTextInput
                name={'region'}
                label={'Region / State'}
                showLabel
                errorMessage={errors.state?.message}
                staticHolder={'region'}
                control={control}
                keyboardType={'default'}
                inputStyle={styles.input}
            />
            <ControlledTextInput
                name={'postcode'}
                label={'Zip / Post Code'}
                showLabel
                errorMessage={errors.zip?.message}
                staticHolder={'zip'}
                control={control}
                keyboardType={'default'}
                inputStyle={styles.input}
            />
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
const makeStyles = makeStyleSheet((theme) => ({
    container: {
        backgroundColor: 'white',
        padding: 8,
        height: '100%',
        width: '100%',
        paddingHorizontal: theme.space.l
    },
    pickerContainer: {
        backgroundColor: 'white',
        borderWidth: 0.5,
        padding: 2,
        width: 350,
        borderRadius: 4,
        color: 'black',
        borderColor: 'grey',
        marginVertical: theme.space.xxxs,

    },
    picker: {
        backgroundColor: 'white',
        color: 'black'
    },
    input: {
        borderWidth: 0.5,
        padding: 8,
        width: 350,
        borderRadius: 4,
        color: 'black',
        borderColor: 'grey',
        marginVertical: theme.space.xxxs
    },
    buttonHolder: {
        marginVertical: 24,
        width: '100%',
        alignItems: 'center',

    },
    saveButton: {
        borderRadius: 4,
        backgroundColor: theme.colors.primary,
        width: 350,
        justifyContent: 'center',
        paddingVertical: theme.space.m,
        alignItems: 'center',
    },

}))

export default AddressDetailsScreen