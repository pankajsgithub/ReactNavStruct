//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

// create a component
class ScreenOne extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button color='transparent' title="Log Out" onPress={()=>this.props.screenProps.navigation.navigate('WelcomeScreen')}/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ScreenOne;
