import React, {useState, useContext, useEffect} from 'react';
import {View, ScrollView, Text, TextInput, StyleSheet} from 'react-native';

import Btn from '../../components/btn/Btn';
import ImageUpload from "../../components/imagepicker/ImagePicker";
import SelectInput from "../../components/selectinput/SelectInput";

import useFetch from "../../hooks/useFetch";
import AuthContext from "../../contexts/AuthContext";

// TODO: fix problem with territory field and handle the org_type field.
// TODO: handle the formData submission.
const OrgCreate = () => {
    const {accessToken} = useContext(AuthContext);
    const [formData, setFormData] = useState({
        image: '',
        region: '',
        territory: '',
        org_name: '',
        org_type: '',
        org_address: '',
        org_landmark: '',
        org_phone: '',
        org_location: '',
        lon: '',
        lat: '',
        inn: '',
        contact_name: '',
        license: '',
        passport: '',
    });

    function getRegionList() {
        const {data, isLoading, error} = useFetch("region", {}, accessToken, "");
        return data;
    }

    function getTerritoryList(regionId) {
        const {data, isLoading, error} = useFetch("territory", {"region": regionId}, accessToken, "");
        return data
    }

    const nonTextFields = ['image', 'region', 'territory', 'org_type', 'license', 'passport'];

    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log('Form Data:', formData);
    };

    return (
        <ScrollView>
            {/* Render input fields for each data field */}
            <View style={styles.container}>
                <ImageUpload keyTitle="image" handleInputChange={handleInputChange}/>
                <SelectInput keyTitle="region" handleInputChange={handleInputChange}
                             options={getRegionList()}/>
                <SelectInput keyTitle="territory" handleInputChange={handleInputChange}
                             options={getTerritoryList(formData['region'])}/>
                <SelectInput keyTitle="org_type" handleInputChange={handleInputChange}
                             options={[{title: 'Type 1', id: 'type1'}, {title: 'Type 2', id: 'type2'}]}/>
                {Object.keys(formData).map((field) => {
                    if (!nonTextFields.includes(field)) {
                        return (
                            <View key={field} style={styles.inputContainer}>
                                <Text>{field.replace(/_/g, ' ').toUpperCase()}</Text>
                                <TextInput
                                    style={styles.input}
                                    value={formData[field]}
                                    onChangeText={(text) => handleInputChange(field, text)}
                                />
                            </View>
                        );
                    }

                })}
                <ImageUpload keyTitle="license" handleInputChange={handleInputChange}/>
                <ImageUpload keyTitle="passport" handleInputChange={handleInputChange}/>
                <Btn title="Yaratish" onPress={handleSubmit}/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        margin: 15,
        backgroundColor: "#ffffff",
        borderRadius: 8,
    },
    inputContainer: {
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginTop: 4,
    },
});

export default OrgCreate;