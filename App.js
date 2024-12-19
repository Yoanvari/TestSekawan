import * as React from 'react';
import {View, Text} from 'react-native';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import DetailScreen from './src/screens/Detail';
import ProfileScreen from './src/screens/Profile';
import ProductScreen from './src/screens/Product';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {headerShown: false},
  screens: {
    Home: HomeScreen,
    Detail: DetailScreen,
    Profile: ProfileScreen,
    Product: ProductScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
