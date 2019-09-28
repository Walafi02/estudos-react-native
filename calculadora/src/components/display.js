import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Display = (props) => {
    return (
        <View style={styles.display}>
            <Text style={styles.textDisplay}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        flex: 1,
        backgroundColor: "#343f4b",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    textDisplay: {
        color: "#FFF",
        fontSize: 32,
        paddingRight: 10,
        paddingBottom: 15,
    }
})

export default Display