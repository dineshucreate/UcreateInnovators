import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerVIew: {
        backgroundColor: '#06878A',
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        textAlign: 'center',
        marginTop: 0,
        fontSize: 28,
        fontFamily: 'Rajdhani-Bold',
        color: 'white',
    },
    menuButton: {
        height: 44,
        width: 44,
        justifyContent: 'center'
    },
    facebookIcon: {
        height: 24,
        width: 24,
        alignSelf: 'center',
    },
    blankText: {
        textAlign: 'center',
        marginTop: 0,
        fontSize: 28,
        fontFamily: 'Rajdhani-Bold',
        color: '#06878A',
    },
    modalView: {
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 4
    },
    welcomeText: {
        textAlign: 'center'
    },
    startButton: {
        backgroundColor: '#06878A',
        height: 30,
        width: 80,
        marginTop: 20,
        justifyContent: 'center',
        borderRadius: 4,
        alignItems: 'center'
    },
    startButtonText: {
        fontSize: 22,
        fontFamily: 'Rajdhani-Bold',
        color: 'white'
    }

});
export default styles;