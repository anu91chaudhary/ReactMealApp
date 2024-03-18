import { View, Text, StyleSheet } from "react-native"
import colors from "../constants/colors"

function List({ data }) {
    return data.map((dataPoint) => (
        <View key={dataPoint} style={styles.listItem}>
            <Text style={styles.subText}>{dataPoint}</Text>
        </View>
    ))
}

export default List

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: colors.brown500,
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 4,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subText: {
        color: colors.brown600
    }
})