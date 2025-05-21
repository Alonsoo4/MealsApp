import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import MealOverviewScreen from './screens/MealOverviewScreen';
import MealDetailScore from './screens/MealDetalsScreen';

const stack = createStackNavigator(); 

export default function App() {


  return (
    <>
    <Statusbar style='dark' />
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#987070'},
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#F1E5D1'}
        }}
      >
        <Stack.Screen
          name="MealsCategories"
          component={CategoriesScreen}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealOverviewScreen}
          options={{
            title: 'All categories',
            headerTintColor: 'white'
            contentStyle: {backgroundColor: '#C39898'}
          }}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  </>

  );
}

const styles = StyleSheet.create({
  container: {
  },
});