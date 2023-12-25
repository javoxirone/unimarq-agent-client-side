import {Text, TouchableOpacity} from "react-native";
import styles from "./btnlink.style";
const BtnLink = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
export default BtnLink;