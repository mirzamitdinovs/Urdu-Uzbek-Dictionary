import React from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import Loader from '../components/Loader';
import {FlatList} from 'react-native-gesture-handler';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    const {urdu, uzbek, translation} = this.props.route.params;
    const translations = translation.split(';');
    return this.state.isLoading ? (
      <Loader />
    ) : (
      <SafeAreaView>
        <ScrollView>
          <Text style={[styles.text]}>{urdu}</Text>
          {/* <Text style={[styles.text, {textAlign: 'right'}]}>{uzbek}</Text> */}
          {translations.map((a) => (
            <Text style={styles.text}>{a.trim()}</Text>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    margin: 20,
    fontSize: 20,
  },
});

export default Details;
