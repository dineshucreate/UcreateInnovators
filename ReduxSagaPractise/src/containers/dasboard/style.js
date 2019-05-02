
import { StyleSheet,Dimensions} from 'react-native';

const stylesList = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    containerMain: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
        
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
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
        
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

});
export default stylesList;