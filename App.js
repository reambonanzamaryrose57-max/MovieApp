
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";

import HomeScreen from "./Pages/HomeScreen";
import MoviesScreen from "./Pages/MoviesScreen";
import ProfileScreen from "./Pages/ProfileScreen";
import CategoryScreen from "./Pages/CategoryScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#E50914",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: "#1A1A1A",
          borderTopColor: "#333",
          height: 65,
          paddingBottom: 10,
          paddingTop: 8,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MainTabs"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#121212",
              },
              headerTintColor: "#FFFFFF",
              contentStyle: {
                backgroundColor: "#121212",
              },
            }}
          >
            <Stack.Screen
              name="MainTabs"
              component={MainTabs}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="Latest" component={CategoryScreen} />
            <Stack.Screen name="Top Rated" component={CategoryScreen} />
            <Stack.Screen name="Popular" component={CategoryScreen} />
            <Stack.Screen name="Recommended" component={CategoryScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
