import React from 'react';
// import { Ionicons } from '@expo/vector-icons'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TouchableOpacity } from 'react-native';

import HomeScreen from '../screens/Home'
import SearchScreen from '../screens/Search'
import ActivityScreen from '../screens/Activity'
import ProfileScreen from '../screens/Profile'
import PostScreen from '../screens/Post'
import CameraScreen from '../screens/Camera'
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();
export const HomeNavigator = createAppContainer(createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
                headerTitle: 'Home',
                headerLeft: (
                    <TouchableOpacity onPress={() => navigation.navigate('Camera')} >
                        <Ionicons style={{ marginLeft: 10 }} name={'ios-camera'} size={30} />
                    </TouchableOpacity>
                ),
                headerRight: (
                    <TouchableOpacity onPress={() => console.log('Message')} >
                        <Ionicons style={{ marginRight: 10 }} name={'ios-send'} size={30} />
                    </TouchableOpacity>
                ),
            })
        },
        Camera: {
            screen: CameraScreen,
            navigationOptions: {
                header: null
            }
        }
    }, { headerLayoutPreset: 'center' }
));

HomeNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.routes.some(route => route.routeName === 'Camera')) {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

export const SearchNavigator = createAppContainer(createStackNavigator(
    {
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                title: 'Search'
            }
        }
    }, { headerLayoutPreset: 'center' }
));

export const ActivityNavigator = createAppContainer(createStackNavigator(
    {
        Activity: {
            screen: ActivityScreen,
            navigationOptions: {
                title: 'Activity'
            }
        }
    }, { headerLayoutPreset: 'center' }
));

export const ProfileNavigator = createAppContainer(createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                title: 'Profile'
            }
        }
    }, { headerLayoutPreset: 'center' }
));

export const PostNavigator = createAppContainer(createStackNavigator(
    {
        Post: {
            screen: PostScreen,
            navigationOptions: {
                title: 'Post'
            }
        }
    }, { headerLayoutPreset: 'center' }
));

