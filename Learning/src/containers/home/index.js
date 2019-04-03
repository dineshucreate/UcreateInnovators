import React, {Component} from 'react'
import {View, Text, ScrollView,StyleSheet, ImageBackground, FlatList, TouchableOpacity, Image, TouchableWithoutFeedback, Dimensions} from 'react-native'
import {backgroundImage, logoWhite, backButton} from '../../assets/images/images'
export default class Home extends Component {
    constructor(props) {
        super(props)
       this.state = ({
           arrUsers : [
               {key:'1',value:'First'},{key:'2',value:'Second'},{key:'3',value:'Third'},{key:'4',value:'Fourth'},{key:'5',value:'Fifth'}
           ]
       })
    }

    goBack() {
        this.props.navigation.pop()
    }

    returnScreenWidth() {
        return Dimensions.get('window').width
    }

    onClickItem(item) {
        // alert(JSON.stringify(item))
        // var obj = JSON.parse(JSON.stringify(item));
        // alert(obj.value)
        this.props.navigation.navigate('FriendList', {'response': this.props.navigation})
    }
    
    render() {
        const {navigation} = this.props
        var response = navigation.getParam('response')
        return(
            <ImageBackground source ={backgroundImage} style={styles.container}>
                <TouchableOpacity onPress={ () => this.goBack()}><Image source={backButton} style={styles.headerButton}></Image></TouchableOpacity>
                <Text style={{textAlign:'center'}}>Welcome {response.user.firstname + ' ' + response.user.lastName}</Text>
                <FlatList contentContainerStyle={styles.styleFlatList} style={styles.list} data={this.state.arrUsers} 
                renderItem={({item}) =>
                <TouchableOpacity style={styles.styleTouch} onPress={()=>{this.onClickItem(item)}}><View style={styles.styleView}><Text>{item.value}</Text></View></TouchableOpacity>}/>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // flexDirection:'column',
        // justifyContent:'space-between',
        // justifyContent:'space-around',
        // justifyContent:'space-evenly',
        // alignItems:'center'
    },
    headerButton:{
        width:30,
        height:30,
        marginLeft:20,
        marginTop:40
    },
    red:{
        width:40,
        height:40,
        backgroundColor:'red',
        
    },
    green:{
        width:60,
        height:60,
        backgroundColor:'green'
    },
    blue:{
        width:80,
        height:80,
        backgroundColor:'blue'
    },
    image : {
      flex:1,
      width:'100%',
      height:'100%',
      justifyContent:'center',
      resizeMode: 'contain'
    },
    list:{
        flex:1,
    },
    styleFlatList:{
        alignItems:'center',
        // justifyContent:'center',
        flex:1,
        height:40,
    },
    styleView:{
        alignSelf:'center',
        justifyContent:'center',
        // width : Dimensions.get('window').width,
        height:40,
    },
    styleTouch:{
        width:Dimensions.get('window').width,
    }
})