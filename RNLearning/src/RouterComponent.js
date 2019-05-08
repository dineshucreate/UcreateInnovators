
import { createStackNavigator, 
         createAppContainer, 
         createDrawerNavigator } from 'react-navigation';
import React from 'react';
import { connect } from 'react-redux';
import Home from './containers/Home';
import Login from './containers/LogIn';
import List from './containers/List';
import TabBar from './containers/TabBar';
import { Colors } from './utilities/Colors';
import CustomDrawer from './containers/CustomDrawer';

const Drawer = createDrawerNavigator(
    {
        FlatList: {
            screen: TabBar,
            navigationOptions: () => ({
                header: null
           })
        },
        Learning: {
            screen: Home,
            navigationOptions: () => ({
                header: null
            })
        },
    },
    {
      drawerBackgroundColor: 'white',
      contentOptions: {
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: 'white',
        activeTintColor: 'white',
        inactiveTintColor: 'blue',
      },
      contentComponent: CustomDrawer,
      drawerWidth: 200
    }
  );

const Components = {
    drawer: {
        screen: Drawer,
        navigationOptions: () => ({
            header: null,
        })
    },
    flatList: {
        screen: List,
        navigationOptions: () => ({
            title: 'FlatList',
            headerStyle: {
                backgroundColor: Colors.baseColor
            },
            headerLeft: null,
            headerTintColor: 'white',
            key: 'flatList',
            headerTitleStyle: {
                color: 'white',
                alignSelf: 'center',
                textAlign: 'center'
            },
        })
    },
    home: {
        screen: Home,
        navigationOptions: () => ({
            title: 'Learning',
            key: 'home',
            headerStyle: {
                backgroundColor: Colors.baseColor
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                color: 'white',
                alignSelf: 'center',
                textAlign: 'center'
            },
        })
    },
};

const AuthStackLogin = createStackNavigator(
    {
        login: {
            screen: Login,
            navigationOptions: () => ({
                header: null,
            })
        },
        ...Components,
    },
);

const AuthStack = createStackNavigator(
    {
        ...Components,
        login: {
            screen: Login,
            navigationOptions: () => ({
                header: null,
            })
        },
    },
);

class StackChooser extends React.Component {

    render() {
        const StackLogin =
            createAppContainer(AuthStackLogin);
        const Stack =
            createAppContainer(AuthStack);
        return (
            this.props.loginData ? <Stack /> : <StackLogin />

        );
    }
}

const mapStateToProps = (state) => ({
    loginData: state.login.loginData,
});

export default connect(mapStateToProps)(StackChooser);

