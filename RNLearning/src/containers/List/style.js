import { StyleSheet } from 'react-native';
import { Colors } from '../../utilities/Colors';

const styles = StyleSheet.create({
    styleContainer: {
        flex: 1,
        backgroundColor: Colors.baseColor,
    },
    mainView: {
        flex: 1,
        backgroundColor: '#A4CBF8'
    },
    styleList: {
        flex: 1
    },
    topBarContainer: {
        backgroundColor: Colors.baseColor,
        padding: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 56,
        flexDirection: 'row'
    },
    titleText: {
        fontSize: 20,
        color: 'white',
        paddingLeft: 18
    },
    switch: {
        position: 'absolute',
        right: 10
    },
});
export default styles;
