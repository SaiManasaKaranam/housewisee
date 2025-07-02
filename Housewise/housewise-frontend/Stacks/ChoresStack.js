// navigation/stacks/ChoresStack.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChoresListScreen from "../Pages/ChoresListScreen";
import AddChoreScreen from "../Pages/AddChoreScreen";

const Stack = createNativeStackNavigator();

export default function ChoresStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="ChoresList"
        component={ChoresListScreen}
        options={{ title: "Chores" }}
      />
      <Stack.Screen
        name="AddChore"
        component={AddChoreScreen}
        options={{ title: "Add Chore" }}
      />
    </Stack.Navigator>
  );
}
