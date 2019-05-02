
import {StyleSheet} from 'react-native';
const stylesModel = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    content: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
      fontSize: 20,
      marginBottom: 12,
    },
    bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    scrollableModal: {
      height: 300,
    },
    scrollableModalContent1: {
      height: 200,
      backgroundColor: '#87BBE0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollableModalText1: {
      fontSize: 20,
      color: 'white',
    },
    scrollableModalContent2: {
      height: 200,
      backgroundColor: '#A9DCD3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollableModalText2: {
      fontSize: 20,
      color: 'white',
    },
  });
  export default stylesModel;