import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { View, 
         FlatList, 
         RefreshControl, 
         AsyncStorage, 
         TouchableOpacity, 
         Text, 
         Switch } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './style';
import { listRequest, loadMoreRequest } from './actions';
import ListItem from './Components/ListItem';
import Notification from './Components/Notification';

class List extends Notification {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            dataListState: [],
            dataListSearch: [],
            searchText: '',
            isSearching: false,
            isRefreshing: false,
            nextPageToken: '',
            totalResults: 0,
            pageInfo: {},
            isSwitchOn: false,
        };
        this.setData();
    }

    setData = async () => {
        await AsyncStorage.setItem('imgDrawer', 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png');
        const uri = await AsyncStorage.getItem('imgDrawer');
        console.log(`URI: ${JSON.stringify(uri)}`);
    }

    componentDidMount() {
        const { listRequestP } = this.props;
        listRequestP();
        super.checkPermission();
        super.createNotificationListeners();
    }
    shouldComponentUpdate() {
        const { loading } = this.state;
        if (loading === false) {
            this.state.isRefreshing = false;
        }
        return true;
    }
    onScrollHandler = () => {
        const { loadMoreRequested, pageInfo, nextPageToken, loading, dataList } = this.props;
        const tR = pageInfo.totalResults;
        if (tR > dataList.length && nextPageToken !== undefined && loading === false) {
            loadMoreRequested(nextPageToken);
        }
    }
    onRefresh = () => {
        this.setState({ isRefreshing: true });
        const { listRequestP } = this.props;
        listRequestP();
    }
    renderItem = ({ item }) => (
        <View>
            <ListItem dataItem={item} isGrid={this.state.isSwitchOn} />
        </View>
    );
    searchFilterFunction = text => { 
        this.setState({ searchText: text, isSearching: true }); 
        const { dataListSearch } = this.state;  
        const newData = dataListSearch.filter(item => {      
            const itemData = `${item.snippet.title.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;    
        });    
        this.setState({ dataListState: newData });  
      };
    renderHeader = () => (      
          <SearchBar        
            placeholder="Type Here..."        
            lightTheme        
            round        
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.searchText}   
            onCancel={() => { this.setState({ isSearching: false }); }}         
          />    
        );
    render() {
        const { dataList } = this.props;
        this.state.dataListSearch = dataList;
        if (!this.state.isSearching) {
            this.state.dataListState = dataList;
        }
        const { dataListState, isSwitchOn } = this.state;
        return (
            <SafeAreaView style={styles.styleContainer}>
                <View style={styles.mainView}>
                    <View style={styles.topBarContainer}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.toggleDrawer()}
                        >
                            <Text style={styles.titleText}>Menu</Text>
                        </TouchableOpacity>
                        <Switch
                            onValueChange={(value) => { this.setState({ isSwitchOn: value }); }}
                            value={isSwitchOn}
                            ios_backgroundColor='blue'
                            tintColor='blue'
                            trackColor='blue'
                            thumbColor='grey'
                            style={styles.switch}
                        />
                    </View>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={dataListState}
                        numColumns={isSwitchOn ? 2 : 1}
                        key={isSwitchOn ? 2 : 1}
                        style={styles.styleList}
                        renderItem={this.renderItem}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.isRefreshing}
                                onRefresh={this.onRefresh}
                                title="Pull to refresh"
                                tintColor="#000000"
                                titleColor="#000000"
                            />
                        }
                        onEndReached={this.onScrollHandler}
                        onEndThreshold={0}
                        ListHeaderComponent={this.renderHeader}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
const mapStateToProps = (state) => ({
        loading: state.flatList.loading,
        dataList: state.flatList.data,
        nextPageToken: state.flatList.nextPageToken,
        pageInfo: state.flatList.pageInfo
    });
const mapDispatchToProps = dispatch => ({
    listRequestP: () => dispatch(listRequest()),
    loadMoreRequested: (nextPageToken) => dispatch(loadMoreRequest(nextPageToken))
});
module.exports = connect(mapStateToProps, mapDispatchToProps)(List);
