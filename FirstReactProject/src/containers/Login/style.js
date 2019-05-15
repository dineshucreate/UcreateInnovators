import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },

    welcome: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 100,
      color: '#3F4E85',
      marginBottom: 60,
      fontWeight: 'bold',
      height: 80
    },

    heading: {
      fontSize: 20,
      width: 225,
      marginTop: 20,
      color: '#000000'
    },

    input: {
      margin: 10,
      height: 40,
      width: 225,
      borderColor: '#7a42f4',
      borderWidth: 1,
      padding: 10
   },

    icon: {
      width: 24,
      height: 24,
    },

    profileImage: {
      height: 50,
      width: 50,
      backgroundColor: '#f00ff0',
      borderWidth: 2,
      marginTop: 60
   },

   modal: {
     width: 100,
     height: 100
   },

   map: {
       marginTop: 100,
       height: 50,
       width: 50,
   }


  });
export default styles;
