import React, { PureComponent } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-navigation';
import { listRequest, loadMoreRequest } from './actions';
import { connect } from 'react-redux';
import ListItem from './Components/ListItem';

class List extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            dataList: [],
            isRefreshing: false,
            nextPageToken: '',
            totalResults: 0,
            pageInfo: {}
        }
    }

    renderItem = ({ item, index }) => {
        return (
            <View>
                <ListItem dataItem={item}/>
            </View>
        );
    };

    componentDidMount() {
        const { listRequest } = this.props;
        listRequest();
    }

    _onRefresh = () => {
        this.setState({ isRefreshing: true });
        const { listRequest } = this.props;
        listRequest();
    }
    shouldComponentUpdate() {
        const { loading } = this.state
        if (loading === false) {
            this.state.isRefreshing = false
        }
        return true
    }
    onScrollHandler = () => {
        const { loadMoreRequested, pageInfo, nextPageToken, loading, dataList } = this.props;
        const tR = pageInfo.totalResults
        if (tR > dataList.length && nextPageToken != undefined && loading == false) {
            loadMoreRequested(nextPageToken);
        }
    }

    render() {
        const { dataList } = this.props
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
                            onRefresh={this._onRefresh}
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

const mapStateToProps = (state) => {
    return {
        loading: state.flatList.loading,
        dataList: state.flatList.data,
        nextPageToken: state.flatList.nextPageToken,
        pageInfo: state.flatList.pageInfo
    }
}

const mapDispatchToProps = dispatch => ({
    listRequest: () => dispatch(listRequest()),
    loadMoreRequested: (nextPageToken) => dispatch(loadMoreRequest(nextPageToken))
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(List);