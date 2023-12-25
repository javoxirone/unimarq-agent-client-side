import {useContext} from 'react';
import {Button, View, Text, ActivityIndicator} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import useFetch from '../../hooks/useFetch';
import AuthContext from '../../contexts/AuthContext';

const OrgList = () => {
    const {accessToken} = useContext(AuthContext);
    const {data, isLoading, error} = useFetch("organization", {"max_items": 5}, accessToken);

    const tableHead = ['#', 'Tashkilot nomi', 'Tashkilot adresi', "Xodimi"];
    const flexArr = [0.5, 2, 2, 2];
    return (
        <View>


            {isLoading ? (
                <ActivityIndicator size='large' color={"#312651"}/>
            ) : error ? (
                <Text>Xatolik bor, keyinroq urunib ko'ring!</Text>
            ) : (
                <Table borderStyle={{borderWidth: 2, borderColor: '#000000'}}>
                    <Row
                        data={tableHead}
                        style={{
                            backgroundColor: '#000000',
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        textStyle={{color: 'white', margin: 6, fontWeight: 'bold',}}
                        flexArr={flexArr}
                    />
                    {data.map((item, index) => (
                        <Row
                            key={item.id}
                            data={[index + 1, item.org_name, item.org_address, item.contact_name]}
                            flexArr={flexArr}
                            textStyle={{
                                paddingHorizontal: 8
                            }}
                        />
                    ))}
                </Table>
            )}
        </View>
    );
};

export default OrgList;
