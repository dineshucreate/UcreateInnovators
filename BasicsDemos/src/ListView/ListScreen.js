import React,{Component} from 'react';
import {Platform, StyleSheet, Text,View,Button,FlatList,SectionList, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import { createAppContainer  } from 'react-navigation';
import SearchBar from '../../SearchBar';
import CustomRow from './CustomRow';
import Row from './Row';
import axios from 'axios';

import {connect} from 'react-redux';
import {domasticRequest} from './action';

 class ListScreen extends React.Component{
 
  state = {
    arrayList:[],
  }
  
  componentDidMount(){

    const {domasticRequest} = this.props;
    domasticRequest();
    
    // axios.get('https://footballalbum-prod-api.imfootball.me/userapi/api/Competitions/Domestic',{
    //   headers:{
    //     'ZUMO-API-VERSION':'2.0.0',
    //     'Ocp-Apim-Subscription-Key':'6c192d2e80bb49a8b90f6d684cf18b9b',
    //   }
    // }).then(res => {
    //   const response = res.data;
     
    //   console.log('..............   '+ JSON.stringify(response.countries));
    //   this.setState({arrayList: response.countries});
    
    // //  alert(JSON.stringify(response));
    // })
  }

  actionOnRow(item){
console.log("Select"+ item)
  }
    render(){
      console.log("enter---------------------Dev"+  +JSON.stringify(this.props.domasticData));

      console.log(this.state.arrayList&& this.state.arrayList.length);
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
        {
          this.state.arrayList.length>0 ?
<FlatList
               data={this.state.arrayList}
                renderItem={({ item }) =>
                <TouchableOpacity onPress = {()=> this.actionOnRow(item)}>
                <Row
                    title={item.country.name}
                    description={item.country.shortName}
                    image_url={"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"}
                />
                </TouchableOpacity>}
                numColumns = {3}
                keyExtractor = {item => item.id}
            />
            :null

        }

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



const mapStateToProps = (state)=>{
  return{
   // loading: state.domastic.loading,
    domasticData: state.domastic.domasticData,
   
  };

};

const mapDispatchToProps = (dispatch) => ({
  domasticRequest: () => dispatch(domasticRequest())
})
export default connect(mapStateToProps,mapDispatchToProps) (ListScreen);

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