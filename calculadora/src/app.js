import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Display from './components/display';
import Button from './components/button';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
};

export default function App() {
    const [dados, setDados] = useState({...initialState});

    function chageValue() {
        const i = dados.current;
        const values = [...dados.values];
        console.log(values[i]);
        values[i] = dados.values[i] * -1;
        setDados({...dados, values, displayValue: values[i]});
    }

    function clearMemory() {
        setDados({...initialState});
    }

    function addDigite(n) {
        if (n === '.' && dados.displayValue.includes('.')) {
            return;
        }
        const clearDisp = dados.displayValue === '0' || dados.clearDisplay;
        const currentValue = clearDisp ? '' : dados.displayValue;
        const displayValue = currentValue + n;

        const values = [...dados.values];
        if (n !== '.') {
            const i = dados.current;
            const newValue = parseFloat(displayValue);
            values[i] = newValue;
        }
        setDados({...dados, displayValue, clearDisplay: false, values});
    }

    function setOperation(operation) {
        if (dados.current === 0) {
            setDados({...dados, operation, current: 1, clearDisplay: true});
        } else {
            const equals = operation === '=';
            const currentOperations = dados.operation;
            const values = [...dados.values];

            try {
                values[0] = eval(
                    `${values[0]} ${currentOperations} ${values[1]}`,
                );
            } catch (e) {
                values[0] = dados.values[0];
            }
            values[1] = 0;
            setDados({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values,
            });
        }
    }

    return (
        <View style={styles.container}>
            <Display value={dados.displayValue} />
            <View style={styles.body}>
                <View style={styles.rows}>
                    <Button label="AC" click={clearMemory} />
                    <Button label="+/-" click={chageValue} />
                    <Button label="%" click={() => alert('nada')} />
                    <Button label="-" click={setOperation} operation />
                </View>
                <View style={styles.rows}>
                    <Button label="7" click={addDigite} />
                    <Button label="8" click={addDigite} />
                    <Button label="9" click={addDigite} />
                    <Button label="*" click={setOperation} operation />
                </View>
                <View style={styles.rows}>
                    <Button label="4" click={addDigite} />
                    <Button label="5" click={addDigite} />
                    <Button label="6" click={addDigite} />
                    <Button label="-" click={setOperation} operation />
                </View>
                <View style={styles.rows}>
                    <Button label="1" click={addDigite} />
                    <Button label="2" click={addDigite} />
                    <Button label="3" click={addDigite} />
                    <Button label="+" click={setOperation} operation />
                </View>
                <View style={styles.rows}>
                    <Button label="0" click={addDigite} doubleSpace />
                    <Button label="." click={addDigite} />
                    <Button label="=" click={setOperation} operation />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    body: {
        flex: 3,
        backgroundColor: '#343f4b',
    },

    rows: {
        flex: 1,
        flexDirection: 'row',
    },
});
