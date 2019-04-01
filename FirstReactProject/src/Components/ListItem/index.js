import React, { Component } from 'react';
import { View,Image,Text,TouchableOpacity } from 'react-native';
import styles from './style';

class ListItem extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        const data = this.props && this.props.dataOne
        const dataId = data ? data.id : "Heading"
        const { open } = this.props
        return (
           <TouchableOpacity onPress = {open} >
                <View style = {styles.container}> 
                    <View style = {[styles.subContainerFlex1,styles.subContainerViewStyle]}>
                            <Image style = {styles.profileImage}
                                source = {{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                            />
                    </View>
                        <View style = {[styles.subContainerFlex2,styles.subContainerViewStyle]}> 
                            <Text style= {styles.heading}>{dataId}</Text> 
                            <Text style= {styles.description}>description</Text>
                    </View>
                    <View style = {[styles.subContainerFlex1,styles.subContainerViewStyle]}> 
                        <Text style= {styles.description}>Date</Text>
                    </View>
                </View>
           </TouchableOpacity>
        )
    }
} 
export default ListItem;