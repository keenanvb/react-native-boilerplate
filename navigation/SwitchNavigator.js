import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator'
import AuthNavigator from './AuthNavigator'

const SwitchNavigator = createSwitchNavigator({
    Home: {
        screen: TabNavigator,
    },
    Auth: {
        screen: AuthNavigator
    }
}, {
    initialRouteName: 'Auth'
    // initialRouteName: 'Auth'

});

export default createAppContainer(SwitchNavigator);