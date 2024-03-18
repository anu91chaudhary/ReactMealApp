import { View, Text, StyleSheet } from 'react-native'
import colors from '../constants/colors'

function SubTitle( {children }) {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>{children}</Text>
        <View style={styles.line}></View>
        </View>
    )
}

export default SubTitle

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        color: colors.brown500,
        fontSize: 18,
        marginTop:10
    },
    container: {
        borderBottomWidth: 1,
        borderBottomColor: colors.brown500,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    }
})