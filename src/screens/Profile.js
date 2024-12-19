import * as React from 'react';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, {Ellipse, Path, Rect} from 'react-native-svg';

function ProfileScreen() {
  const navigation = useNavigation();

  const handlePress = url => {
    Linking.openURL(url);
  };

  return (
    <View style={{backgroundColor: '#ffffff', padding: 10, flex: 1}}>
      <View style={{backgroundColor: '#236bf4', height: 500, borderRadius: 40}}>
        <View
          style={{
            paddingLeft: 15,
            paddingTop: 20,
            paddingRight: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon name="arrow-back-outline" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="settings-outline" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',

            padding: 10,
          }}>
          <Image
            style={{
              height: 120,
              width: 120,
              borderRadius: 60,
              borderWidth: 5,
              borderColor: 'white',
            }}
            source={require('../image/Foto_Profile.jpg')}
          />
        </View>
        <View style={{paddingBottom: 35}}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              letterSpacing: 1,
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            Muhammad Yoanvari Al Farizi
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: '400',
              textAlign: 'center',
            }}>
            Lowokwaru, Malang
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#125eea',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
          }}>
          <View
            style={{
              paddingTop: 20,
              flex: 1,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <View style={{width: 100}}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 20,
                    padding: 5,
                    fontWeight: 'bold',
                  }}>
                  2 +
                </Text>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 13,
                    letterSpacing: 0.5,
                  }}>
                  Years Of Experience
                </Text>
              </View>
              <View style={{width: 100}}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 20,
                    padding: 5,
                    fontWeight: 'bold',
                  }}>
                  5 +
                </Text>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 13,
                    letterSpacing: 0.5,
                  }}>
                  Framework & Tech Stack Used
                </Text>
              </View>
              <View style={{width: 100}}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 20,
                    padding: 5,
                    fontWeight: 'bold',
                  }}>
                  3
                </Text>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 13,
                    letterSpacing: 0.5,
                  }}>
                  Successed Projects
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{width: 140}}>
                <TouchableOpacity
                  onPress={() => handlePress('https://github.com/Yoanvari')}>
                  <Text
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 20,
                      paddingVertical: 10,
                      color: '#125eea',
                      fontWeight: 'bold',
                      fontSize: 15,
                      textAlign: 'center',
                      letterSpacing: 0.5,
                    }}>
                    GitHub
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{width: 20}}></View>
              <View style={{width: 137}}>
                <TouchableOpacity
                  onPress={() =>
                    handlePress('https://yoanvari.my.canva.site/')
                  }>
                  <Text
                    style={{
                      backgroundColor: '#125eea',
                      borderRadius: 20,
                      borderWidth: 3,
                      borderColor: 'white',
                      paddingVertical: 8,
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 15,
                      textAlign: 'center',
                      letterSpacing: 0.5,
                    }}>
                    Portofolio
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{padding: 20}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '800',
            letterSpacing: 0.5,
            paddingBottom: 10,
          }}>
          About Me:
        </Text>
        <Text style={{textAlign: 'justify', fontSize: 15, fontWeight: '500'}}>
          I am an Informatics Engineering student with experience in developing
          web and mobile application as a full-stack developer. Proficient in
          using technologies such as Laravel, Flutter, and MySQL to create
          user-friendly and efficient solutions. Skilled in problem-solving and
          teamwork, with an interest in creating practical and efficient
          software. Committed to learning new technologies and contributing to
          innovative software solution.
        </Text>
      </View>
    </View>
  );
}

export default ProfileScreen;
