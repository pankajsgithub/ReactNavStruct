//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import {DrawerNavigator,StackNavigator} from 'react-navigation';
import HomeScreenTabNavigator from './HomeScreenTabNavigator';

// create a component

const InnerStackNavigator = new StackNavigator({
    TabNaviagtor: {
        screen: HomeScreenTabNavigator
    }
})

const AppDrawernavigator = new DrawerNavigator({
    HomeScreen: { screen: InnerStackNavigator }
}) 

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
export default AppDrawernavigator;
