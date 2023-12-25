import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import styles from './login.style';
const Login = ({ navigation, setTokens }) => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://192.168.100.168:8000/ru/api/v1/auth/token/', {
                username,
                password,
            });
            const { access, refresh } = response.data;
            console.log(access, refresh);
            if (access && refresh) {
                setTokens(access, refresh);
            }
        } catch (error) {
            console.error('Login Error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginCard}>
                <Text style={styles.title}>Unimarq System</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
                <View>
                    <Button title="Login" onPress={handleLogin} color="#000000" />
                </View>
            </View>
        </View>
    );
};

export default Login;
