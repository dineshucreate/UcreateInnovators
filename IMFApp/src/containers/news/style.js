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
    newsHeaderText: {
        textAlign: 'left',
        marginTop: 0,
        fontSize: 18,
        fontFamily: 'Rajdhani-bold',
        color: 'black',
        height: 46,
    },
    newsTittleText: {
        textAlign: 'left',
        marginTop: 5,
        fontSize: 14,
        fontFamily: 'Rajdhani-regular',
        color: 'black',
        // height: 80,
        flexWrap: 'wrap',
    },
});
export default styles;