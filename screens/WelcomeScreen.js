//import liraries
import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, Dimensions,ImageBackground, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// create a component
class WelcomeScreen extends Component {
    
    static navigationOptions = {
        header: null
    }
     
    render() {
        return (
                <View style={{flex:1}}>
                    <ImageBackground 
                    resizeMode='cover'
                    //blurRadius={0.8}
                    style={{flex:1,width:Dimensions.get('window').width, height: Dimensions.get('window').height,}} 
                    source={require('../images/bk3.jpg')}>
                            <View style={{flex:1, alignItems:'center',backgroundColor:'transparent', margin: 20}}>
                                <View style={{flex:1,flexDirection:'row', alignItems:'flex-end',backgroundColor:'transparent'}}>
                                <Text style={{color: 'white',fontSize:35,fontStyle:'italic', fontWeight:'500'}}>Developer's Style</Text>
                                
                                </View>
                                <View style={{ flex:1,justifyContent:'center', backgroundColor:'transparent' }}>
                                    <Text style={{fontStyle:'italic',textAlign:'center',color: 'white',fontSize:18}}>"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - Patrick McKenzie</Text>
                                </View>
                                <View style={{flex:1, width:Dimensions.get('window').width,alignItems:'center',justifyContent:'center',marginTop:1, backgroundColor:'transparent', flexDirection:'row' }}>
                                    <TouchableOpacity style={{backgroundColor:'transparent', margin: 10}} onPress={()=>this.props.navigation.navigate('SignUpScreen')}>
                                    {/* <LinearGradient style={{borderRadius: 9,}} colors={['#1c92d2', '#f2fcfe']}> */}
                                    <View style={{elevation: 2,borderWidth:2,borderColor:'white',borderRadius: 9,width:Dimensions.get('window').width/3,backgroundColor:'transparent',padding: 7}}>
                                    <Text style={{textAlign:'center',fontWeight:'400',fontSize: 18,color:'white'}}>SIGN UP</Text>
                                    </View>
                                    {/* </LinearGradient> */}
                                    </TouchableOpacity>

                                    
                                    <TouchableOpacity style={{elevation:4,backgroundColor:'transparent', margin:10}}  onPress={()=>this.props.navigation.navigate('LoginScreen')}>
                                    {/* <LinearGradient style={{borderRadius: 9,}} colors={['#3a6186', '#89253e']}> */}
                                    <View style={{elevation: 2,borderWidth:2,borderColor:'white',borderRadius: 9,width:Dimensions.get('window').width/3,backgroundColor:'transparent',padding: 7}}>
                                    <Text style={{textAlign:'center',fontWeight:'400',fontSize: 18,color:'white'}}>SIGN IN</Text>
                                    </View>
                                    {/* </LinearGradient> */}
                                    </TouchableOpacity>
                                   
                                    
                                </View>
                                
                            </View>
                    </ImageBackground>
                </View>
                // <View style={styles.container}>
                // <LinearGradient colors={['#3a6186','#89253e']}>
                // <View style={{flex:1, width:Dimensions.get('window').width, height:Dimensions.get('window').height}}>
                //     <Text>HEY YA</Text>
                // </View>
                // </LinearGradient>
                // </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default WelcomeScreen;
