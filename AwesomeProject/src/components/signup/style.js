import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get("window").width;

export default signUpStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        alignItems :'center'
    },
    uppperView: {
        flex: 0.2,
        width: width,
        backgroundColor: 'blue'
    },
    infoContainer: {
        flex: 0.8,
        marginLeft: 10,
        marginRight: 10,
        marginTop: -50,
        width: width-20,
        backgroundColor: 'white',
        borderRadius: 10
    },
    textContainer: {
        flex: 0.5,
        marginTop: 50,
    },
    title: {
        textAlign: 'center',
        color: '#f7c744',
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
    },
    logo: {
        flex: 0.2,
        width: width,
        backgroundColor: 'red'
    },
    input: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderWidth: 0.2,
        borderRadius: 20
    },
    buttonContainer:{
        backgroundColor: '#f7c744',
        paddingVertical: 15,
        borderRadius: 20
    }, 
    buttonText:{
        textAlign: 'center',
        color: 'rgb(32, 53, 70)',
        fontSize: 15,
        fontWeight: 'bold',
    }
})