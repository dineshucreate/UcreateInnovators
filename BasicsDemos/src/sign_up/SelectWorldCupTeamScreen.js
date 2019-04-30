import React,{Component} from 'react';
import {Text,View,Image, ImageBackground, StyleSheet, FlatList} from 'react-native';
import WorldCupRow from './WorldCupRow';



export default class SelectWorldCupTeamScreen extends React.Component{
    
    render(){
        return(
            <View style={styles.container}>
           
           <FlatList
           data={[ {key:"Dev"},{key:"Amit"},{key:"Aman"},{key:"Karan"},{key:"Modi"}]}
           renderItem= {({item})=>
           <WorldCupRow 
           title={item.key}
           des = {"item.key"}
           image = {"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"}>

           </WorldCupRow>}>

           </FlatList>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        margin:10,
        backgroundColor:'#890'

    }
})