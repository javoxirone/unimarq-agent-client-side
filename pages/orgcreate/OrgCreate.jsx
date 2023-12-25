import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import Btn from '../../components/btn/Btn';

// TODO: work on image picker

const OrgCreate = () => {
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

    const [selectedImage, setSelectedImage] = useState(null);

    const launchImagePicker = () => {
        ImagePicker.showImagePicker(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = { uri: response.uri };
            // Do something with the selected image source
          }
        });
      };
      

    return (
        <ScrollView>
            {/* Render input fields for each data field */}
            <View style={styles.container}>
                {Object.keys(formData).map((field) => (
                    <View key={field} style={styles.inputContainer}>
                        <Text>{field.replace(/_/g, ' ').toUpperCase()}</Text>
                        <TextInput
                            style={styles.input}
                            value={formData[field]}
                            onChangeText={(text) => handleInputChange(field, text)}
                        />
                    </View>
                ))}
                 <Button title="Select Image" onPress={launchImagePicker} />

                <Btn title="Submit" onPress={handleSubmit} />
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
        borderRadius: 8
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