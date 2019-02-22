import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import {  StackActions, NavigationActions } from 'react-navigation'; 

import {  Card, ListItem, Button, Icon ,Avatar,SocialIcon } from 'react-native-elements';
import CustomNavigator from '../navigation/MainTabNavigator'


///////////////////component import////////////
import  LoginScreen from '../components/LoginScreen';
import  Form from '../components/Form';




export default class Login extends React.Component {
    
  static navigationOptions = {
    title: 'Login',
  };
     constructor(props) {
      super(props)    
     
     }
  
  _onPressLoginBtm(){
    console.log(this.props,"props");
        Alert.alert('You tapped the button!');

  }


  render() {

    return (
      <KeyboardAvoidingView behavior="padding"  style={styles.container}>

        {/* <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}> */}
          
          <View style={styles.header} >
            
             <Text style={styles.headerText}>Welcome To BallyHooo</Text> 
             <Text style={styles.headerText}> Login</Text>
                   
          </View>


          <View style={styles.inputs}>
           <Form />

         
          </View>
          <View>
          <Button style={styles.loginBtm}
            title="LogIn"
              type="outline"
               raised='true'
                  // onPress={this._onPressLoginBtm}
                  onPress={() => {
                  console.log (this.props.navigation.navigate('Main'))
                     
                  }}
                

            // loading
             
              // linearGradientProps={{
              //   colors: ['#555555', 'blue'],
              //   start: { x: 0, y: 0.7 },
              //   end: { x: 1, y: 0.2 },
            
              // }}

          />
          </View>
        {/* </ScrollView> */}

    
      </KeyboardAvoidingView>
    );
   
 }
}


const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#1B2727',
  },
  scrollContainer:{
      flex:1,
      color:'white',     
  },
  header:{
    justifyContent:"center",
    alignItems:"center",
    flexGrow:1,
    backgroundColor:'#1B2727',


  },
  inputs:{
    flex:1,
    padding:20,
    marginTop:50,
   
  },
  headerText:{
    fontSize:30,
    color:'white'
  },
  loginBtm:{
   
  }
  
});
