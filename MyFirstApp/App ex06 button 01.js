import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'



export default class MyFirstApp extends Component {

	onPressButton() {
		alert('voce me prescionou')
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.buttonContainer}>
					<Button 
						onPress={this.onPressButton}
						title="Press me"
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Button 
						onPress={this.onPressButton}
						title="Press me"
						color="#841584"
					/>
				</View>
				<View style={styles.alternativeLayoutButtonContainer}>
					<Button
						onPress={this.onPressButton}
						title="This looks great"
					/>
					<Button
						onPress={this.onPressButton}
						title="ok"
						color="#841584"
					/>
				</View>
			</View>
		)
	}
}



const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: "center"
	},
	buttonContainer: {
		margin: 20
	},
	alternativeLayoutButtonContainer: {
		margin: 20,
		flexDirection: "row",
		justifyContent: "space-between"
	}
})