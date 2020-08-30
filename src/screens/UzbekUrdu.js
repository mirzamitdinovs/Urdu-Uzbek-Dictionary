// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   SafeAreaView,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';
// import Loader from '../components/Loader';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import MainTitle from '../components/MainTitle';

// class UzbekUrdu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: false,
//       inputText: '',
//       readyText: '',
//     };
//   }

//   onChangeText = (text) => {
//     this.setState({
//       inputText: text,
//     });
//   };
//   onSubmitText = () => {
//     this.setState({
//       readyText: this.state.inputText,
//       inputText: '',
//     });
//   };

//   render() {
//     const {navigation} = this.props;
//     return this.state.isLoading ? (
//       <Loader />
//     ) : (
//       <SafeAreaView>
//         <View style={styles.wrapper}>
//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => this.onChangeText(text)}
//               value={this.state.inputText}
//             />
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => this.onSubmitText()}>
//               <Icon name="search" color="black" size={24} />
//             </TouchableOpacity>
//           </View>
//           <MainTitle title="O'zbekcha manosi" />
//           <View style={styles.content}>
//             <Text style={{marginBottom: 10}}>
//               Kuproq kurish uchun bosing :))
//             </Text>
//             <Text
//               onPress={() =>
//                 navigation.navigate('Details', {
//                   text: this.state.readyText,
//                 })
//               }>
//               {this.state.readyText}
//             </Text>
//           </View>
//           <View style={styles.footer}>
//             <TouchableOpacity
//               onPress={() => navigation.navigate('UrduUzbek')}
//               style={styles.footerButton}>
//               <Text style={styles.footerText}>Urdu-o'zbek</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => navigation.navigate('UzbekUrdu')}
//               style={[
//                 styles.footerButton,
//                 {borderRightColor: 'black', borderRightWidth: 1},
//               ]}>
//               <Text style={styles.footerText}>O'zbek-urdu</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   wrapper: {
//     height: '100%',
//   },
//   inputContainer: {
//     width: '90%',
//     alignSelf: 'center',
//     flexDirection: 'row',
//     marginVertical: 20,
//   },
//   input: {
//     width: '75%',
//     borderWidth: 1,
//     borderColor: 'black',
//     borderTopLeftRadius: 10,
//     borderBottomLeftRadius: 10,
//     borderRightWidth: 0,
//   },
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '25%',
//     backgroundColor: 'blue',
//     borderTopEndRadius: 10,
//     borderBottomEndRadius: 10,
//   },
//   content: {
//     margin: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'blue',
//     height: '50%',
//   },
//   footer: {
//     flexDirection: 'row',
//     position: 'absolute',
//     bottom: 0,
//   },
//   footerButton: {
//     width: '50%',
//     alignItems: 'center',
//     backgroundColor: 'blue',
//     paddingVertical: 20,
//   },
//   footerText: {
//     color: 'white',
//     fontSize: 20,
//   },
// });

// export default UzbekUrdu;

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import Loader from '../components/Loader';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MainTitle from '../components/MainTitle';
import RowsCount from '../components/RowsCount';
import FindInUzbek from '../components/FindInUzbek';

class UzbekUrdu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      inputText: '',
      readyText: '',
      results: [],
      selected_dict_id: '',
    };
  }

  componentDidMount() {
    FindInUzbek((rows) => {
      this.setState({results: rows});
    });
  }

  onChangeText = (text) => {
    this.setState({
      inputText: text,
    });

    FindInUzbek((rows) => {
      this.setState({results: rows});
    }, text);
  };
  // onSubmitText = () => {
  //   this.setState({
  //     readyText: this.state.inputText,
  //     inputText: '',
  //   });
  // };

  render() {
    const {navigation} = this.props;
    console.log('uzbek-urdu: ', this.state.results[0]);
    return this.state.isLoading ? (
      <Loader />
    ) : (
      <SafeAreaView>
        <View style={styles.wrapper}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.onChangeText(text)}
              value={this.state.inputText}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onSubmitText()}>
              <Icon name="search" color="black" size={24} />
            </TouchableOpacity>
          </View>

          <Text>{this.state.results.length} ta topildi:</Text>

          <View
          // style={styles.content}

          // style={{justifyContent: 'flex-start', alignItems: 'stretch'}}
          >
            <FlatList
              style={styles.content}
              data={this.state.results}
              renderItem={({item}) => (
                <TouchableHighlight
                  onPress={() => {
                    navigation.navigate('Details', {
                      urdu: item.urdu,
                      uzbek: item.uzbek,
                      translation: item.translate,
                    });

                    this.setState({
                      ...this.state,
                      selected_dict_id: item.id,
                    });
                  }}>
                  <View
                    style={{
                      borderBottomColor: 'gray',
                      borderBottomWidth: 1,
                      marginBottom: 10,
                    }}>
                    <Text style={styles.contentText}>{item.urdu}</Text>
                    <Text style={styles.contentText}>{item.uzbek}</Text>
                  </View>

                  {/*<Text>salom</Text>*/}
                </TouchableHighlight>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('UrduUzbek')}
              style={styles.footerButton}>
              <Text style={styles.footerText}>Urdu-o'zbek</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('UzbekUrdu')}
              style={[
                styles.footerButton,
                {borderRightColor: 'black', borderRightWidth: 1},
              ]}>
              <Text style={styles.footerText}>O'zbek-urdu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  inputContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  input: {
    width: '75%',
    borderWidth: 1,
    borderColor: 'black',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderRightWidth: 0,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    backgroundColor: 'blue',
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
  },
  content: {
    margin: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'blue',
  },
  contentText: {
    fontSize: 20,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  footerButton: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingVertical: 20,
  },
  footerText: {
    color: 'white',
    fontSize: 20,
  },
});

export default UzbekUrdu;
