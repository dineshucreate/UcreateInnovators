import { StyleSheet } from 'react-native';

const myStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
       justifyContent: 'center',
       width: '100%',
       height: '100%',
         position: 'absolute'
    },

    innerView: {
        justifyContent: 'center', 
        height: 100, 
        width: 100,
        backgroundColor: 'grey'
    },
});
export default myStyle;
