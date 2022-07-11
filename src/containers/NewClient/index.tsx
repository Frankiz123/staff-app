import React, { useState } from 'react'
import { View, Text, ScrollView } from "react-native"
import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'theme/makeStyleSheet';

import useNewClientSlice from "./slice/"
import AddClientForm from './components/AddClientForm';

const NewClient = () => {
    useNewClientSlice()
    const theme = useTheme();
    const styles = makeStyles();

    return (
        <ScrollView style={styles.container}>
            <View>
                <View >
                    <Text style={{ color: 'black', fontSize: 24, fontWeight: '600' }}>New Client</Text>
                </View>
                <AddClientForm />
            </View>
        </ScrollView>
    )
}
const makeStyles = makeStyleSheet((theme) => ({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
        paddingHorizontal: theme.space.l
    }
}));
export default NewClient