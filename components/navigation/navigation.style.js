import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 64,
        backgroundColor: '#ffffff',
    },
    button: { display: 'flex-inline', flexDirection: 'row', alignItems: 'center', gap: 8 },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default styles;