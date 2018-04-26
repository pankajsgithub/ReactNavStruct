//import liraries
import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// create a component
class WelcomeScreen extends Component {
    
    static navigationOptions = {
        header: null
    }
     
    render() {
        return (
            <View style={styles.container}>
                <Button color='transparent' title="Log in" onPress={()=>this.props.navigation.navigate('LoginScreen')}/>
                <Button color='transparent' title="Sign Up" onPress={()=>this.props.navigation.navigate('SignUpScreen')} />
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
export default WelcomeScreen;
