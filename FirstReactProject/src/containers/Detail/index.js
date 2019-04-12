import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../../Components/ListItem/style';
import style from './style';

class Detail extends Component {

    constructor() {
        super();
        this.state = {
            detailValues: {}
        };
     }

    render() {
        this.detailValues = this.props.navigation.getParam('detailValues', 'No Value');
        console.log(`Image : ${this.detailValues.avatar_url}`);
        
        return (
            <View style={{ flex: 1 }}>
                 <View style={style.viewFlex}>
                    <Image
style={styles.profileImage}
                        source={{ uri: this.detailValues.avatar_url }}
                    />
                 </View>
                 <View style={style.viewFlex}>
                     <Text>Title : </Text>
                     <Text> No data</Text>
                 </View>
                 <View style={style.viewFlex}>
                     <Text>Description :</Text>
                     <Text>This will not happen in our</Text>
                 </View>
                 <View style={style.viewFlex}>
                     <Text>Date : </Text>
                     <Text>12/12/2018</Text>
                 </View>
            </View>
        );
    }
} export default Detail;
