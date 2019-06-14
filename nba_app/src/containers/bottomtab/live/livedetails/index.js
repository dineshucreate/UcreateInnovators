
import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import stylesLive from './style';
import { connect } from 'react-redux';
import Header from '../../../../utils/header/index'

class LiveDetails extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            itemsRow: {}
        }
    }
    formatText(content) {
        const text = content.replace(/<p>/g, "").replace(/<\/p>/g, "");
        return text;
    }

    onBackPress = () => {
        console.log('..............enter');
        
        this.props.navigation.goBack();
    }

    render() {
  
        return (
            <View>
                <Header  navigation={ this.props.navigation} />
                <ScrollView style={{ backgroundColor: '#F0F0F0' }}>
                    <Image
                        style={{ height: 250 }}
                        source={{ uri: this.props.itemsRow.image }}
                        resizeMode="cover"
                    />
                    <View style={stylesLive.articleContainer}>
                        <View>
                            <Text style={stylesLive.articleTitle}>
                                {this.props.itemsRow.title}
                            </Text>
                            <Text style={stylesLive.articleData}>
                                {this.props.itemsRow.team}
                            </Text>
                        </View>
                        <View style={stylesLive.articleContent}>
                            <Text style={stylesLive.articleText}>
                                {this.formatText(this.props.itemsRow.content)}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


const mapStateToPropsLiveDetails = (state) => {
    return {
        itemsRow: state.article.item,
    };
};

export default connect(mapStateToPropsLiveDetails, null)(LiveDetails);


