import { StyleSheet } from 'react-native';
import { Colors } from '../../utilities/Colors';

const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    buttonStyleWithColor: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    text: {
        color: Colors.black,
        marginLeft: 8,
    },
    safeAreaView: { 
        flex: 1, 
        width: 200 
    },
    image: { 
        flex: 1, 
        width: 100, 
        height: 200, 
        marginTop: 50, 
        marginLeft: 20, 
        borderRadius: 50 
    },
    itemsContainer: {
        height: 500, 
        backgroundColor: Colors.colorFFFFFF, 
        marginTop: 100, 
        marginLeft: 20
    },
});

export default styles;
