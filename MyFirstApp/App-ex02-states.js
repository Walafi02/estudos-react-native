import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Blink extends Component {
  componentDidMount(){
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000)
  }

  state = {
    isShowingText: true
  }

  render() {
    if(!this.state.isShowingText){
      return null
    }

    return (
      <Text>{this.props.text}</Text>
    )
  }
}

export default class MyFirstApp extends Component {
  render() {

    return (
      <View>
        <Blink text='Hello texte' />
        <Blink text='pode ser que tudo dê certo' />
        <Blink text='ou que nada dê certo' />
      </View>
    )
  }
}