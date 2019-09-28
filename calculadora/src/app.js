import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Display from './components/display'
import Button from './components/button'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default function App() {

  const [ data, setData] = useState(initialState)
  
  function clearMemory() {
    setData({ ...initialState})
  }

  function addDigite(n) {

    if(n == '.' && data.displayValue.includes('.')){
        return
    }

    const clearDisp = data.displayValue === '0' || data.clearDisplay;
    const currentValue = clearDisp ? '' : data.displayValue;
    const dV = currentValue + n;

    console.log(dV)
    // const clearDisplay = false;
    

    setData({ ...data, "displayValue": "45"});
    console.log(data)

    if(n !== '.'){
        const i = data.current;
        const newValue = parseFloat(dV)
        const values = [data.values]
        values[i] = newValue
        setData({...data, values})
    }
  }

  const setOperation = (operation) => {
    // console.log(operation)
    if(data.current === 0){
      setData({...data,  operation: operation, current: 1, clearDisplay: true})
    }else{
      // console.log(data)
        const equals = operation === '='
        const currentOperations = data.operation

        const values = [...data.values]
        
        try{
            console.log(`${values[0]} ${currentOperations} ${values[1]}`)
            values[0] = eval( `${values[0]} ${currentOperations} ${values[1]}`)
        }catch(e){
            values[0] = data.values[0]
        }
        values[1] = 0

        // console.log(values[0], values[1])

        setData({
            displayValue: values[0],
            operation: equals ? null : operation,
            current: equals ? 0 : 1,
            clearDisplay: !equals,
            values
        })
    }
}










  return (
    <View style={styles.container}>
      <Display value={data.displayValue} />            
      <View style={styles.body}>
        <View style={ styles.rows }>
          <Button label="AC" click={clearMemory} />
          <Button label="+/-" click={() => alert("nada")} />
          <Button label="%" click={() => alert("nada")} />
          <Button label="-" click={setOperation} operation />
        </View>
        <View style={ styles.rows }>
          <Button label="7" click={addDigite} />
          <Button label="8" click={addDigite} />
          <Button label="9" click={addDigite} />
          <Button label="*" click={setOperation} operation />
        </View>
        <View style={ styles.rows }>
          <Button label="4" click={addDigite} />
          <Button label="5" click={addDigite} />
          <Button label="6" click={addDigite} />
          <Button label="-" click={setOperation} operation />
        </View>
        <View style={ styles.rows }>
          <Button label="1" click={addDigite} />
          <Button label="2" click={addDigite} />
          <Button label="3" click={addDigite} />
          <Button label="+" click={setOperation} operation />
        </View>
        <View style={ styles.rows }>
          <Button label="0" click={addDigite} doubleSpace />
          <Button label="." click={addDigite} />
          <Button label="=" click={setOperation} operation />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
  body: {
    flex: 3,
    backgroundColor: "#343f4b"
  },

  rows: {
    flex:1,
    flexDirection: "row"
  }
});