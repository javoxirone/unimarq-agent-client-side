import React, {useEffect, useState} from 'react';
import {Text, View} from "react-native";
import {Picker} from '@react-native-picker/picker';

const SelectInput = ({keyTitle, handleInputChange, options = null}) => {
    const [selectedValue, setSelectedValue] = useState();
    // Add options for the select input here
    useEffect(() => {
        handleInputChange(keyTitle, selectedValue);
    }, [selectedValue]);
    return (
        <View>
            <Text>{keyTitle.replace(/_/g, ' ').toUpperCase()}</Text>
            <View style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 4,
                marginTop: 4,
                marginBottom: 12
            }}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(itemValue)
                    }
                >
                    {options && options.map((item) => (
                        <Picker.Item key={item.id} label={item.title} value={item.id}/>
                    ))}
                </Picker>
            </View>
        </View>
    );
};

export default SelectInput;
