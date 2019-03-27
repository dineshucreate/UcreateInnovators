import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './style'

export default class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {dataItem} = this.props
        return (
            <View style={styles.styleMainContainer}>
                <Text numberOfLines= {1} style = {styles.styleTitle}>{dataItem.snippet.title}</Text>
                <Image
                    style={styles.styleImage}
                    source={{ uri: dataItem.snippet.thumbnails.high.url }}
                />
            </View>
        )
    }
}
