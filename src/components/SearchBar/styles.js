import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // paddingVertical: 5,
  },
  logoImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  buttonWrapper: {
    width: 40,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'grey',
  },
  arrowImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    color: '#222222',
    fontWeight: '700',
  },
});
