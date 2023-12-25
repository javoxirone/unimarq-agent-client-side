import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap:24,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        backgroundColor: '#ffffff',
        elevation: 15, // Add elevation for shadow effect
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    button: { display: 'flex-inline', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8 },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
})

export default styles;