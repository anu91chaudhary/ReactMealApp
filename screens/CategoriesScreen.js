import { FlatList, View, StyleSheet } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

function CategoriesScreen({ navigation }) {

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealOverview', {
                categoryId: itemData.item.id,
            })
        }

        return <CategoryGridTile
            color={itemData.item.color}
            title={itemData.item.title}
            onPress={pressHandler}
        />
    }
    return <View style={styles.container}><FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2} />
    </View>
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
})
