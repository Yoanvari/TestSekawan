import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#191919'}}>
      <View
        style={{
          backgroundColor: '#191919',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            padding: 15,
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            letterSpacing: 1.5,
          }}>
          Profile Page
        </Text>
        <Icon name="arrow-back-outline" size={30} color="#191919" />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#222222',
          justifyContent: 'center',
        }}></View>
    </View>
  );
}

export default ProfileScreen;
