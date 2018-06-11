//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// create a component
class SignUpScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
            <LinearGradient direction="ltr" colors={[ '#d7d2cc','#304352']}>
                <View style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height}}>
                <Text>SIGN UP</Text>
                </View>
            </LinearGradient>
            </View>
            
        
        );
    }
}

//make this component available to the app
export default SignUpScreen;
