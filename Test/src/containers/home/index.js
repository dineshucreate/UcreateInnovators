import React, {Component} from 'react'
import {View, Text, ScrollView,StyleSheet, ImageBackground} from 'react-native'
import {backgroundImage} from '../../assets/images/images'
export default class Home extends Component {
    // constructor() {
    //     super()
    //     let promiseNew = new Promise((a,b) => {
    //         if(false) {
    //             a(1)
    //         } else {
    //             b(2)
    //         }
    //     })
    //     promiseNew.then(a=>{
    //         alert(a)
    //     }).catch(b=> {
    //         alert(b)
    //     })
    // }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.red}></View>
                <View style={styles.green}></View>
                <View style={styles.blue}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    red:{
        width:80,
        height:80,
        flex:0.2,
        backgroundColor:'red'
    },
    green:{
        width:80,
        height:80,
        flex:0.3,
        backgroundColor:'green'
    },
    blue:{
        width:80,
        height:80,
        flex:0.5,
        backgroundColor:'blue'
    },
    image : {
      flex:1,
      width:'100%',
      height:'100%',
      justifyContent:'center',
      resizeMode: 'contain'
    }
})