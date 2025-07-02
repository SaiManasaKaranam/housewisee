import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import ExpiryItemsScreen from "../Pages/ExpiryItemsScreen";
import AddExpiryItemScreen from "../Pages/AddExpiryItemScreen";

const Stack = createNativeStackNavigator();

export default function ExpiryStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ExpiryItems"
        component={ExpiryItemsScreen}
        options={{ title: "Expiry Tracker" }}
      />
      <Stack
        name="AddExpiryItem"
        component={AddExpiryItemScreen}
        options={{ title: "Add Expiry Item" }}
      />
    </Stack.Navigator>
  );
}
