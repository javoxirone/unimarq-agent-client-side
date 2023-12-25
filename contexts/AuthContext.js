// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext();

const API_URL = 'http://192.168.100.168:8000/ru/api/v1/auth/';

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [user, setUser] = useState(null);

    const decodeToken = (token) => {
        if (token) {
            const decoded = jwtDecode(token);
            setUser(decoded); // Set user info state
        }
    };

    useEffect(() => {
        if (accessToken) {
            decodeToken(accessToken);
        }
    }, [accessToken]);

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

        decodeToken(access);
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
        <AuthContext.Provider
            value={{
                accessToken,
                refreshToken,
                user,
                setTokens,
                clearTokens,
                handleRefreshToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
