import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';

const ListItem = (props) => (
        <View style={styles.styleMainContainer}>
            <Text numberOfLines={1} style={styles.styleTitle}>{props.dataItem.snippet.title}</Text>
            <Image
                style={styles.styleImage}
                source={{ uri: props.dataItem.snippet.thumbnails.high.url }}
            />
        </View>
    );

export default ListItem;
