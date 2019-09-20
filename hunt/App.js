import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bem vindo ao React native</Text>
        <View style={styles.box} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 40,
    textAlign: "center",
    margin: 10
  },
  box: {
     height: 10,
     width: 10,
     backgroundColor: "#F00",
  }
}); 
