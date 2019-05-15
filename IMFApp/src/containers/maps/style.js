import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

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
    mapView: {
        width: width,
        height: height - 170,
        backgroundColor: 'white'
    }
});
export default styles;