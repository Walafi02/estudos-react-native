import { createStackNavigator } from 'react-navigation'

import Main from './pages/main'
import Product from './pages/product'

export default createStackNavigator({
    Main,
    Product
}, {
    navigationOptions: {
        headerTitleStyle: {
            textAlign: "center",
            justifyContent: 'center',
            flex: 1,
            fontWeight: 'bold',
            color: "#FFF"
        },
        headerStyle: {
            backgroundColor: "#DA552F",
        },
        // headerTintColor: "#FFF"
    },
})