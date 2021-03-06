import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'



export default class MyFirstApp extends Component {
	
	constructor(props) {
		super(props)
		this.state = { text: '' }
	}
	
	render() {
		return (
			<View style={{padding: 10}}>
				<TextInput 
					style={{height: 40}}
					placeholder="Type here to Translate!"
					onChangeText = {(text) => this.setState({text})}
					value={this.state.text}
				/>
				<Text style={{padding: 10, fontSize: 42}}>
					{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
				</Text>
			</View>
		)
	}
}