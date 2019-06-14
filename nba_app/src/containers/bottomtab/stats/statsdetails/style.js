
import { StyleSheet } from 'react-native';

const stylesStats = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    containerMain: {
        flexDirection:'row',
        marginTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        
    },

    containerImage: {
        flex: 1
    },
    flatview: {
        justifyContent: 'center',
        paddingTop: 30,
        borderRadius: 2,
    },
    name: {
        fontSize: 18,
        marginLeft: 15,
        fontFamily:'Rajdhani-SemiBold'
    },
    email: {
        color: 'red',
        marginLeft: 15,
    },
    userImage: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: 'gray',
        borderRadius: 25
    },
    textView: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        
    },
    newsContainer: {
        padding: 10
    },
    newsTitle: {
        fontSize: 23,
        color: '#323232',

    },
    newsData: {
        fontSize: 12,
        color: '#828282',

    },
    newsContent: {
        marginTop: 30
    },
    newsText: {
        fontSize: 14,
        lineHeight: 20,

    }

});
export default stylesStats;