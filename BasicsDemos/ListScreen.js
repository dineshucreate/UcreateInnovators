import React,{Component} from 'react';
import {Platform, StyleSheet, Text,View,Button,FlatList,SectionList} from 'react-native'
import { createAppContainer  } from 'react-navigation';
import SearchBar from './SearchBar';
import CustomRow from './src/ListView/CustomRow';
import Row from './src/ListView/Row';

 class ListScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            {/* <SectionList
            sections={[
              {title:'A', data:['DEV']},
              {title:'B', data:['aman','amit','karan']},
            ]
            }
            renderItem={({item})=><Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section})=><Text style={styles.text}>{section.item}</Text>}
            keyExtractor = {(item, index)=> index}
            /> */}

<FlatList
               data={[
                {key:"Dev"},
                {key:"Nitish"},
                {key:"Amit"},
                {key:"karan"},
                {key:"aman"},
                {key:"modi"},
                {key:"Dev"},
                {key:"Nitish"},
                {key:"Amit"},
                {key:"karan"},
                {key:"aman"},
                {key:"modi"},
                {key:"Dev"},
                {key:"Nitish"},
                {key:"Amit"},
                {key:"karan"},
                {key:"aman"},
                {key:"modi"},
              ]}
                renderItem={({ item }) => <Row
                    title={item.key}
                    description={item.key}
                    image_url={"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"}
                />}
            />



         {/* <FlatList
           data={[
             {key:"Dev"},
             {key:"Nitish"},
             {key:"Amit"},
             {key:"karan"},
             {key:"aman"},
             {key:"modi"},
             {key:"Dev"},
             {key:"Nitish"},
             {key:"Amit"},
             {key:"karan"},
             {key:"aman"},
             {key:"modi"},
             {key:"Dev"},
             {key:"Nitish"},
             {key:"Amit"},
             {key:"karan"},
             {key:"aman"},
             {key:"modi"},
           ]}
           renderItem={({item})=> <Text style={styles.text} 
           onPress={()=>{this.props.navigation.navigate('search')}}>{item.key}</Text>}
           />  */}

           
            </View>
        )
    }
}

// const AppNavigator = createStackNavigator(
//   {
//     lists: ListScreen,
//     search: SearchBar,
//   },
//   {
//   initialRoute : "lists"
//   }
// );

export default ListScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"row",
      justifyContent:"center",
      backgroundColor: '#F5FCFF',
     
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    text: {
     fontSize: 20,
     padding: 10,
     height:70
    },
  });