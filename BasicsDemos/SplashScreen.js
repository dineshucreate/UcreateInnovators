
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground  } from 'react-native';
import { createStackNavigator , createAppContainer, Header,NavigationActions,StackActions} from 'react-navigation';
import BlinkApp from './BlinkApp';
import ListScreen from './ListScreen';
import SearchBar from './SearchBar';
import RegisterScreen from './src/RegisterScreen';
import {AsyncStorage} from 'react-native';
import BottomScreen from './src/Bottom/BottomScreen';
import SignUpAndLoginScreen from './src/sign_up/SignUpAndLoginScreen';
import SelectWorldCupTeamScreen from './src/sign_up/SelectWorldCupTeamScreen';



 class SplashScreen extends React.Component{

    constructor(props){
        super(props)
    setTimeout(()=>{
        let userId='N' ;
        console.log(userId);

        (async() =>{
        
            try{
            userId = await AsyncStorage.getItem('userId') || 'None';
            console.log(userId);
            if(userId!='None'){
                console.log(userId);
                console.log("navigateToOtherBefore", "navigateToOtherBefore");
                this.navigateToOther();
               // this.props.navigation.navigate('List')
            }else{
                console.log(userId);
                this.props.navigation.navigate('createAccount')
               // this.props.navigation.navigate('Home')
                
            }
            }catch(error){
                console.log("SplashErrorS", error);
            }
            return userId;
        })();
       
       
       },3000);
    }


    navigateToOther(){

        console.log("navigateToOther", "navigateToOther");
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
           // NavigationActions.navigate({ routeName: 'Splash' }),
            NavigationActions.navigate({ routeName: 'bottom' })
          ]
        });
    
        this.props.navigation.dispatch(resetAction);
      }
    

    static navigationOptions = {
        header: null
    };

    render(){
    return(
        <View style={styles.container}>
        <ImageBackground
        source = {require('./src/assets/global_bg.png')} style={styles.container}></ImageBackground>

        </View>
    );
    }
}

const AppNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Home: BlinkApp,
    List: ListScreen,
    search: SearchBar,
    register: RegisterScreen,
    bottom: BottomScreen,
    createAccount: SignUpAndLoginScreen,
    worldcup: SelectWorldCupTeamScreen,
  },{
    headerMode: 'none',
  initialRoute : "Splash"
  }
);

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        width:'100%'

    }
}) 