import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./../screens/HomeScreen";

const ProfileStack = createStackNavigator();

const DrawerNavigation = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Home"
      screenOptions={globalScreenOptions}
    >
      <ProfileStack.Screen name="Home" component={HomeScreen} />
    </ProfileStack.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
