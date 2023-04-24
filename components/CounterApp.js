import React, {Component} from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class CounterApp extends Component {
    render() {
        return (
            <View style="styles.container">
                <Text style={styles.text}>   {this.props.counter}    </Text>
                <View style={{
                    flexDirection: 'row',
                    width: "100%",
                    justifyContent: 'center',
                    marginTop: 200
                }}>
                    <TouchableOpacity style={{...styles.button, backgroundColor: 'limegreen'}} onPress={() => this.props.increaseCounter()}>
                        <Text style={{fontSize: 30}}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.button, backgroundColor: 'red'}} onPress={() => this.props.decreaseCounter()}>
                        <Text style={{fontSize: 30}}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.button, justifyContent: 'center', backgroundColor: 'lightgray'}} onPress={() => this.props.reset()}>
                        <Text style={{fontSize: 30}}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
        decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
        reset: () => dispatch({type: 'RESET'})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 100,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button: {
        width: 100,
        height: 50,
        margin: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 2
    },
});