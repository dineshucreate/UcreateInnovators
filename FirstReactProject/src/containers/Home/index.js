import React, { Component } from 'react';
import { Text, View, FlatList, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from '../../Components/ListItem';
import { requestAPI } from './actions';

class Home extends Component {

    constructor() {
        super();
        this.state = {
          resFromApi: []  
        };
      }

     componentDidMount() {
        const { apiRequest } = this.props;
        apiRequest();
      }

    render() {
        const { navigation, empData } = this.props;
        console.log(`empData ${empData}`);
        
        return (
          <SafeAreaView style={{ backgroundColor: 'red' }}>
            <View style={{ backgroundColor: 'green' }}>
              {
                empData ?
                <FlatList
                    data={empData}
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
});

const mapDispatchToProps = (dispatch) => ({
  apiRequest: () => dispatch(requestAPI())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Home);
