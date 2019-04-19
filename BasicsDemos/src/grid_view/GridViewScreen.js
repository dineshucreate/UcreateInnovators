

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
const data = [{key:'A'}, {key:'B'},{key:'c'}, {key:'d'},{key:'e'}, {key:'f'},{key:'g'}, {key:'h'},{key:'i'}, {key:'j'},
]
export default class GridViewScreen extends React.Component{

    render(){
       return(
           <View style={styles.container}>
           <FlatList
           data= {data}
           renderItem= {({item})=> <Text style = {styles.textView}>
           {item.key}
           </Text>}>
           </FlatList>
           

           </View>
       )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:2,
    },
    textView:{
        backgroundColor:'#890000',
        fontSize:20,
        height:130,
        margin:1,
        textAlignVertical:'center',
        textAlign:'center',
       // textAlignHorizontal:'center',

    }
})