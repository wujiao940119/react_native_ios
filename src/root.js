import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FadeInView from './components/FadeInView';
import HomeView from './views/homeView';

// const HomeScreen = ({navigation}) => (
//     <FadeInView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'powderblue' }}>
//       <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
//       <Button onPress={() => navigation.navigate('Details')} title="Go to details"/>
//     </FadeInView>
// );

const DetailsScreen = () => (
  <FadeInView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'powderblue' }}>
    <Text>Details Screen</Text>
  </FadeInView>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeView,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default RootNavigator;