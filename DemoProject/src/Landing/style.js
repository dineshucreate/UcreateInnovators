import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 44,
        backgroundColor: "#096b76",
        justifyContent: 'center',
        width: width / 2,
        height: 44,
    },
    buttonStyle: {
        alignSelf: 'center'
    },
    logoImage: {
        resizeMode: 'contain',
        width: '50%',
        height: '20%',
    },
    buttonText: {
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: 'Rajdhani-Bold',
        fontSize: 18,
    },
    buttonLoginText: {
        marginTop: 22,
        color: '#096b76',
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: 'Rajdhani-Bold',
        fontSize: 18,
    },
});
export default styles;