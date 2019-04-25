import React from 'react';
import { ImageBackground, View, TouchableOpacity } from 'react-native';

const TextHeaderDrawer = (props) => {
  const { viewStyle, imageStyle } = styles;
  return (
    
      <View style={viewStyle}>
      <TouchableOpacity onPress={props.onClickIcon}>
        <ImageBackground source={props.source} style={imageStyle} />
        </TouchableOpacity>
      </View>
   
  );
};

export default TextHeaderDrawer;

const styles = {
  imageStyle: {
    width: 30,
    height: 30,
    top:15,
    left:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewStyle: {
    backgroundColor: '#096B76',
    width: '100%',
    height: 60,
  }

};