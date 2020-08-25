import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
export default function Loader() {
  return (
    <ActivityIndicator size="large" color="#4e73df" style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
