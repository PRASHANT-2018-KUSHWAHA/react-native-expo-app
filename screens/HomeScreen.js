import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { createAppContainer, createStackNavigator,createSwitchNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

// export class HomeScreen extends React.Component {
//   static navigationOptions = {
//     header: null,
//   };

//   render() {
//     // return (
//     //   <View style={styles.container}>
//     //     <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
//     //       <Text> Home Screen</Text>
//     //     </ScrollView>

//     //   </View>
//     // );

//     return (
      
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }



export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'HOme',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

 export class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

// export default {
  // HomeScreen,
  // DetailsScreen,
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});



