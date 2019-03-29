import {StyleSheet} from 'react-native'
export default styles = StyleSheet.create({
    image : {
        flex:1,
        resizeMode: 'contain',
        justifyContent:'center',
        alignItems:'center',
      },
      innerContent:{
        flex:0.4,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
      },
      innerLogo:{
        width:'50%',
        height:'53%',
        resizeMode: 'contain',
        marginBottom:25
      },
      buttonBackground1:{
        backgroundColor:'#096B76',
        width:'auto',
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 2,
        paddingLeft:10,
        paddingRight:10,
        marginBottom:10
      },
      buttonBackground2:{
        width:160,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 2,
      },
      button1:{
        color:'white',
        fontFamily:'Rajdhani-Semibold',
        fontSize:18
      },
      button2:{
        color:'#096B76',
        fontFamily:'Rajdhani-Semibold',
        fontSize:18
      }
})