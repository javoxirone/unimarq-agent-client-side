import {
    TouchableOpacity,
    Text
} from 'react-native';
import styles from './btn.style';
const Btn = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}
export default Btn