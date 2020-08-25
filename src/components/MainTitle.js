import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function MainTitle({title}) {
  return (
    <View>
      <Text style={styles.mainTitle}>{title}</Text>
      <View style={styles.titleLine}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 28,
    alignSelf: 'center',
    color: 'black',
    borderBottomColor: 'grey',
    borderBottomWidth: 1.5,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingBottom: 5,
  },
});
