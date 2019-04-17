import React from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';


const Row = ({title, description,image_url})=>(
    <View style={styles.container}>
    <Image style={styles.images} source={{uri:image_url}}/>
    
    <View style = {styles.container_text}>
        <Text style={styles.title}>{title}</Text>
        <Text style= {styles.description}>{description}</Text>
    </View>
    </View>
);

export default Row;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        margin:1,
        elevation:2,
        borderRadius:5,
        padding:10
    },
    container_text:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        marginLeft:12
    },
    title:{
        fontSize:16,
        color:"#000"
    },
    description:{
        fontSize:12
    },
    images:{
        width:50,
        height:50,
    }
});

