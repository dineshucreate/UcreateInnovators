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
        marginLeft: 40,
        fontFamily: 'rajdhani-semibold',
        fontSize: 17,
        color: '#3b5998',
    }
});
export default styles;