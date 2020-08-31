import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbarWrapper: {
    backgroundColor: 'lightgrey',
    paddingVertical: 5,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  navbarImage: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    marginLeft: 20,
    marginRight: 10,
  },
  navbarText: {
    fontSize: 18,
    fontWeight: '600',
    // textAlign: 'center',
  },

  logoImage: {
    width: '80%',
    height: '60%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  buttonContainer: {
    width: '70%',
    alignSelf: 'center',
  },
  buttonWrapper: {
    width: '100%',
    backgroundColor: 'lightgrey',
    padding: 15,
    marginVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
