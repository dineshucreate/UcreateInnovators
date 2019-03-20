import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        backgroundColor: "#A4CBF8"
    },
    viewIn: {
        flex: 1,
        backgroundColor : "#A4CBF8"
    },
    titleContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 0.1,
    },
    photosContainer: {
        paddingHorizontal: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 0.9,
        flexDirection: 'column',
    },
    titleText: {
        fontSize: 40,
        color: 'black'
    },
    buttonText: {
        fontSize: 20,
        color: 'black'
    },
    image:{
        width: 300,
        height: 300,
    },
    buttonStyle:{
        marginTop: 10,
        height: 40,
    }
})
export default styles;