import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../utilities/Colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        backgroundColor: Colors.baseColor
    },
    viewIn: {
        flex: 1,
        backgroundColor: '#A4CBF8',
        alignItems: 'center',
    },
    titleContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 0.1,
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
    map: { 
        ...StyleSheet.absoluteFillObject, 
        height: height - 200, 
        width, 
    }
});
export default styles;
