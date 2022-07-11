import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import { useForm, Controller, } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'theme/makeStyleSheet';

import moment from 'moment';

const InfoScreen = () => {
    const theme = useTheme();
    const styles = makeStyles();

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const { handleSubmit,
        formState: { errors },
        setValue,
        control } = useForm()

    const onSubmit = async (payload: any) => {
        const SetInfoData = await AsyncStorage.setItem('@infoData', JSON.stringify(payload))
        const GetInfoData = await AsyncStorage.getItem('@infoData');
        console.log("info  ", GetInfoData)
    }
    return (
        <View style={styles.container}>
            <View style={styles.holder}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: '600', paddingVertical: 16 }}>Info</Text>
            </View>
            <View style={styles.holder}>
                <Text style={{ color: 'black', paddingVertical: 4 }}>Gender</Text>
            </View>
            <View style={styles.pickerContainer}>
                <Controller
                    control={control}
                    name={'sex'}
                    defaultValue={"not_set"}
                    render={({ field: { onChange, onBlur, value } }) =>
                        <Picker style={styles.picker}
                            selectedValue={value}
                            onValueChange={onChange}
                        >
                            <Picker.Item style={{ color: 'black' }} label="Male" value="m" />
                            <Picker.Item label="Female" value="f" />
                            <Picker.Item label="Other" value="not_set" />
                            <Picker.Item label="Unknown" value="not_set" />
                        </Picker>}
                />
            </View>
            <View style={styles.holder}>
                <Text style={{ color: 'black', paddingVertical: 4 }}>Birthday</Text>
            </View>
            <TouchableOpacity onPress={() => setOpen(true)}>
                <Text style={{ color: 'white', backgroundColor: theme.colors.primary, padding: theme.space.s, borderRadius: theme.space.xxs }}>Set Birthday</Text>
            </TouchableOpacity>
            <Controller
                control={control}
                name={'dob'}
                defaultValue={"0"}
                render={({ field: { onChange, onBlur, value } }) =>
                    <DatePicker
                        modal={true}
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            onChange(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                }
            />
            <View >
                <Text style={{ color: 'black', paddingVertical: theme.space.m, paddingHorizontal: theme.space.xxs, borderWidth: 0.2 }}>{moment(date).format("dddd, MMMM Do YYYY")}</Text>
            </View>

            <View style={styles.buttonHolder}>
                <TouchableOpacity style={styles.saveButton}
                    onPress={handleSubmit(onSubmit)}

                >
                    <Text style={{ fontSize: 18, color: 'white' }}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
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
    holder: {
        paddingVertical: theme.space.xs
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

export default InfoScreen