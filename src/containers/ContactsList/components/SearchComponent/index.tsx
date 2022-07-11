import alertsProviderReducer from 'providers/AlertsProvider/reducer'
import React from 'react'
import { View, StyleSheet } from "react-native"
import { Input } from "react-native-elements"

const SearchComponent = ({ onBlur, onChangeText, onFocus, value, onEndEditing }: { onBlur: any, onChangeText: any, onFocus?: any, value: any, onEndEditing?: any }) => {
    return (
        <View style={styles.input}>
            <Input
                autoCompleteType={"name"}
                placeholder='Search by phone, email, name '
                onBlur={onBlur}
                onChangeText={onChangeText}
                leftIcon={{ type: 'Feather', name: 'search' }}
                value={value}
                onFocus={onFocus}
                onEndEditing={onEndEditing}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row'
    }
})
export default SearchComponent