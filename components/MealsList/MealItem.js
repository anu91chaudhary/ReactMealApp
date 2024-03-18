import { View, Text, StyleSheet, Image, Pressable } from "react-native"

import colors from "../../constants/colors"
import { useNavigation } from "@react-navigation/native"
import MealDetail from "../MealDetail"

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation()

    function onPressHandler() {
        navigation.navigate('MealDetailView', {
            mealId: id
        })
    }

    return <View style={styles.container}>
        <Pressable
            android_ripple={{ color: colors.gray }}
            style={(pressed) => { pressed ? styles.itemPressed : null }}
            onPress={onPressHandler}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
            <MealDetail
                duration={duration}
                complexity={complexity}
                affordability={affordability}
                style={{color: colors.black}} />
        </Pressable>
    </View>
}

export default MealItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 8,
        overflow: 'hidden',
        margin: 10,
        elevation: 4,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10
    },
    itemPressed: {
        opacity: 0.5,
    },
})