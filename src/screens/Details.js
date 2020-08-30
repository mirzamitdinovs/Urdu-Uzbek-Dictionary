import React from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import Loader from '../components/Loader';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    const {urdu, uzbek} = this.props.route.params;
    return this.state.isLoading ? (
      <Loader />
    ) : (
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.text}>{urdu}</Text>
          <Text style={styles.text}>{uzbek}</Text>
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
