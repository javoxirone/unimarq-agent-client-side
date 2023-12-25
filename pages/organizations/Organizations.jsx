import { useContext } from 'react';
import { Button, View, Text, ActivityIndicator, FlatList } from 'react-native';
import useFetch from '../../hooks/useFetch';
import OrgCard from '../../components/orgcard/OrgCard';
import AuthContext from '../../contexts/AuthContext';
import Btn from '../../components/btn/Btn';
const Organizations = ({ navigation }) => {
    const { accessToken } = useContext(AuthContext);
    const { data, isLoading, error } = useFetch("organization", {}, accessToken);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 16, }}>
            <Btn title="Yangi tashkilot qo'shish +" onPress={() => navigation.navigate("OrgCreate")} />
            {isLoading ? (
                <ActivityIndicator size='large' color={"#312651"} />
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <OrgCard title={item.org_name} description={[item.org_type, item.org_address, item.org_phone, item.contact_name]} />
                        );
                    }}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ columnGap: 12 }}
                    vertical
                />
            )}
        </View>
    );
}

export default Organizations;