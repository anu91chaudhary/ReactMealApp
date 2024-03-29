import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({route, navigation}){
    const catId = route.params.categoryId

    const displayMeals = MEALS.filter( (mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    useLayoutEffect(() => {
        const catTitle = CATEGORIES.find((category) => category.id === catId).title
        navigation.setOptions({title: catTitle})
    }, [catId, navigation])

   return <MealsList items= {displayMeals}/>
}

export default MealsOverviewScreen

