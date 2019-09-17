import React, { Component } from 'react'
import { View } from 'react-native'



export default class MyFirstApp extends Component {
  render() {

    return (
      <View style={{
        flex: 1,
        // flexDirection: 'column'
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue', alignSelf:"center"}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue', alignSelf: 'flex-end'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue', alignSelf: 'stretch'}} />
      </View>


      // <View style={{flex: 1}}>
      //   <View style={{flex: 1}}>
      //     <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
      //     <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}/>
      //     <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
      //   </View>
      //   <View style={{flex: 1, flexDirection: "row"}}>
      //     <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
      //     <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}/>
      //     <View style={{width: 50, height: 50, backgroundColor: 'green'}} /> 
      //   </View>

      //   <View style={{flex: 1, flexDirection: "row-reverse"}}>
      //     <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
      //     <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}/>
      //     <View style={{width: 50, height: 50, backgroundColor: 'green'}} /> 
      //   </View>

      //   <View style={{flex: 1, flexDirection: "column"}}>
      //     <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
      //     <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}/>
      //     <View style={{width: 50, height: 50, backgroundColor: 'green'}} /> 
      //   </View>

      //   <View style={{flex: 1, flexDirection: "column-reverse"}}>
      //     <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
      //     <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}/>
      //     <View style={{width: 50, height: 50, backgroundColor: 'green'}} /> 
      //   </View>
      // </View>


      // <View style={{flex:1}}>
      //   <View style={{flex: 1, backgroundColor: 'red'}} />
      //   <View style={{flex: 1, backgroundColor: 'yellow'}}/>
      //   <View style={{flex: 1, backgroundColor: 'green'}} />
      // </View>

      // <View>
      //   <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
      //   <View style={{width: 100, height: 100, backgroundColor: 'black'}}/>
      //   <View style={{width: 150, height: 150, backgroundColor: 'skyblue'}} />
      // </View>
    )
  }
}