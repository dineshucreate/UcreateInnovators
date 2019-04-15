import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    height: 100,
    backgroundColor: '#f00ff0',
    borderWidth: 2
  },

  subContainerFlex1: {
    flex: 1,
  },

  subContainerFlex2: {
    flex: 2,
  },

  subContainerViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#0f0ff0'
  },

  heading: {
      fontSize: 20,
      backgroundColor: '#ff00ff'
    },

    description: {
        fontSize: 15,
        marginTop: 5,
        backgroundColor: '#0ff000'
      },

    profileImage: {
        height: 50,
        width: 50,
        backgroundColor: '#f00ff0',
        borderWidth: 2

    }
  });
  export default styles;

