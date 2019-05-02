import React from 'react';
import { Text,View} from 'react-native';

const TextHeader = (props) => {
  const { viewStyle,textStyle } = styles;
  return (
      <View style={viewStyle}>
    <Text style={textStyle}
    onPress = {props.onClickHeader}
    >
        {props.title}
      </Text>
      </View>
   );
};

export default TextHeader;

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  viewStyle:{
    backgroundColor: '#096B76',
    width: '100%',
    height:50,
  }
  
};