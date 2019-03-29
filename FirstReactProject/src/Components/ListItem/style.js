import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    
    backgroundColor: '#f00ff0',
  },

  subContainer: {
    //justifyContent: 'flex-start',
   // alignItems: 'center',
  // flexDirection: 'row',
    backgroundColor: '#0f0ff0',
  },

  heading: {
      fontSize: 20,
      marginTop: 20,
      color: '#000000',
      backgroundColor : '#ffffff'
    },

    description: {
        fontSize: 15,
        //width: 225,
        marginTop: 10,
        color: '#000000'
      },

    profileImage : {
        height : 50,
        width : 50,
        backgroundColor: '#f00ff0',
        borderWidth : 2

    }
  });