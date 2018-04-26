//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button color='transparent' title="Complete Login" 
                onPress={()=>this.props.navigation.navigate('DrawerNavigator')}
                />
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
export default LoginScreen;
