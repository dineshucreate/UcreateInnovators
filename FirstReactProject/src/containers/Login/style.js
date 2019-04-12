import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#f00ff0',
      // height : 100
    },
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 20,
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
    buttonStyle: {
      fontSize: 30,
      marginTop: 50,
      color: '#3F4E85',
      backgroundColor: '#ff00ff'
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
  }
  });
export default styles;
