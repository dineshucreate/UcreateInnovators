import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewSplash: {
        flex: 0.45,

        justifyContent: 'center',
        alignContent: 'center'
    },
    logoimage: {
        alignSelf: 'center',
    },
    reviewtooltext: {
        textAlign: 'center',
        elevation: 5,
    },
    viewLogin: {
        justifyContent: 'flex-end',
        alignContent: 'center',
        flex: 0.65
    },
    viewIn: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 10
    },
    viewLoginButton: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewLoginButtonWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        borderWidth: 5,
        borderColor: '#3C8DBC',
        borderRadius: 10,
        width: 200
    }
});
export default styles;
