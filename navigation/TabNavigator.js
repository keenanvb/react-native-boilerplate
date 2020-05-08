import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeNavigator, SearchNavigator, ProfileNavigator, ActivityNavigator, PostNavigator } from './StackNavigator'
Icon.loadFont()
const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({ focused }) => (
                <Icon name='ios-home' size={32} color={focused ? 'black' : 'gray'} />
            )
        }
    },
    Search: {
        screen: SearchNavigator,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({ focused }) => (
                <Icon name='ios-search' size={32} color={focused ? 'black' : 'gray'} />

            )
        }
    },
    Post: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({ focused }) => (
                <Icon name='ios-add-circle-outline' size={32} color={focused ? 'black' : 'gray'} />

            )
        }
    },
    // Activity: {
    //     screen: ActivityNavigator,
    //     navigationOptions: {
    //         tabBarLabel: ' ',
    //         tabBarIcon: ({ focused }) => (
    //             <Icon name='ios-heart' size={32} color={focused ? 'black' : 'gray'} />
    //         )
    //     }
    // },
    Profile: {
        screen: ProfileNavigator,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({ focused }) => (
                <Icon name='ios-person' size={32} color={focused ? 'black' : 'gray'} />

            )
        }
    },

}, {
    tabBarOptions: {
        style: {
            paddingVertical: 10,
            height: 60
        }
    }
});

export default createAppContainer(TabNavigator);