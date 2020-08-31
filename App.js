import React from 'react';
import {StyleSheet} from 'react-native';

import SQLite from 'react-native-sqlite-storage';
import StackNav from './src/navigation/StackNav';

global.db = SQLite.openDatabase(
  {
    name: 'SQLite',
    location: 'default',
    createFromLocation: '~data.sqlite',
  },
  () => {},
  (error) => {
    // console.log('ERROR: ' + error);
  },
);

export default function App() {
  return <StackNav />;
}

const styles = StyleSheet.create({});
