import React from 'react';
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

export default class App extends React.Component {
    state = {...initialState};

    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.addDigite = this.addDigite.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.chageValue = this.chageValue.bind(this);
    }

    chageValue() {
        const i = this.state.current;
        const values = [...this.state.values];
        values[i] = this.state.values[i] * -1;
        this.setState({values, displayValue: values[i]});
    }

    clearMemory() {
        this.setState({...initialState});
    }

    addDigite(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return;
        }

        const clearDisp =
            this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisp ? '' : this.state.displayValue;
        const displayValue = currentValue + n;

        this.setState({displayValue, clearDisplay: false});

        if (n !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({values});
        }
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({operation, current: 1, clearDisplay: true});
        } else {
            const equals = operation === '=';
            const currentOperations = this.state.operation;
            const values = [...this.state.values];

            try {
                values[0] = eval(
                    `${values[0]} ${currentOperations} ${values[1]}`,
                );
            } catch (e) {
                values[0] = this.state.values[0];
            }
            values[1] = 0;

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values,
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Display value={this.state.displayValue} />
                <View style={styles.body}>
                    <View style={styles.rows}>
                        <Button label="AC" click={this.clearMemory} />
                        <Button label="+/-" click={this.chageValue} />
                        <Button label="%" click={() => alert('nada')} />
                        <Button label="-" click={this.setOperation} operation />
                    </View>
                    <View style={styles.rows}>
                        <Button label="7" click={this.addDigite} />
                        <Button label="8" click={this.addDigite} />
                        <Button label="9" click={this.addDigite} />
                        <Button label="*" click={this.setOperation} operation />
                    </View>
                    <View style={styles.rows}>
                        <Button label="4" click={this.addDigite} />
                        <Button label="5" click={this.addDigite} />
                        <Button label="6" click={this.addDigite} />
                        <Button label="-" click={this.setOperation} operation />
                    </View>
                    <View style={styles.rows}>
                        <Button label="1" click={this.addDigite} />
                        <Button label="2" click={this.addDigite} />
                        <Button label="3" click={this.addDigite} />
                        <Button label="+" click={this.setOperation} operation />
                    </View>
                    <View style={styles.rows}>
                        <Button label="0" click={this.addDigite} doubleSpace />
                        <Button label="." click={this.addDigite} />
                        <Button label="=" click={this.setOperation} operation />
                    </View>
                </View>
            </View>
        );
    }
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
