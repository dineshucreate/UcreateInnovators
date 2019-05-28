import React,{Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
export default class Landing extends Component {
    constructor() {
        super() 
        this.state = {
            loading:false
        }
    }

    HOF = (func) => {
        func('123')
    }



    componentDidMount() {
        // this.setState((state, props) => {
        //     console.log(JSON.stringify(state))
        //     console.log(JSON.stringify(props))
        // }, ()=> {
        //     console.log('Done')
        // })
        // this.HOF((val)=> {
        //     alert(val)
        // })
    }

    render() {
        return (
            <View style ={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>123</Text>
            </View>
        )
    }
}