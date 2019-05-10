import React, { Component } from 'react'
import axios from 'axios';
import {
    FlatList,
    View,
    Text,
    StyleSheet,
    Alert,
    Image
} from 'react-native'

export default class MyFlatList extends Component {

    static navigationOptions = {
        title: 'Second Screen',
    };

    constructor(props) {
        super(props);
        this.state = {
            list: []

        }
    }

    // list = [
    //     { key: 'Android', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'iOS', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'Java', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'Swift', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'Php', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'Hadoop', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'Sap', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'Python', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'Ajax', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'C++', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'Ruby', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'Rails', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: '.Net', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'Perl', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'Sap', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'Python', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'Ajax', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'C++', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'Ruby', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'Rails', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: '.Net', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' },
    //     { key: 'Perl', picture: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png' }
    // ];

    fetchApi = () => {
        try {
            console.log("++++++ inside API method ++++++");
            axios.get('https://reactnativecode.000webhostapp.com/FlowersList.php'
            ).then(res => {
                const response = res.data;
                console.log("++++++++++++response", response);
                this.setState({ list: response });
            })
        }
        catch (error) {
            console.log("error===============res", error);
        }
    }
    componentDidMount() {
        console.log("------ inside ComponentDidMount ---------");
        this.fetchApi();
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };
    //handling onPress action  
    getListViewItem = (item) => {
        Alert.alert(item.flower_name);
    }

    render() {
        const { navigation } = this.props;
        const name = navigation.getParam('name', 'USER');
        return (
            <View style={styles.container}>
                <Text style={styles.item}>Welcome {name}</Text>
                <FlatList
                    data={this.state.list}
                    renderItem={({ item }) =>
                        <View style={styles.subContainer}>
                            <Image source={{ uri: item.flower_image_url }} style={styles.imageView} />
                            <Text style={styles.item}
                                onPress={this.getListViewItem.bind(this, item)}>{item.flower_name}</Text>
                        </View>}
                    numColumns={2}
                    ItemSeparatorComponent={this.renderSeparator}
                    keyExtractor={item => item.id}

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    subContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'

    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    imageView: {
        width: 50,
        height: 50,
        margin: 7,
        borderRadius: 7
    }
})  