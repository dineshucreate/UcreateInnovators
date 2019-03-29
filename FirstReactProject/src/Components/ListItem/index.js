import React, { Component } from 'react';
import { View,Image,Text } from 'react-native';
import style from './style';

class ListItem extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        const data = this.props && this.props.dataOne
        console.log("Data the print "+ data);
        const dataId = data ? data.id : "Heading"
        
        return (
           <View style = {styles.container}> 
               <View>
                    <Image style = {styles.profileImage}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    />
               </View>
                <View> 
                     <Text style= {styles.heading}>{dataId}</Text> 
                     <Text style= {styles.description}>description</Text>
               </View>
               <Text style= {styles.description}>Date</Text>
           </View>
        )
    }
} 
export default ListItem;