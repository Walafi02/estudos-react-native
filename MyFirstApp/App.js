import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View, FlatList, SectionList } from 'react-native'



export default class MyFirstApp extends Component {

	render() {
		return (
			<ScrollView>
				<View style={styles.container}>
					<SectionList
						sections={[
							{title: '0', data: ['alan', 'ronaldo', 'fernando']},
							{title: '1', data: ['roger', 'luan', 'lucar', 'julio', 'walafi']}
						]}
						renderItem= {({item}) => <Text style={styles.item}>{item}</Text>}
						renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
						keyExtractor={({item, index}) => index}
					/>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22
	},
	sectionHeader: {
		paddingTop: 2,
		 paddingLeft: 10,
		 paddingRight: 10,
		 paddingBottom: 2,
		 fontSize: 14,
		 fontWeight: "bold",
		 backgroundColor: 'rgba(247,247,247,1.0)',
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44
	}
})


// import React, { Component } from 'react'
// import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'



// export default class MyFirstApp extends Component {

// 	render() {
// 		return (
// 			<ScrollView>
// 				<View style={styles.container}>
// 					<FlatList 
// 						data={[
// 							{key: 'Devin'},
// 							{key: 'Dan'},
// 							{key: 'Dominic'},
// 							{key: 'Jackson'},
// 							{key: 'James'},
// 							{key: 'Joel'},
// 							{key: 'John'},
// 							{key: 'Jillian'},
// 							{key: 'Jimmy'},
// 							{key: 'Julie'}
// 						  ]}
// 						renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
// 					/>
// 				</View>
// 			</ScrollView>
// 		)
// 	}
// }



// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		paddingTop: 22
// 	},
// 	item: {
// 		padding: 10,
// 		fontSize: 18,
// 		height: 44
// 	}
// })