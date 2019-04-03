import React, {Component} from 'react'
import {StyleSheet, FlatList, Text, View, TouchableOpacity, ImageBackground, Image} from 'react-native'
import { backgroundImage, fbIcon, logoWhite, backButton } from '../../assets/images/images'
export default class FriendList extends Component {
    goBack() {
        this.props.navigation.pop()
    }

    componentWillMount(){
    }

    render() {
        return(
            <ImageBackground source ={backgroundImage} style={styles.container}>
                <TouchableOpacity onPress={ () => this.goBack()}><Image source={backButton} style={styles.headerButton}></Image></TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerButton:{
        width:30,
        height:30,
        marginLeft:20,
        marginTop:40
    },
})