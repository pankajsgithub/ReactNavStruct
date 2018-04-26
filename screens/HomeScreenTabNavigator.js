//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {TabNavigator,TabBarBottom} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import ScreenOne from './TabNavigator/ScreenOne';
import ScreenTwo from './TabNavigator/ScreenTwo';

// create a component

export default class AppTabnavigator extends Component {
    static navigationOptions = ({navigation})=>{
        return{
            headerLeft:(
                <View style={{padding:10}}>
                    <Icon name="md-menu" color='#2c3e50' size={24} onPress={()=>navigation.navigate('DrawerOpen')} />
                </View>
            )
        }
    }
    render(){
        return(
            <HomeScreenTabNavigator screenProps={{ navigation: this.props.navigation}}/>
        )
    }
}

const HomeScreenTabNavigator = new TabNavigator({
    ScreenOne:{
        screen:ScreenOne,
        navigationOptions:{
            tabBarLabel:'Feed',
            tabBarIcon:()=>
                <Icon name="md-compass" size={20}/>,
            
        },
    },
    ScreenTwo:{
        screen:ScreenTwo,
        navigationOptions:{
            tabBarLabel:'Check',
            tabBarIcon: () => 
                <Icon name="md-at" size={20}/>,
            
        },
    },
},
{
    tabBarOptions:{
        showIcon:true,
        showLabel:true
    },
    tabBarComponent:TabBarBottom,
    tabBarPosition:'bottom',
    //animationEnabled:true,
   // swipeEnabled:true
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
