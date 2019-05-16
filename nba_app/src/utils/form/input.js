import React, { Component } from 'react';

import { StyleSheet, View, Text, TextInput } from 'react-native';

const input = (props) => {
    let template = null;

    switch (props.type) {
        case "textinput":
            template =
                <TextInput
                    {...props}
                    style={[styles.input,props.overrideStyle]} />
            break;
        default:
            return template;
    }


    return template;
}

const styles = StyleSheet.create({
    input: {
      width: '100%',
      borderBottomWidth: 2,
      padding: 5,
      borderBottomColor:'#eaeaea',
      fontSize:16,
      marginTop:10
    },
  
  });
export default input;