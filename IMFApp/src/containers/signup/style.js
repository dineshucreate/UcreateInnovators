import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundView: {
        flex: 1,
    },
    registerText: {
        marginLeft: -30,
        marginTop: 44,
        fontSize: 17,
        fontFamily: 'Rajdhani-semiBold',
        color: 'white',
    },
    horizontalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 88,
    },
    signupView: {
        marginTop: 44,
        marginHorizontal: 10,
        backgroundColor: 'white',
        height: 250,
        borderRadius: 3,
    },
    lineView: {
        height: 1,
        marginLeft: 24,
        backgroundColor: '#D3D3D3',
    },
    textInput: {
        height: 24,
        marginVertical: 12,
        marginHorizontal: 24,
        fontSize: 17,
        fontFamily: 'Rajdhani-Medium',
    },
    buttonDoneText: {
        marginTop: 46,
        color: '#A5E26A',
        fontFamily: 'rajdhani-bold',
        fontSize: 18,
        marginRight: 20,
    },
    buttoBottomText: {
        marginTop: 28,
        color: 'white',
        fontFamily: 'rajdhani-bold',
        fontSize: 14,
        alignSelf: 'center',
    },
});
export default styles;