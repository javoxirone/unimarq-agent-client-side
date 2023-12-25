import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000000',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
    },
    buttonOutline: {
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonOutlineText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default styles;