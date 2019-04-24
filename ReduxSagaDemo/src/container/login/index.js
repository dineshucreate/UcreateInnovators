import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList } from "react-native";
import { addClicked, textChanged, deleteClicked } from "./actions";
import { connect } from "react-redux";
class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignSelf:'center',marginTop:70,marginBottom:70, flexDirection: "row" }}>
          <TextInput style={{width:100}} onChangeText={(text) => this.props.onTextChanged(text)} placeholder="Add something" />
          <TouchableOpacity onPress={() => this.props.addClicked(this.props.textToAdd)}>
            <Text style={{paddingLeft:10}}>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList style={{marginBottom:20}} data={this.props.data} renderItem={({item, index})=> (
            <TouchableOpacity onPress={() => this.props.onDelete(index)}><Text style={{alignSelf:'center'}}>{item.value}</Text></TouchableOpacity>
        )}></FlatList>
      </View>
    );
  }
}

const mapStateToProps = state => {
    // alert(JSON.stringify(state.login.data))
  return {
    data: state.login.data,
    textToAdd:state.login.textToAdd
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addClicked: (text) => dispatch(addClicked(text)),
    onTextChanged: text => dispatch(textChanged(text)),
    onDelete: (index) => dispatch(deleteClicked(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
