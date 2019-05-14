import { StyleSheet } from 'react-native';
import { Colors } from '../../utilities/Colors';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        backgroundColor: Colors.baseColor
    },
    viewIn: {
        flex: 1,
        backgroundColor: '#A4CBF8',
        alignItems: 'flex-start',
    },
    topBarContainer: {
        backgroundColor: Colors.baseColor,
        padding: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 56,
        flexDirection: 'row'
    },
    title: {
        fontSize: 20,
        color: 'white',
        paddingLeft: 18
    },
});
export default styles;
