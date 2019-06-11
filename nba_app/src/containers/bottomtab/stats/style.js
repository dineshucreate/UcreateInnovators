
import { StyleSheet } from 'react-native';

const stylesStats = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    containerMain: {
        flexDirection:'row',
        marginTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        
    },

    containerImage: {
        flex: 1
    },
    flatview: {
        justifyContent: 'center',
        paddingTop: 30,
        borderRadius: 2,
    },
    name: {
        fontSize: 18,
        marginLeft: 15,
        fontFamily:'Rajdhani-SemiBold'
    },
    email: {
        color: 'red',
        marginLeft: 15,
    },
    userImage: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: 'gray',
        borderRadius: 25
    },
    textView: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        
    },
    cardContainer: {
        backgroundColor:'#fff',
        margin:10,
        shadowColor: '#dddddd',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        borderRadius: 2,
      },
      contentCard:{
        borderWidth:1,
        borderColor:'#dddddd'
      },
      titleCard:{
        fontFamily:'Roboto-Bold',
        color:'#232323',
        fontSize:16,
        padding:10
      },
      bottomCard:{
        flex:1,
        flexDirection:'row',
        borderTopWidth:1,
        borderTopColor:'#e6e6e6',
        padding:10
      },
      bottomCardTeam:{
        fontFamily:'Roboto-Bold',
        color:'#828282',
        fontSize:12
      },
      bottomCardText:{
        fontFamily:'Roboto-Light',
        color:'#828282',
        fontSize:12
      }

});
export default stylesStats;