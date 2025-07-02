// navigation/GroupTabs.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChoresStack from "../Stacks/ChoresStack";
import SnapCartStack from "../Stacks/SnapCartStack";
import ExpiryStack from "../Stacks/ExpiryStack";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function GroupTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Chores") iconName = "checkbox-outline";
          else if (route.name === "SnapCart") iconName = "cart-outline";
          else if (route.name === "Expiry") iconName = "time-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Chores" component={ChoresStack} />
      <Tab.Screen name="SnapCart" component={SnapCartStack} />
      <Tab.Screen name="Expiry" component={ExpiryStack} />
    </Tab.Navigator>
  );
}
