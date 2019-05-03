import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';

const ListItem = (props) => (
        <View style={props.isGrid ? styles.styleMainContainerGrid : styles.styleMainContainer}>
            <Text numberOfLines={2} style={styles.styleTitle}>{props.dataItem.snippet.title}</Text>
            <Image
                style={props.isGrid ? styles.styleImageGrid : styles.styleImage}
                source={{ uri: props.dataItem.snippet.thumbnails.high.url }}
            />
        </View>
    );

export default ListItem;
