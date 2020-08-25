import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  UIManager,
  Dimensions,
} from 'react-native';
import {COLORS, FONTWEIGHT} from '../assets/constants/constant';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    // this.getData();
  }

  render() {
    const {
      sideLogo,
      sideLogoText,
      sideLink,
      sideLinkButton,
      sideLinkText,
      container,
    } = styles;
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <View style={container}>
          <View style={sideLogo}>
            <Text style={sideLogoText}>Lug'at</Text>
          </View>
          <View style={sideLink}>
            <TouchableOpacity
              style={sideLinkButton}
              onPress={() => navigation.navigate('UrduUzbek')}>
              <Text style={sideLinkText}>Urdu-Uzbek</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={sideLinkButton}
              onPress={() => navigation.navigate('UzbekUrdu')}>
              <Text style={sideLinkText}>Uzbek-Urdu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SideMenu;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  sideLogo: {
    height: screenHeight * 0.2,
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  sideLogoText: {
    color: COLORS.WHITE,
    fontSize: 30,
    fontWeight: FONTWEIGHT.BOLD,
    textAlign: 'center',
  },

  sideLink: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  sideLinkButton: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.VERY_DARK_GREY,
  },
  sideLinkText: {
    marginLeft: 10,
    color: COLORS.VERY_DARK_GREY,
    fontSize: 20,
  },
});
