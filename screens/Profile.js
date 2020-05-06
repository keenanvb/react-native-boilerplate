import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../actions/';

const Profile = ({ auth, navigation, logout }) => {

    if (!auth.isAuthenticated) {
        navigation.navigate('Auth');
    }


    const { user } = auth

    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout })(Profile)
