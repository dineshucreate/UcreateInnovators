import React,{Component} from 'react';
import {Text,View,Image, ImageBackground, StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import WorldCupRow from './WorldCupRow';




var  customData;

export default class SelectWorldCupTeamScreen extends React.Component{
    
    constructor(props){
        super(props)
        console.log("Hello11-----------------")
     customData = require('../assets/InternationalTeams.json');
   console.log(JSON.stringify(customData))
}

call= ()=>{
    console.log("Hello111-----------------")
      customData = require('../assets/InternationalTeams.json');
   //alert(Json.stringify(customData));
    alert(JSON.stringify(customData));
}


    render(){
        return(
            <View style={styles.container}>
           
           <FlatList
           data={[ {key:"Dev"},{key:"Amit"},{key:"Aman"},{key:"Karan"},{key:"Modi"}]}
        
           renderItem= {({item})=>
           <TouchableOpacity onPress={this.call}>
           <WorldCupRow 
           title={item.key}
           des = {"item.key"}
           image = {"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"}>

           </WorldCupRow>
           </TouchableOpacity>}
           
           />
           
           
         
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