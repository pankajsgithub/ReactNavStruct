import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import DrawerNavigator from './screens/DrawerNavigator';


export default class App extends Component {
  render() {
    return (
      <AppStackNaviagtor/>
    );
  }
}

const AppStackNaviagtor = new StackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  LoginScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen },
  DrawerNavigator: { screen: DrawerNavigator,
  navigationOptions: {
    header:null
  }}
},{
  navigationOptions: {
    gesturesEnabled: false
  }
}) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
