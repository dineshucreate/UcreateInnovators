import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    logoImage: {
        marginTop: 50,
        marginLeft: (width / 2) - 60,
        resizeMode: 'contain',
        width: 120,
        height: 120,
    },
    backButton: {
        marginTop: 44,
        height: 40,
        width: 150,
        flexDirection: 'row',
    },
    backImage: {
        height: 40,
        width: 40,
        marginLeft: 15,
    },
    backText: {
        alignSelf: 'center',
        marginLeft: 8,
        fontFamily: 'rajdhani-regular',
        fontSize: 22,
        color: '#A5E26A',
    },
    facebookButton: {
        marginVertical: 22,
        marginHorizontal: 10,
        height: 48,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 3,
        alignItems: 'center',
    },
    facebookIcon: {
        height: 24,
        width: 24,
        marginLeft: 30,
    },
    facbookText: {
        alignSelf: 'center',
        marginLeft: 40,
        fontFamily: 'rajdhani-semibold',
        fontSize: 22,
        color: '#3b5998',
    },
    loginView: {
        marginVertical: 18,
        marginHorizontal: 10,
        backgroundColor: 'white',
        height: 147,
        borderRadius: 3,
    },
    emailTextInput: {
        height: 24,
        marginVertical: 12,
        marginHorizontal: 24,
        fontSize: 17,
        fontFamily: 'Rajdhani-Medium',
    },
    lineView: {
        height: 1,
        marginLeft: 24,
        backgroundColor: '#D3D3D3',
    },
    buttonForgotText: {
        marginTop: 16,
        color: '#096b76',
        alignSelf: 'center',
        fontFamily: 'Rajdhani-SemiBold',
        fontSize: 12,
    },
    loginButton: {
        marginVertical: 10,
        marginHorizontal: 10,
        height: 48,
        backgroundColor: '#096b76',
        borderRadius: 3,
        alignItems: 'center',
    },
    buttonLoginText: {
        color: 'white',
        marginTop: 10,
        fontFamily: 'Rajdhani-Bold',
        fontSize: 22,
    },
    createAccountText: {
        marginTop: 16,
        color: '#096b76',
        alignSelf: 'center',
        fontFamily: 'Rajdhani-Bold',
        fontSize: 18,
    },
});
export default styles;