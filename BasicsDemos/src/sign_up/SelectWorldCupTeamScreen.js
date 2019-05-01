import React,{Component} from 'react';
import {Text,View,Image, ImageBackground, StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import WorldCupRow from './WorldCupRow';




var  customData;

export default class SelectWorldCupTeamScreen extends React.Component{
    
    constructor(props){
        super(props)
       
        console.log("Hello11-----------------")
     customData = require('../assets/InternationalTeams.json');
  //   this.setState({arrryList: customData.teams});
   console.log(JSON.stringify(customData))
}
state={
    arrryList:[],
}

componentDidMount(){
  //  customData = require('../assets/InternationalTeams.json');
  console.log("componentDidMount-----------------")
    this.setState({arrryList: customData.teams});
    console.log(JSON.stringify(this.state.arrryList))
}

call= ()=>{
    console.log("Hello111-----------------")
      customData = require('../assets/InternationalTeams.json');
   //alert(Json.stringify(customData));
    alert(JSON.stringify(customData));
}


    render(){
        console.log(JSON.stringify(this.state.arrryList))
        return(
            <View style={{flex:1,flexDirection:'row',}}>
                 <ImageBackground source= {require('../assets/global_bg.png')} style={{width:"100%",height:"100%"}}> 
            <View style={styles.container}>

           
           
           <FlatList
           data={this.state.arrryList}
        
           renderItem= {({item})=>
           <TouchableOpacity onPress={this.call}>
           <WorldCupRow 
           title={item.name}
           des = {"item.key"}
           image = {item.imageUrl}>

           </WorldCupRow>
           </TouchableOpacity>}
           
           />
           
          
         
           </View>
           </ImageBackground>
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
        backgroundColor:'#fff'

    }
})