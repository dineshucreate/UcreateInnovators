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
        fontSize: 24,
        fontFamily: 'Rajdhani-Bold',
        color: 'white',
    },
    menuButton: {
        height: 44,
        width: 54,
        justifyContent: 'center'
    },
    blankText: {
        textAlign: 'center',
        marginTop: 0,
        fontSize: 28,
        fontFamily: 'Rajdhani-Bold',
        color: '#06878A',
    },
    backText: {
        alignSelf: 'center',
        marginLeft: 8,
        fontFamily: 'rajdhani-bold',
        fontSize: 18,
        color: '#A5E26A',
    }
});
export default styles;