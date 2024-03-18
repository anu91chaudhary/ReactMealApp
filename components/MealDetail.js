import { View, Text, StyleSheet } from 'react-native'
import colors from '../constants/colors'

function MealDetail({duration, complexity, affordability, style}) {
    return (
        <View style={styles.description}>
            <Text style={[styles.descriptionText, style]}>{duration}m</Text>
            <Text style={[styles.descriptionText, style]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.descriptionText, style]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetail

const styles = StyleSheet.create({
    description: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    descriptionText: {
        marginHorizontal: 8,
        marginBottom: 10,
        fontSize: 12,
    }
})

