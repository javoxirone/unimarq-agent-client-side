import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import styles from './btn.style';

const Btn = ({title, onPress, outline = false}) => {
    if (outline) {
        return (
            <TouchableOpacity style={styles.buttonOutline} onPress={onPress}>
                <Text style={styles.buttonOutlineText}>{title}</Text>
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Btn;
