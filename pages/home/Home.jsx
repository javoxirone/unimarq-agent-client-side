import { useContext, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import styles from './home.style';
import AuthContext from '../../contexts/AuthContext';
import OrgList from '../../components/orglist/OrgList';
import Btn from '../../components/btn/Btn';
const Home = ({ navigation }) => {
    const { accessToken, clearTokens, user } = useContext(AuthContext);


    const handleLogout = () => {
        clearTokens(); // Clear tokens when logging out
        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <View style={{ marginBottom: 8 }}>
                    {/* <Text style={{ fontSize: 18, fontWeight: "bold" }}>{user.first_name} {user.last_name}</Text> */}
                    {/* <Text>{user.username}</Text> */}
                </View>
                <Btn title="Chiqish" onPress={handleLogout} />
            </View>
            <View style={styles.block}>
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12}}>
                    <Text style={{fontSize: 18, fontWeight: "bold"}}>Tashkilotlar</Text>
                    <Btn title="Hammasini ko'rish" onPress={() => navigation.navigate("Organizations")} />
                </View>
                <OrgList />
            </View>

        </View>
    )
}

export default Home;