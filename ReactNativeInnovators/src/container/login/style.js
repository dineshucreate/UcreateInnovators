
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    containerImage: {
      flex: 1
    },
    welcome: {
      flex: 0.8,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: "#ffffff",
      width: "90%",
      marginTop: 30,
    },
    buttonStyle: {
      marginTop: 10,
      fontSize: 50,
    },
    instructionsThird: {
      //flex: 3,
      backgroundColor: "#590000",
      width: 50,
      height: 50,
    },
    input: {
      margin: 10,
      height: 40,
      width: 300,
    },
    titleText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#06878A',
      marginLeft: 15,
  
    },
    TextShadowStyle:
    {
      textAlign: 'center',
      fontSize: 20,
      textShadowColor: '#05928E',
      color: '#ffffff',
      fontWeight: 'bold',
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 8,
      marginTop: 20,
  
    },
  });
  export default styles;