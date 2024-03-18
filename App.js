import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import colors from './constants/colors';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from 'react-native-vector-icons'
import FavoriteContextProvider from './storage/context/favorities-context';
import { Provider } from 'react-redux';
import {store} from  '../MealApp/storage/redux/store'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (<Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.header500 },
      headerTintColor: colors.white,
      sceneContainerStyle: { backgroundColor: colors.background500 },
      drawerContentStyle: { backgroundColor: colors.header500},
      drawerInactiveTintColor: colors.white
      
    }}>
    <Drawer.Screen
      name='Categories'
      component={CategoriesScreen}
      options={{
        title: 'All Category',
        drawerIcon: ({color, size}) => <Ionicons name='menu' color={color} size={size}/>
      }} />
    <Drawer.Screen
      name='Favorite'
      component={FavoriteScreen}
      options={{
        title: 'All Favorites',
        drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size}/>
      }} />

  </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
    { /* <FavoriteContextProvider>*/}
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: colors.header500 },
          headerTintColor: colors.white,
          contentStyle: { backgroundColor: colors.background500 }
        }}>
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />

          <Stack.Screen name='MealOverview' component={MealsOverviewScreen} />
          <Stack.Screen name='MealDetailView' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {/*</FavoriteContextProvider>*/}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})

