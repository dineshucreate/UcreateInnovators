
import { StyleSheet } from 'react-native';
const stylesReduxLogin = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    }, view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageView: {
        width: 225,
        height: 200,
    },
    // buttonView:{
    //     width:200,
    //     height:50,
    //   //  backgroundColor:'#06878A',
    //     borderRadius:3,
    // },
    buttonText: {
        padding: 15,
        color: "#fff",
        backgroundColor: '#06878A',
        textAlign: 'center',
        marginTop: 30,
        fontWeight: 'bold',
        borderRadius: 3,
    }
});
export default stylesReduxLogin;