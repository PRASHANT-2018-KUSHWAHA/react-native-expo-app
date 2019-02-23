import React from 'react';
import {  Card, ListItem, Button, Icon ,Avatar,SocialIcon, Rating, AirbnbRating} from 'react-native-elements';
import { Text, View, StyleSheet,ActivityIndicator,ScrollView,Image,TouchableHighlight} from 'react-native';
import { MapViewAnimated } from 'react-native-maps';


export class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }
      

gettingcards(){
                    var cardsArray=[];
                    var imagesArray=['food1.jpg','food2.jpg','food3.jpg','food4.jpg','food.jpg'];
                    var images = 'food4.jpg';
                    let index = 0;
                    var cards =   
              <TouchableHighlight  onPress={() => this.props.navigation.navigate('cardDetails')}>

                    <View style={{alignItems:"center",marginTop: 30}}> 
               
                        <Image 
                            style={{width: "90%", height: 210,borderRadius:20, }}
                            source={require('../assets/images/'+images)}

                         />

                    <View style={{
                      width:80,height:40,
                      alignItems:"center",
                      justifyContent:'center',
                      backgroundColor:"white",
                      opacity:0.8,
                      position:'absolute',left:40,top:20,
                      borderRadius:15}}>

                          <View style={{flexDirection:"row"}}>
                                  <Icon
                                    name='sc-telegram'
                                    type='evilicon'
                                    color='black'
                                  />
                                          
                                  {/* <Image style={{width:30,height:30}} source={require('../assets/images/location.svg')} /> */}
                                  <Text style={{fontSize:15}}>2.9 KM</Text>
                          </View>

                   </View>
                    <View style={{
                      width:50,height:50,
                      backgroundColor:'black',
                      opacity:0.8,
                      borderRadius:25,justifyContent:"center",alignItems:"center",
                      position:'absolute',left:"80%",top:"75%",
                    }}>

                            <Icon  style={{width:10,height:10}}
                              
                              name='heart'
                              type='font-awesome'
                              color='#f50'
                              onPress={() => this.props.navigation.navigate('cardDetails')}

                              />
                            <Text style={{color:'white',justifyContent:"center"}}> 89%</Text>
                    </View>

                    <View style={{
                      width:"50%",height:"35%",
                      backgroundColor:'white',
                      opacity:0.7,
                      justifyContent:'center',
                      position:'absolute',left:"10%",top:"60%",
                      borderRadius:15,
                      padding:10,

                      }}>

                      <Text style={{fontFamily:'vinchand',fontSize:15,fontWeight:"bold"}}>J P NAGAR</Text>
                      <Text style={{fontFamily:'wabene',fontSize:17,}}>Rumfold Hotel</Text>
                      
                    </View>


                  </View>
                  
             </TouchableHighlight>


                  for (var i=0; i < 5; i++) {

    
                   console.log (images);
                   
                     cardsArray .push(
                             cards 
                  );
                  // index++;
                  }

                  console.log("here is your items");
                  return cardsArray;

}

  render() {

    var cards = this.gettingcards();


    return (
    
      <ScrollView style={styles.container}>
      <View style={{marginBottom:50}}>
        

           {cards}



        {/* <View style={{marginTop:100}}>
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
           
        </View> */}
        {/* <Card>
            <Image 
               style={{width: "100%", height: 170}}
               source={require('../assets/images/food.jpg')}
            />
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
              </Text>
           
        </Card> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:0,
    backgroundColor: '#fff',
  },
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////page 2/////////////////

export class cardDetails extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#efefef" }}>
        <Text>Cards Details </Text>
      </View>
    );
  }
}
