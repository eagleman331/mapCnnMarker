import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from "react-native";
import * as Location from "expo-location";
import { auth, db } from "./../Firebase";
import CovidMessage from "./CovidMessage";
import { Button } from "react-native";
import HomeSearch from "./HomeSearch";
import { TaskContext } from "../context/TaskContext";
import { TouchableOpacity } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { Avatar, registerCustomIconType } from "react-native-elements";

const points = [
  {
    id: "1",
  
      latitude: 14.173205985379436,
      longitude: 121.21334352214835,
    
    title: "Warren Camp",
    description: "hotSpring Talaga",
    pinColor: "orange",
    weight: 1
  },
  {
    id: "2",
    
      latitude: 14.173473411486324,
      longitude: 121.21589218410375,
  
    title: "Bridge",
    description: "Malayo na sa kampo",
    pinColor: "yellow",
    weight: 1
  },
  {
    id: "3",
   
      latitude: 14.17898670148615,
      longitude: 121.21425078404025,

    title: "Laguna Lake",
    description: "Di pa ko nakapunta dto",
    pinColor: "green",
    weight: 1
  },
];
const HomeScreen = ({ navigation }) => {
  const {
    dragMarker,
    setDragMarker,
    markerAppear,
    setMarkerAppear,
    createIconAppear,
    setCreateIconAppear,
    marker, setMarker
  } = useContext(TaskContext);

  const [location, setLocation] = useState(null);
  const [regionLocation, setRegionLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);



  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("LoginScreen");
    });
  };
  const addMarker = () => {
    navigation.navigate("CreateMarker");
  };

  const warren = (regionLocation) => {
    if (markerAppear == true) {
      return (
        <MapView.Marker
          draggable
          coordinate={regionLocation}
          onDragEnd={(e) => setDragMarker(e.nativeEvent.coordinate)}
        />
      );
    } else {
    }
  };

  const tuldokan = () => {
    setMarkerAppear(true);
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("TPLocation")
      .onSnapshot((querySnapshot) => {
        const todo = [];

        querySnapshot.forEach((documentSnapshot) => {
          todo.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setMarker(todo);
      });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0921,
      };
      setLocation(region);
    })();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black", textAlign: "center", flex: 1 },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity onPress={addMarker} activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={tuldokan} activeOpacity={0.5}>
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <View style={{ height: Dimensions.get("window").height - 130 }}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsCompass={true}
          rotateEnabled={false}
          showsUserLocation={true}
          initialRegion={location}
          onRegionChange={(region) => {
            setRegionLocation({
              latitude: region.latitude,
              longitude: region.longitude,
            });
          }}
          onRegionChangeComplete={(region) => {
            setRegionLocation({
              latitude: region.latitude,
              longitude: region.longitude,
            });
          }}
        >
          {marker.map((data, index) => (
            <MapView.Marker
              key={index}
              coordinate={data.coordinate}
              title={data.fullname}
              description={data.group}
              pinColor="green"
            />
          ))}
          <MapView.Heatmap
            points={points}
            opacity={1}
            radius={20}
            maxIntensity={100}
            gradientSmoothing={10}
            heatmapMode={"POINTS_DENSITY"}
          />

          {warren(regionLocation)}
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
