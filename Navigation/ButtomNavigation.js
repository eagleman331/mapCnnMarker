import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from "./../screens/Login";
import RegisterScreen from "./../screens/RegisterScreen";
import AddMarker from "./../screens/AddMarker"



import HomeScreen from "./../screens/HomeScreen";
import TestScreen from "../screens/TestScreen";

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white", textAlign: "center", flex: 1 },
  headerTintColor: "white",
};
const HomeStack = createStackNavigator();
const FeedStack = createStackNavigator();
const TestStack = createStackNavigator();

const Tabs = createMaterialBottomTabNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    initialRouteName="LoginScreen"
    screenOptions={globalScreenOptions}
  >
     <HomeStack.Screen  name="LoginScreen" component={LoginScreen} />
     <HomeStack.Screen  name="register" component={RegisterScreen} />
    <HomeStack.Screen
      name="Home"
      options={{ title: "S3-Section" }}
      component={HomeScreen}
    />
     <HomeStack.Screen
      name="CreateMarker"
      options={{ title: "S3-Section" }}
      component={AddMarker}
    />

  </HomeStack.Navigator>
);


const TestStackScreen = () => (
  <TestStack.Navigator
    initialRouteName="Feed"
    screenOptions={globalScreenOptions}
  >
    <TestStack.Screen
      name="Test"
      options={{ title: "S3-Section" }}
      component={TestScreen}
    />
  </TestStack.Navigator>
);




const ButtomNavigation = () => {
  return (
    <Tabs.Navigator initialRouteName="Home" screenOptions={globalScreenOptions}>
    {/*<Stack.Screen  name="LoginScreen" component={LoginScreen} />
    <Stack.Screen  name="register" component={RegisterScreen} />*/}

    <Tabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tabs.Screen name="Test" component={TestStackScreen} 
     options={{
      tabBarLabel: 'Test',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="test-tube" color={color} size={26} />
      ),
    }}/>
  </Tabs.Navigator>
  );
};

export default ButtomNavigation;

const styles = StyleSheet.create({});
