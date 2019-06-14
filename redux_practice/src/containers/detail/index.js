import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';

import {actionReqApi} from './action'

class Detail extends Component {

    componentDidMount(){
        console.log(' -------------  componentDidMount');
        this.props.apiRequest("Rohit");
    }

    render() {
        console.log(' -------------  render');
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Hello World</Text>
            </View>
        )
    }

   
}
 
const mapStateToProps = store => {
    console.log('................ State...........');
    
    return({
    
data :store.detail
});
}
  
  const mapDispatchToProps = dispatch => ({
    apiRequest: (login) => dispatch(actionReqApi("Data"))
  });
  
  module.exports = connect(mapStateToProps, mapDispatchToProps)(Detail);