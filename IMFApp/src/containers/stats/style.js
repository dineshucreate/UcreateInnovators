import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundView: {
        flex: 1,
    },
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
    textListHeader: {
        marginTop: 10,
        color: 'gray',
        fontFamily: 'rajdhani-semibold',
        fontSize: 14,
        alignSelf: 'center',
    },
    teamsContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        backgroundColor: '#C8E2E2',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    viewTeam1: {
        flex: 0.45,
        height: 80,
        marginLeft: 10,
        marginTop: 10
    },
    logoImageTeam1: {
        width: 50,
        height: 50,
        resizeMode: 'center',
        backgroundColor: 'gray',
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: 10
    },
    textTeamName1: {
        alignSelf: 'center',
        marginTop: 5,
        fontSize: 14,
        fontFamily: 'Rajdhani-semibold',
        color: '#06878A',
        height: 20
    },
    viewCenter: {
        width: 50,
        height: 80,
        marginTop: 10
    },
    textVS: {
        alignSelf: 'center',
        fontSize: 32,
        fontFamily: 'Rajdhani-Bold',
        color: '#06878A',
        marginTop: 10
    },
    textScore: {
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'Rajdhani-semibold',
        color: '#06878A',
        marginTop: -5
    },
    viewTeam2: {
        flex: 0.45,
        height: 80,
        marginRight: 10,
        marginTop: 10
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
    }
});
export default styles;