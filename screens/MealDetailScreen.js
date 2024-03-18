import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native'
import { MEALS } from '../data/dummy-data'
import colors from '../constants/colors'
import MealDetail from '../components/MealDetail'
import List from '../components/List'
import SubTitle from '../components/SubTitle'
import { useContext, useLayoutEffect } from 'react'
import IconButton from '../components/IconButton'
import { addFavorite, removeFavorite } from '../storage/redux/favorite'
import { useDispatch, useSelector } from 'react-redux'
//import { FavoritesContext } from '../storage/context/favorities-context'

function MealDetailScreen({ route, navigation }) {
   // const favoriteMealCtx = useContext(FavoritesContext)
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
    const dispatch = useDispatch()


    const mealId = route.params.mealId

    const mealInfo = MEALS.find((mealItem) => mealItem.id === mealId)

    //const mealIsFavorite = favoriteMealCtx.ids.includes(mealId)
    const mealIsFavorite  =  favoriteMealIds.includes(mealId)

    function changeFavoriteNavigationHandler() {
        if (mealIsFavorite) {
            //favoriteMealCtx.removeFavorite(mealId)
            dispatch(removeFavorite({id: mealId}))

        }
        else {
            //favoriteMealCtx.addFavorite(mealId)
            dispatch(addFavorite({id: mealId}))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon={mealIsFavorite ? 'star' : 'star-outline'}
                    color="white"
                    onPress={changeFavoriteNavigationHandler} />
            }
        })
    }, [navigation, changeFavoriteNavigationHandler])

    return (
        <ScrollView>
            <View style={styles.conatiner}>
                <Image style={styles.image} source={{ uri: mealInfo.imageUrl }} />
                <Text style={styles.title}>{mealInfo.title}</Text>

                <MealDetail
                    duration={mealInfo.duration}
                    complexity={mealInfo.complexity}
                    affordability={mealInfo.affordability}
                    style={{ color: colors.white }} />

                <View style={styles.listContainer}>
                    <SubTitle>Ingredient</SubTitle>
                    <List data={mealInfo.ingredients} />
                    <SubTitle>Steps</SubTitle>
                    <List data={mealInfo.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        marginBottom: 15,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18,
        margin: 10
    },
    listContainer: {
        width: '60%',
        marginHorizontal: 10
    }
})

