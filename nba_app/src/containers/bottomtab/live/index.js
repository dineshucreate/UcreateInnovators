import React from 'react';
import { Text, View, Alert, Image, FlatList, TouchableOpacity } from 'react-native';
import stylesLive from './style';
import articleJson from '../../../../articles.json'
import { articleRequestForData, sendData } from '../live/actions'
import { connect } from 'react-redux';

class Live extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    //this.state.items = articleJson.items;

  }
  componentDidMount() {
    const { articleRequestForData } = this.props;
    articleRequestForData()
  }

  navigateScreen = (item) => {
    this.props.sendData(item);
    this.props.navigation.navigate('articleDetail');
  }


  renderListItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.navigateScreen(item)}>
      <View style={stylesLive.cardContainer}>
        <View>
          <Image
            style={{ height: 200, justifyContent: 'space-around' }}
            source={{ uri: `${item.image}` }}
            resizeMode='cover'
          />
        </View>
        <View style={stylesLive.contentCard}>
          <Text style={stylesLive.titleCard}>{item.title}</Text>
          <View style={stylesLive.bottomCard}>
            <Text style={stylesLive.bottomCardTeam}>{item.team}</Text>

          </View>
        </View>
      </View>
    </TouchableOpacity>
  );


  render() {
    return (
      <FlatList
        data={this.props.items}
        renderItem={this.renderListItem}
        keyExtractor={item => item.id} />
    );
  }
}

const mapStateToPropsLive = (state) => {
  return {
    items: state.article.items,
  };
};
const mapDispatchToPropsLive = (dispatch) => ({
  articleRequestForData: () => dispatch(articleRequestForData(articleJson.items)),
  sendData: (item) => dispatch(sendData(item))


});

export default connect(mapStateToPropsLive, mapDispatchToPropsLive)(Live);
