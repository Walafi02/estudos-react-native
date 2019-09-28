import React from 'react'
import { Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'

const button = (props) => {

    return (
        <TouchableHighlight
            onPress={() => props.click(props.label)}
            style={[
                styles.buttons, 
                props.operation ? {backgroundColor: "#fa8231"} : {backgroundColor: "#f0f0f0"},
                props.doubleSpace ? {flex: 2} : {flex: 1}
            ]}>
            <Text
                style={[
                        styles.textButtons, 
                        props.operation ? {color: "#ffffff"} : {color: "#343f4b"}, 
                    ]}>
                {props.label}
            </Text>
        </TouchableHighlight>


        // <TouchableOpacity 
        //     onPress={() => props.click(props.label)}
        //     style={[
        //             styles.buttons, 
        //             props.operation ? {backgroundColor: "#fa8231"} : {backgroundColor: "#f0f0f0"},
        //             props.doubleSpace ? {flex: 2} : {flex: 1}
        //         ]}>
        //     <Text
        //         style={[
        //                 styles.textButtons, 
        //                 props.operation ? {color: "#ffffff"} : {color: "#343f4b"}, 
        //             ]}>
        //         {props.label}
        //     </Text>
        // </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttons: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 2,
        marginTop: 2,
        marginLeft: 1,
        marginRight: 1,
        borderRadius: 5
    },
    textButtons: {
        fontSize: 24,
        
    },
})

export default button