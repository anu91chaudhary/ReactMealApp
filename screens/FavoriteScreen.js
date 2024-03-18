import MealsList from '../components/MealsList/MealsList'
import { useContext } from 'react'
//import { FavoritesContext } from '../storage/context/favorities-context'
import { MEALS } from '../data/dummy-data'
import { StyleSheet, View, Text } from 'react-native'
import colors from '../constants/colors'
import { useSelector } from 'react-redux'

function FavoriteScreen(){
  //const favoriteMealCtx = useContext(FavoritesContext)
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)

  //const favoriteMeals = MEALS.filter(meal => favoriteMealCtx.ids.includes(meal.id))

  const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id))

  if(favoriteMeals.length === 0)
  {
    return <View style={styles.container}>
        <Text style={styles.text}>You don't have any favorite meal yet!</Text>
    </View>
  }

    return <MealsList items={favoriteMeals} />
}

export default FavoriteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.white,
        fontSize: 18
    }
})