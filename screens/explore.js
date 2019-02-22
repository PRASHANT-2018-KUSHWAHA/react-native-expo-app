import React from 'react';
import {  Card, ListItem, Button, Icon ,Avatar,SocialIcon, Rating, AirbnbRating} from 'react-native-elements';
import { Text, View, StyleSheet,ActivityIndicator,ScrollView,Image} from 'react-native';
import { MapViewAnimated } from 'react-native-maps';


export default class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
  };
      
  render() {


    return (
    
      <ScrollView style={styles.container}>
      <View style={{marginTop: 50}}>
        <View style={{alignItems:"center"}}> 
            <Image 
               style={{width: "90%", height: 210,borderRadius:20, }}
               source={require('../assets/images/food.jpg')}
            />
            <View style={{
              width:80,height:40,
              backgroundColor:"white",
              position:'absolute',left:40,top:20,
              borderRadius:15}}>

            </View>
            <View style={{
              width:40,height:40,
              backgroundColor:"white",
              position:'absolute',left:"80%",top:"70%",
              borderRadius:20}}>
            </View>

            <View style={{
              width:"50%",height:"40%",
              backgroundColor:'transparent',
              position:'absolute',left:"10%",top:"50%",
              }}>

              <Text style={{fontFamily:'vinchand',fontSize:15,fontWeight:"bold"}}>J P NAGAR</Text>
              <Text style={{fontFamily:'wabene',fontSize:25,fontWeight:"bold"}}>Rumfold Hotel</Text>
              <View>
                <Text>2.9 KM</Text>

              </View>
            </View>

           
        </View>
        <View style={{marginTop:100}}>
            <Image 
               style={{width: "100%", height: 170}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
               source={require('../assets/images/food.jpg')}
            />
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
              </Text>
              <Button
                title='btm'
              />
           
        </View>
        <Card>
            <Image 
               style={{width: "100%", height: 170}}
               source={require('../assets/images/food.jpg')}
            />
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
              </Text>
           
        </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
