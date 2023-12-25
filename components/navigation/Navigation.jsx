import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './navigation.style';
const Navigation = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Image source={require('../../assets/icons/home.png')} style={{ width: 18, height: 18 }} />
                <Text style={styles.buttonText}>Asosiy</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Organizations')}
            >
                <Image source={require('../../assets/icons/orgs.png')} style={{ width: 18, height: 18 }} />
                <Text style={styles.buttonText}>Tashkilotlar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('OrgCreate')}
            >
                <Image source={require('../../assets/icons/plus.png')} style={{ width: 48, height: 48 }} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Orders')}
            >
                <Image source={require('../../assets/icons/orders.png')} style={{ width: 18, height: 18 }} />
                <Text style={styles.buttonText}>Buyurtmalar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Profile')}
            >
                <Image source={require('../../assets/icons/profile.png')} style={{ width: 18, height: 18 }} />
                <Text style={styles.buttonText}>Profil</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Navigation;
