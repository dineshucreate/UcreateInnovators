import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress = {props.onClick}
    >
      <Text style={textStyle}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    backgroundColor: '#06878A',
    borderWidth: 1,
    borderColor: '#06878A',
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 25,
    paddingLeft: 25,
    marginTop: 50,
    width: 300
  }
};