import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
})

export default class MyFirstApp extends Component {
  render() {

    return (
      <View>
        <Text style={styles.red}>Just Red</Text>
        <Text style={styles.bigBlue}>Just BigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, the red</Text>
        <Text style={[styles.red, styles.bigBlue]}>Red, the bigBlue</Text>
      </View>
    )
  }
}