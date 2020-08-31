import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function NavigationBlock({title, navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
        {/* <Icon name="arrow-left" color="white" size={24} /> */}
        <Image
          source={require('../assets/images/arrow-left.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Text style={{color: 'transparent'}}>asdf</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(169, 169, 169, 0.7)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
    // fontFamily: '',
    letterSpacing: 0.5,
  },
  arrowImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
