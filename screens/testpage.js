import React from 'react';
import {  Card, ListItem, Button, Icon ,Avatar,SocialIcon, Rating, AirbnbRating} from 'react-native-elements';
import { Text, View, StyleSheet,ActivityIndicator,ScrollView,Image,TouchableHighlight,
    TouchableOpacity} from 'react-native';
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
                    var images = 'food2.jpg';
                    let index = 0;
                    var cards =   
                    <View>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('cardDetails')}>

                    <View style={{alignItems:"center",marginTop: 30}}> 

               
                        <Image 
                            style={{width: "90%", height: 210,borderRadius:10, }}
                            source={require('../assets/images/'+images)}

                         />

                
                    <View style={{
                      width:50,height:50,
                      backgroundColor:'black',
                      opacity:1,
                      borderRadius:25,justifyContent:"center",alignItems:"center",
                      position:'absolute',left:"80%",top:"5%",
                    }}>

                            <Icon  style={{width:10,height:10}}
                              
                              name='heart'
                              type='font-awesome'
                              color='#f50'
                              onPress={() => this.props.navigation.navigate('cardDetails')}

                              />
                            <Text style={{color:'white',justifyContent:"center"}}> 89%</Text>
                    </View>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

                  </View>
                  </TouchableOpacity>
                    <View style={{width:"90%",justifyContent: 'space-between',left:20,borderRadius:10}}>
                       <View style={{flexDirection:"row",paddingLeft:8}}>
                        <Text style={{color:'gray'}}>#Infinity_Night</Text>
                           <View style={{left:85,flexDirection:"row"}}> 
                             <Rating style={{}}
                                imageSize={20}
                                readonly
                                startingValue= '3.5'
                                ratingBackgroundColor='gray'
                              />
                              <Text>(851)</Text>
                           </View>
                        
                        </View>    
                        <View style={{width:250,marginTop:10}}>
                          <View style={{paddingLeft:8}}>
                             <Text style={{fontFamily:"wabene",fontSize:15,lineHeight:20}}>Quiet Clubbing VIP Heated RoofTop Party</Text> 
                          </View>   
                          <View style={{flexDirection:"row",marginTop:5}}>
                                  <Icon
                                    name='sc-telegram'
                                    type='evilicon'
                                    color='black'
                                  />
                                  <Text>505, 55th main, J P Nagar</Text>
                              
                          <View style={{flexDirection:"row",left:50}}>
                                  <Icon style={{}}
                                    name='map-marker'
                                    type='font-awesome'
                                    color='black'
                                    size={20}
                                  />
                                  <Text style={{paddingLeft:5}}>2.9 KM</Text>
                          </View>      
                          </View>           
                        </View>                
                    </View>


                  </View>
                  


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
