import React from 'react';
import {StyleSheet} from 'react-native';
import MyDrawerNav from './src/navigation/MyDrawerNav';

import SQLite from 'react-native-sqlite-storage';

global.db = SQLite.openDatabase(
  {
    name: 'SQLite',
    location: 'default',
    createFromLocation: '~data.sqlite',
  },
  () => {},
  (error) => {
    console.log('ERROR: ' + error);
  },
);

export default function App() {
  return <MyDrawerNav />;
}

const styles = StyleSheet.create({});
