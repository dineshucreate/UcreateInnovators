import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        margin:10,
    },
    photo:{
        width:50,
        height:50,
    },
    containerText:{
        flex:1,
        flexDirection:'column',
      
        marginLeft: 15,
        justifyContent: 'center',
    },titleText:{
        fontSize: 16,
        color:'#000'
    }
});

const WorldCupRow  = ({title,des,image}) =>(
    <View style = {styles.container}>
     <Image style={styles.photo} source={{uri:image}}></Image>
     <View style={styles.containerText}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.titleText}>{des}</Text>

     </View>

    </View>
);

export default WorldCupRow;

