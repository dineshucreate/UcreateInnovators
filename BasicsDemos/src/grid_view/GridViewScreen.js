

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
const data = [{key:'A'}, {key:'B'},{key:'c'}, {key:'d'},{key:'e'}, {key:'f'},{key:'g'}, {key:'h'},{key:'i'}, {key:'j'},
]
export default class GridViewScreen extends React.Component{

    render(){
       return(
           <View style={styles.container}>
           <FlatList
           data= {data}
           renderItem= {({item})=> <View style={styles.rowView}>
           <Image source={require('../assets/placeholder_sticker.jpg')} style={styles.imageView}></Image>
               <Text style = {styles.textView}>
                     {item.key}
               </Text>
       </View>}
        numColumns = {3}>
      
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
        color:'#890000',
        fontSize:29,
      
       
        // textAlignVertical:'center',
        // textAlign:'center',
    },
    rowView:{
        flex:1,
       // justifyContent:'center',
        alignItems:'center',
        height:150,
        margin:7,
        backgroundColor: '#00BCD4'
    },
    imageView:{
        flex:1,
       //width:50,
        height:130,
       
    }

})