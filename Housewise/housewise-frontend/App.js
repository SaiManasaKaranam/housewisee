import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import AppDrawer from "./Navigation/AppDrawer";
import GroupTabs from "./Navigation/GroupTabs";
import { GroceryProvider } from "./Context/GroceryContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <StatusBar style="dark" />
      <GroceryProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            {isLoggedIn ? (
              <>
                <Stack.Screen name="MainApp" component={AppDrawer} />
                <Stack.Screen
                  name="GroupTabs"
                  component={GroupTabs}
                  options={{ headerShown: true, title: "Group" }}
                />
              </>
            ) : (
              <>
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="SignUp" component={SignUpPage} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </GroceryProvider>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
