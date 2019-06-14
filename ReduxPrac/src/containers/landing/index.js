import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {incrementClicked} from './actions'
 class Landing extends Component {
    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>{this.props.counter}</Text>
                <TouchableOpacity onPress={() => this.props.incrementClickedLocal()}><Text>Add</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter : state.landing.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementClickedLocal : () => dispatch(incrementClicked())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Landing)