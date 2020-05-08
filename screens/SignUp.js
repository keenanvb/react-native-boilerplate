import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { register } from '../actions'
import * as Animatable from 'react-native-animatable'
import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont()
const SignUp = ({ auth, navigation, register }) => {

    const [signUpData, setSignUpData] = useState({
        email: 'admin1234 @gmail.com',
        password: 'admin1234',
        confirmPassword: 'admin1234',
        formErrors: {
            email: false
        }
    });

    const [secureText, setSecureText] = useState(true)

    const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    const onFormDataChange = (name, text) => {
        const { formErrors } = signUpData
        switch (name) {
            case "email":
                formErrors.email = emailRegex.test(text)
                    ? true
                    : false;
                break;
            default:
                break;
        }
        setSignUpData({ ...signUpData, [name]: text })
    }

    const handleSignUp = () => {
        const { email, password } = signUpData
        register({ email, password }, navigation);
        // navigation.navigate('SignUp');
    }

    const { container, header, footer,
        header_text, footer_text, action,
        textInput, button,
        signIn, textSignIn, signUp,
        disclaimer, highlightDisclaimerText, highlightDisclaimerTextBold } = styles

    const { email, password, confirmPassword, formErrors } = signUpData

    return (
        <View style={container}>
            <View style={header}>
                <Text style={header_text}> Welcome</Text>
            </View>
            <Animatable.View
                animation='fadeInUpBig'
                style={footer}>
                <Text style={footer_text}> Email</Text>
                <View style={action}>
                    <Feather name="user" size={20} color='black' />
                    <TextInput
                        placeholder="Email"
                        style={textInput}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={(email) => {
                            onFormDataChange('email', email)
                        }}
                    />
                    {formErrors.email ?
                        <Feather name="check-circle" size={20} color='green' /> :
                        <Feather name="circle" size={20} color='grey' />
                    }
                </View>
                <Text style={footer_text}> Password</Text>
                <View style={action}>
                    <Feather name="lock" size={20} color='black' />
                    <TextInput
                        placeholder="Password"
                        style={textInput}
                        secureTextEntry={secureText}
                        value={password}
                        onChangeText={(password) => {
                            onFormDataChange('password', password)
                        }}
                    />
                    {secureText ?
                        <Feather onPress={() => { setSecureText(!secureText) }} name="eye-off" size={20} color='gray' />
                        :
                        <Feather onPress={() => { setSecureText(!secureText) }} name="eye" size={20} color='gray' />
                    }
                </View>
                <Text style={footer_text}> Confirm Password</Text>
                <View style={action}>
                    <Feather name="lock" size={20} color='black' />
                    <TextInput
                        placeholder="Confirm Password"
                        style={textInput}
                        secureTextEntry={secureText}
                        value={confirmPassword}
                        onChangeText={(password) => {
                            onFormDataChange('confirmPassword', password)
                        }}
                    />
                    {secureText ?
                        <Feather onPress={() => { setSecureText(!secureText) }} name="eye-off" size={20} color='gray' />
                        :
                        <Feather onPress={() => { setSecureText(!secureText) }} name="eye" size={20} color='gray' />
                    }
                </View>
                <View style={disclaimer}>
                    <Text style={highlightDisclaimerText}>
                        By signing up you agree to our
                    </Text>
                    <Text style={[highlightDisclaimerText, highlightDisclaimerTextBold]}>
                        {" "}
                        Terms of service
                    </Text>
                    <Text style={highlightDisclaimerText}>
                        {" "}
                        and
                    </Text>
                    <Text style={[highlightDisclaimerText, highlightDisclaimerTextBold]}>
                        {" "}
                        Privacy Policy
                    </Text>
                </View>
                <View style={button}>
                    <TouchableOpacity style={[signIn, signUp]} onPress={() => {

                        handleSignUp()
                    }}>
                        <Text style={[textSignIn, { color: '#4dc2f8' }]}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05375a',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    header_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    footer_text: {
        color: '#05375a',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row'
    },
    textSignIn: {
        color: 'white',
        fontWeight: 'bold',
        margin: 20,
        fontSize: 18
    },
    signUp: {
        borderWidth: 1,
        borderColor: '#4dc2f8',
        marginTop: 5
    },
    disclaimer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
    },
    highlightDisclaimerText: {
        color: 'gray'
    },
    highlightDisclaimerTextBold: {
        fontWeight: 'bold'
    }
});

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { register })(SignUp)
