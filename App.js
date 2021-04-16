import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from '@react-navigation/drawer';

import TaskContextProvider from "./context/TaskContext";

import ButtomNavigation from "./Navigation/ButtomNavigation";
import DrawerNavigation from "./Navigation/DrawerNavigation";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>


      <TaskContextProvider>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={ButtomNavigation} />
        <Drawer.Screen name="Profile" component={DrawerNavigation} />
      </Drawer.Navigator>
      </TaskContextProvider>
      </SafeAreaProvider>
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
