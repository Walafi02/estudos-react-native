import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'

import api from '../services/api'

export default class main extends Component {

    static navigationOptions = {
        title: "JSRunt"
    }

    state = {
        productInfo : {},
        docs: [],
        pages: 1
    } 

    componentDidMount() {
        this.loadProducts()
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`)
        const { docs, ...productInfo } = response.data

        this.setState(
            { docs: [...this.state.docs, ...docs], 
            productInfo,
            page
        })
        // docs: [...this.state.docs, ...docs] pega tudo que tem em docs e adiciona o q vem da request no final
    }

    loadMore = () => {
        const { page, productInfo } = this.state

        if(page === productInfo.pages) return;

        const pageNumber = page + 1

        this.loadProducts(pageNumber)
    }

    renderItem = ({item}) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDesctiption}>{item.description}</Text>

            <TouchableOpacity 
                style={styles.productButton} 
                onPress={() => {
                    this.props.navigation.navigation('Product')
                }}>
                    <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    contentContainerStyle={styles.list}
                    data= {this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1} //percentual de carregamento do scroll infinito
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },

    list: {
        padding: 20
    },
    
    productContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },

    productDesctiption: {
        fontSize: 16,
         color: "#999",
         marginTop: 5,
         lineHeight: 24
    },

    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552f",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    productButtonText: {
        fontSize: 16,
        color: "#da552f",
        fontWeight: "bold"
    }

})
