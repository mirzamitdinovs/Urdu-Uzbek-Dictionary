import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FindInUrdu from '../components/FindInUrdu';
import SearchBar from '../components/SearchBar';

class UrduUzbek extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      results: [],
      selected_dict_id: '',
    };
  }

  componentDidMount() {
    FindInUrdu((rows) => {
      this.setState({results: rows});
    });
  }

  onChangeText = (text) => {
    this.setState({
      inputText: text,
    });

    FindInUrdu((rows) => {
      this.setState({results: rows});
    }, text);
  };

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <View>
          <SearchBar
            navigation={navigation}
            pathScreen="UzbekUrdu"
            onChangeText={this.onChangeText}
          />
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Qidiruv..."
              placeholderTextColor="black"
              style={styles.navbarInput}
              underlineColorAndroid="black"
              onChangeText={(text) => this.onChangeText(text)}
            />
            <Icon name="search" style={styles.navbarIcon} />
          </View>
          <FlatList
            style={styles.content}
            data={this.state.results}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <TouchableHighlight
                onPress={() => {
                  navigation.navigate('Details', {
                    urdu: item.urdu,
                    translation: item.translate,
                    pathScreen: 'UzbekUrdu',
                  });

                  this.setState({
                    ...this.state,
                    selected_dict_id: item.id,
                  });
                }}>
                <View style={styles.contentWrapper}>
                  <Text style={styles.contentTextRight}>{item.urdu}</Text>
                  <Text numberOfLines={1} style={styles.contentTextLeft}>
                    {item.uzbek}
                  </Text>
                </View>
              </TouchableHighlight>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default UrduUzbek;
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  content: {
    paddingVertical: 5,
  },
  contentWrapper: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 10,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  contentTextLeft: {
    fontSize: 15,
    overflow: 'hidden',
    width: '80%',
  },
  contentTextRight: {
    fontSize: 25,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  navbarInput: {
    width: screenWidth * 0.7,
    color: 'black',
    fontSize: 20,
    paddingLeft: 10,
  },
  navbarIcon: {
    fontSize: 20,
    position: 'absolute',
    right: 15,
    top: 15,
    color: 'rgba(0,0,0,1)',
  },
});
