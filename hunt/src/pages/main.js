import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'

import api from '../services/api'

export default class main extends Component {

    static navigationOptions = {
        title: "JSRunt"
    }

    state = {
        docs: []
    } 

    componentDidMount() {
        this.loadProducts()
    }

    loadProducts = async () => {
        const response = await api.get('/products')
        const { docs } = response.data

        this.setState({ docs})
    }

    renderItem = ({item}) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>

            <TouchableOpacity onPress={() => {}}>
                <Text>Acessar</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View>
                <FlatList 
                    data= {this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
