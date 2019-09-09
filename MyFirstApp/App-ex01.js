
import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

class Greeting extends Component{
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hellooo {this.props.name}</Text>
      </View>
    )
  }
}

export default class MyFirstApp extends Component {
  render() {

    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name="Ana"/>
        <Greeting name="Walafi"/>
        <Greeting name="Robson"/>
      </View>
    )





    // let pic = {
    //   uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    // }

    // return (
    //   <Image source={pic} style={{width: 193, height: 110}} />
    // )


    // return (
    //   <View  style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //     <Text>My First App</Text>
    //   </View>
    // )
  }
}