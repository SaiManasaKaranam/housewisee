import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SnapCartScreen from "../Pages/SnapCartScreen";
import GroceryListScreen from "../Pages/GroceryListScreen";
import AddItemManualScreen from "../Pages/AddItemManualScreen";

const Stack = createNativeStackNavigator();

export default function SnapCartStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="SnapCart" component={SnapCartScreen} />
      <Stack.Screen name="GroceryList" component={GroceryListScreen} />
      <Stack.Screen name="AddItemManual" component={AddItemManualScreen} />
    </Stack.Navigator>
  );
}
