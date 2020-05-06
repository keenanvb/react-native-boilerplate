import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, FlatList, ActivityIndicator, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getPosts } from '../actions'
const { width } = Dimensions.get('window');
import axios from 'axios'



const Home = ({ auth, post, getPosts }) => {

    const [data, setData] = useState({
        loading: false,
        result: [],
        page: 1,
        seed: 1,
        error: null,
        refreshing: false
    });

    useEffect(() => {
        makeRequest()
    }, [])

    const makeRequest = async () => {
        try {
            setData({
                ...data,
                loading: true
            })
            const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=5`;

            let res = await axios.get(url);
            if (res) {
                setData({
                    ...data,
                    result: [...result, ...res.data.results],
                    loading: false,
                    refreshing: false
                })
            }

        } catch (e) {
            console.log('e', e)
        }
    }

    const handleRefresh = () => {
        setData({
            ...data,
            seed: seed + 1,
            refreshing: true
        });
        makeRequest()
    }

    const handleLoadMore = () => {
        setData({
            ...data,
            page: page + 1,
        });


        makeRequest()
    }

    const Item = ({ id, title }) => {
        return (
            <TouchableOpacity
                // onPress={() => onSelect(id)}
                style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        );
    }

    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    const renderFooter = () => {
        const { loading } = data;
        if (!loading) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    const renderHeader = () => {
        return <TextInput placeholder="Search" />;
    };

    const { result, refreshing, seed, page } = data

    // console.log('data', data);
    return (
        <View style={styles.container}>
            {}
            {/* <SafeAreaView style={styles.container}> */}
            <FlatList
                data={result}
                renderItem={({ item }) => (
                    <Item
                        id={item.id}
                        title={`${item.name.first} ${item.name.last}`}
                    // selected={!!selected.get(item.id)}
                    // onSelect={onSelect}
                    />
                )}
                keyExtractor={item => item.email}
                ListHeaderComponent={renderHeader}
                ListFooterComponent={renderFooter}
                ItemSeparatorComponent={renderSeparator}
                refreshing={refreshing}
                onRefresh={handleRefresh}
                onEndReached={handleLoadMore}
            // onEndReachedThreshold={0}
            />
            {/* </SafeAreaView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Item: {
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 32,
    },
});

const mapStateToProps = (state) => {
    return {
        post: state.post,
        auth: state.auth
    }
}

export default connect(mapStateToProps, { getPosts })(Home)
