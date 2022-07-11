import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'navigators/constants'

import useTheme from 'hooks/useTheme';
import { makeStyles } from 'containers/NewClient/styles';

const AdditionalInfo = () => {
    const theme = useTheme();
    const styles = makeStyles();
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.additionalInfo} >
                <Text style={{ color: 'black', fontSize: 16, fontWeight: '600' }}>Additional Information</Text>
            </View>
            <View>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    style={{ paddingVertical: 16, backgroundColor: "white", borderRadius: theme.space.xxs, paddingHorizontal: theme.space.xxxs }}
                    onPress={() => {
                        navigation.navigate(SCREENS.INFO as never)
                    }}
                >
                    <Text style={{ color: 'black', fontSize: 18 }}>Info</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    style={{ paddingVertical: 16, backgroundColor: "white", borderRadius: theme.space.xxs, paddingHorizontal: theme.space.xxxs }}
                    onPress={() => {
                        navigation.navigate(SCREENS.ADDRESS_DETAILS as never)
                    }}
                >
                    <Text style={{ color: 'black', fontSize: 18 }}>Address Details</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default AdditionalInfo;