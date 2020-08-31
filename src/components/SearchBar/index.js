import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Fontisto';
import {styles} from './styles';

export default function SearchBar({navigation, pathScreen, onChangeText}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.title}>
        {pathScreen === 'UrduUzbek' ? "O'zbek-Urdu" : "Urdu-O'zbek"}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(`${pathScreen}`)}
        style={styles.buttonWrapper}>
        {/* <Icon name="arrow-swap" style={styles.buttonText} /> */}
        <Image
          source={require('../../assets/images/arrow-swap.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
    </View>
  );
}
