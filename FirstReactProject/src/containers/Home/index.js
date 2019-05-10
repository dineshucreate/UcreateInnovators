import React, { Component } from 'react';
import { Text, View, FlatList, SafeAreaView, RefreshControl } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import ListItem from '../../Components/ListItem';
import { requestAPI } from './actions';
import { State } from 'react-native-gesture-handler';


class Home extends Component {

    constructor() {
        super();
        this.state = {
          searchEmpData: [],
          isSearching: false,
          searchText: '',
          refreshing: false,
        };
      }

     componentDidMount() {
        const { apiRequest } = this.props;
        apiRequest();
      }

      shouldComponentUpdate() {
        const { loader } = this.props;
        if (loader === false) {
          this.setState({ refreshing: false });
        }
      }
       /*-------------------------------------------------------------------*/
       onRefresh = () => {
        this.setState({ refreshing: true });
        const { apiRequest } = this.props;
        apiRequest();
      }
     /*--------------------------------------------------------------------*/
      //Serach :
        searchFilterFunction = text => {
            this.setState({ searchText: text, isSearching: true });
            const newData = this.props.empData.filter(item => {
                const itemData = `${item.employee_name.toUpperCase()}`;
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            this.setState({ searchEmpData: newData });
         };
      /*-------------------------------------------------------------------*/
  
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
      

      /*--------------------------------------------------------------------*/
    render() {
        const { navigation, empData } = this.props;
        console.log(`empData ${empData}`);

        if (!this.state.isSearching) {
            this.state.searchEmpData = empData;
         }
        return (
          <SafeAreaView style={{ backgroundColor: 'red' }}>
          {/* refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          } */}
            <View style={{ backgroundColor: 'green' }}>
              {
                empData ?
                <FlatList
                    data={this.state.searchEmpData}
                    ListHeaderComponent={this.renderHeader}
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                      />
                    }
                    renderItem={({ item }) => (
                      <ListItem
                        dataOne={item} open={() => {
                          navigation.navigate('detail', { detailValues: item });
                        }}
                      />
                    )}
                /> : <View>
                        <Text>No data found</Text>
                    </View>
              }
            </View>
           </SafeAreaView>
        );
        }
}

const mapStateToProps = (state) => ({
  empData: state.home.empData,
  loader: state.home.loading,
});

const mapDispatchToProps = (dispatch) => ({
  apiRequest: () => dispatch(requestAPI())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Home);
