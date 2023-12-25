import React, {useState, useEffect} from 'react';
import {Button, Image, View, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Btn from "../btn/Btn";

export default function ImageUpload({keyTitle, handleInputChange}) {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    useEffect(() => {
        handleInputChange(keyTitle, image);
    }, [image]);
    return (
        <View style={{display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 12}}>
            <Btn title={keyTitle.replace(/_/g, ' ').toUpperCase()} onPress={pickImage} outline={true} />
            {image && <Image source={{uri: image}} style={{width: 120, height: 120, objectFit: 'cover', borderRadius: 8}}/>}
        </View>
    );
}
