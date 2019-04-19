

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Alert,TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
const data = [{key:'Amit'}, {key:'Bobby'},{key:'Priya'}, {key:'Aman'},{key:'Karan'}, {key:'Mandeep'},{key:'Modi'}, {key:'Sunil'},{key:'Pawani'}, {key:'j'},
]
export default class GridViewScreen extends React.Component{

    actionOnRow(item){
        console.log("Select"+ item)
          }
    render(){
       return(
           <View style={styles.container}>
           <FlatList 
           data= {data}
           renderItem= {({item})=>
         //  <TouchableOpacity onPress = {()=> this.actionOnRow(item)}> 
           <View style={styles.rowView}>
           <TouchableOpacity onPress={()=> this.actionOnRow(item)} >
           <Image source={require('../assets/placeholder_sticker.jpg')} style={styles.imageView}></Image>
               <Text style = {styles.textView}>
                     {item.key}
               </Text>
               </TouchableOpacity>
       </View>
     //  </TouchableOpacity>
    }
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
        color:'#000',
        fontSize:22,
        marginBottom:2,
      
       
        // textAlignVertical:'center',
         textAlign:'center',
    },
    rowView:{
        flex:1,
       // justifyContent:'center',
        alignItems:'center',
        height:170,
        margin:3,
        backgroundColor: '#fff',
        elevation:2,
    },
    imageView:{
        flex:1,
       //width:50,
        height:130,
        marginTop:4,
       
    }

})