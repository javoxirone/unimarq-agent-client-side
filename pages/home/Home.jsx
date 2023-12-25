import { useState, useContext, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import styles from './home.style';
import AuthContext from '../../contexts/AuthContext';
import OrgList from '../../components/orglist/OrgList';
import Btn from "../../components/btn/Btn";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";
const Home = ({ navigation }) => {
    const { accessToken, clearTokens } = useContext(AuthContext);

    const [user, setUser] = useState(jwtDecode(accessToken));

    useEffect(() => {
        setUser(jwtDecode(accessToken));
    }, []);

    const handleLogout = () => {
        clearTokens(); // Clear tokens when logging out
        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <View style={{ marginBottom: 8 }}>
                     <Text style={{ fontSize: 18, fontWeight: "bold" }}>{user.first_name} {user.last_name}</Text>
                     <Text>{user.username}</Text>
                </View>
                <Btn title="Chiqish" onPress={handleLogout} />
            </View>
            <View style={styles.block}>
                <View style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                    <Text style={{fontSize: 18, fontWeight: "bold"}}>Tashkilotlar</Text>
                    <OrgList />
                    <Btn title="Hammasini ko'rish" onPress={() => navigation.navigate("Organizations")} />
                </View>


            </View>

        </View>
    )
}

export default Home;