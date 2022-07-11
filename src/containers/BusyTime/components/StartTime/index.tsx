import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Button } from 'react-native';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';

const StartTime = () => {
    const [startTime, setStartTime] = useState(new Date);
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    console.log('time :', startTime)
    return (
        <View>
            <View>
                <TouchableOpacity onPress={handleOpen}><Text style={styles.buttonStyle}>{moment(startTime.getTime()).format("HH:mm")}</Text></TouchableOpacity>
            </View>
            <>
                <DatePicker
                    date={startTime}
                    mode='time'
                    open={open}
                    modal
                    onConfirm={(date) => {
                        setOpen(false)
                        setStartTime(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </>
        </View>)
}
const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'white',
        color: 'black',
        width: 150,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
        borderRadius: 5,
        fontSize: 16,
        fontWeight: '600',
    }
})

export default StartTime