import React, { useState } from 'react'
import {
    Text, View, StyleSheet, TextInput,
    Image, Dimensions, TouchableOpacity, Modal,
    SafeAreaView
} from 'react-native'
import { connect } from 'react-redux'
const { width } = Dimensions.get('window');

const Post = ({ navigation }) => {

    const [showModal, setModal] = useState(false)

    const setLocation = (location) => {
        setModal(false)
        // updateLocation(location)
    }

    const modal = () => {
        return (
            <Modal animationType='slide' transparent={false} visible={showModal}>
                <SafeAreaView style={[styles.container, styles.center]}>
                    <TouchableOpacity style={styles.border} onPress={() => setLocation('CPT')}>
                        <Text style={styles.gray}>CPT</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </Modal>
        )
    }

    return (
        <View style={styles.container}>
            {modal()}
            {/* <Text>Upload</Text> */}
            {/* <Image style={styles.postPhoto} source={{ uri: post.photo }} /> */}
            <TouchableOpacity style={styles.border} onPress={() => setModal(true)}>
                {/* <Text style={styles.gray}>{post.location ? post.location : 'Add a Location'}</Text> */}
            </TouchableOpacity>
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
    button: {
        marginTop: 20,
        paddingVertical: 10,
        alignItems: 'center',
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    postPhoto: {
        height: 250,
        width: width,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    border: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {})(Post)
