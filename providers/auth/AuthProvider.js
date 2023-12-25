// AuthProvider.js
import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import Login from '../../pages/login/Login';
import Logout from '../../components/logoutbtn/LogoutBtn';
import axios from 'axios';
import Index from '../../app';
import { Text } from 'react-native';
const API_URL = 'https://unimarq.jprq.app/ru/api/v1/auth/';

const AuthProvider = () => {
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);

    useEffect(() => {
        checkStoredTokens();
    }, []);

    const checkStoredTokens = async () => {
        const storedAccessToken = await SecureStore.getItemAsync('accessToken');
        const storedRefreshToken = await SecureStore.getItemAsync('refreshToken');

        if (storedAccessToken && storedRefreshToken) {
            setAccessToken(storedAccessToken);
            setRefreshToken(storedRefreshToken);
        }
    };

    const setTokens = async (access, refresh) => {
        setAccessToken(access);
        setRefreshToken(refresh);

        await SecureStore.setItemAsync('accessToken', access);
        await SecureStore.setItemAsync('refreshToken', refresh);
    };

    const clearTokens = async () => {
        setAccessToken(null);
        setRefreshToken(null);

        await SecureStore.deleteItemAsync('accessToken');
        await SecureStore.deleteItemAsync('refreshToken');
    };

    const handleRefreshToken = async () => {
        try {
            const response = await axios.post(`${API_URL}token/refresh/`, {
                refresh: refreshToken,
            });

            const { access } = response.data;
            if (access) {
                setAccessToken(access);
                await SecureStore.setItemAsync('accessToken', access);
            }
        } catch (error) {
            console.error('Refresh Token Error:', error);
        }
    };

    useEffect(() => {
        const refreshInterval = setInterval(() => {
            if (refreshToken) {
                handleRefreshToken();
            }
        }, 15 * 60 * 1000); // Refresh every 15 minutes

        return () => clearInterval(refreshInterval);
    }, [refreshToken]);

    return (
        <>
            {accessToken ? (
                <Index />
            ) : (
                <Login setTokens={setTokens} />
            )}
        </>
    );
};

export default AuthProvider;
