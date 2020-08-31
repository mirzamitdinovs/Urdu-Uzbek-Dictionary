import React from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import NavigationBlock from '../components/NavigationBlock';

class Details extends React.Component {
  render() {
    const {urdu, uzbek, translation} = this.props.route.params;
    const translations = translation.split(';');
    return (
      <SafeAreaView
        style={{
          backgroundColor: 'lightgrey',
          flex: 1,
        }}>
        <NavigationBlock title="Batafsil" navigation={this.props.navigation} />

        <ScrollView>
          <View style={styles.container}>
            <Text style={[styles.title]}>{urdu}</Text>
            {translations.map((a) => (
              <Text style={styles.text}>{a.trim()}</Text>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginRight: 10,
    paddingRight: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  text: {
    margin: 20,
    fontSize: 20,
    textAlign: 'left',
  },
});

export default Details;
