import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export default function MainScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.navbarWrapper}>
        <View style={styles.wrapper}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.navbarImage}
          />
          <Text style={styles.navbarText}>Urdu-Uzbek Dictionary</Text>
        </View>
        {/* <Text>Icon</Text> */}
      </View>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UrduUzbek')}
          style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Urdu — O'zbek</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('UzbekUrdu')}
          style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>O'zbek — Urdu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
