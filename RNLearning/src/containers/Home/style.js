import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        backgroundColor: "#A4CBF8"
    },
    viewIn: {
        flex: 1,
        backgroundColor : "#A4CBF8",
        alignItems: "center",
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
        flex: 0.4,
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
    },
    datePickerContainer: {
        marginTop: 10,
        borderWidth: 1,
        width: 140,
        borderRadius: 100,
        alignSelf: 'center'
    },
    datePicker: {
        width: 200, 
        color: 'black',
    },
    dateIcon: {
        display: 'none',
        height: 0
    },
    dateInput: {
        margin: 0,
        marginLeft: -65,
        borderWidth: 0,
    },
    datePlaceholderText: {
        color: 'black',
    },
    switchContainer: {
        marginTop: 18,
        margin: 10,
    },
})
export default styles;