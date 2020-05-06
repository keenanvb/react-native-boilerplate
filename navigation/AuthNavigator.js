import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/Login.js'
import SignUpScreen from '../screens/SignUp.js'
import SplashScreen from '../screens/Splash.js'

const AuthNavigator = createStackNavigator({
    Splash: {
        screen: SplashScreen,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    SignUp: {
        screen: SignUpScreen,
        navigationOptions: {
            header: null
        }
    }

});

export default createAppContainer(AuthNavigator);