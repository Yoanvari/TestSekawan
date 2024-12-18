import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#191919'}}>
      <StatusBar backgroundColor={'#191919'} />
      <View style={{backgroundColor: '#191919'}}>
        <Text
          style={{
            color: 'white',
            padding: 15,
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            letterSpacing: 1.5,
          }}>
          Home Page
        </Text>
      </View>
      <View
        style={{flex: 1, backgroundColor: '#222222', justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Product')}>
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              letterSpacing: 0.5,
              textAlign: 'center',
            }}>
            PRODUCT
          </Text>
        </TouchableOpacity>
        <View style={{height: 20}}></View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}>
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              letterSpacing: 0.5,
              textAlign: 'center',
            }}>
            PROFILE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 15,
    marginHorizontal: 60,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});

export default HomeScreen;
