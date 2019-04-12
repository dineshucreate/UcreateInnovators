import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { View, FlatList, RefreshControl } from 'react-native';
import styles from './style';
import { listRequest, loadMoreRequest } from './actions';
import ListItem from './Components/ListItem';
import Notification from './Components/Notification';

class List extends Notification {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            dataList: [],
            isRefreshing: false,
            nextPageToken: '',
            totalResults: 0,
            pageInfo: {},
        };
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
            <ListItem dataItem={item} />
        </View>
    );
    render() {
        const { dataList } = this.props;
        return (
            <SafeAreaView style={styles.styleContainer}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={dataList}
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
                />
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
