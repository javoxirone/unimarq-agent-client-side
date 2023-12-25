import { View, Text } from 'react-native';
import styles from './orgcard.style';
import Btn from '../btn/Btn';
const OrgCard = ({ title, description, onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.descriptionContainer}>
                {description.map((item, index) => (
                    <View key={index} style={styles.bulletContainer}>
                        <View style={styles.bullet} />
                        <Text style={styles.descriptionText}>{item}</Text>
                    </View>
                ))}
            </View>
            <Btn title="Batafsil" onPress={onPress} />
        </View>
    );
};

export default OrgCard;
