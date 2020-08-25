import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function NavigationBlock({title, navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.icon}>
        <Icon name="bars" color="white" size={25} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Text style={{color: 'blue'}}>asdf</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: '700',
  },
  icon: {
    // position: 'absolute',
    // left: 0,
    // top: 0,
  },
});
