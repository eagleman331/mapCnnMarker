import React, { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../../Firebase";
import { SafeAreaView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { TaskContext } from "./../../context/TaskContext";

export default function index({ navigation}) {
  const {dragMarker, setDragMarker, setMarkerAppear} = useContext(TaskContext);

  const [company, setCompany] = useState({});
  const [union, setUnion] = useState("");
  const [federation, setFederation] = useState("");
  const [province, setProvince] = useState("");
  const [level, setLevel] = useState("");
  const [affiliation, setAffiliation] = useState("")
  const [sector, setSector] = useState("")


  const createMarker = async () => {
    
    await db
      .collection("TPLocation")
      .add({
        company: company,
        union: union,
        coordinate: dragMarker,
        federation: federation,
        province: province,
        level: level,
        affiliation: affiliation,
        sector: sector,
      })
      .then(() => {
        
        setMarkerAppear(false)
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add new Marker",
      headerBackTitle: "Chats",
    });
  }, [navigation]);
  
  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>

        <Input
          placeholder="Company Name"
          value={company}
          onChangeText={(text) => setCompany(text)}
          leftIcon={
            <Icon name="wechat" type="antdesign" size={24} color="black" />
          }
        />
        <Input
          placeholder="Union Name"
          value={union}
          onChangeText={(text) => setUnion(text)}
          leftIcon={
            <Icon name="wechat" type="antdesign" size={24} color="black" />
          }
        />
        <Input
          placeholder="Federation"
          value={federation}
          onChangeText={(text) => setFederation(text)}
          leftIcon={
            <Icon name="wechat" type="antdesign" size={24} color="black" />
          }
        />
         <Input
          placeholder="Affiliation"
          value={affiliation}
          onChangeText={(text) => setAffiliation(text)}
          leftIcon={
            <Icon name="wechat" type="antdesign" size={24} color="black" />
          }
        />
        
         <Input
          placeholder="Sector"
          value={sector}
          onChangeText={(text) => setSector(text)}
          leftIcon={
            <Icon name="wechat" type="antdesign" size={24} color="black" />
          }
        />
         <Input
          placeholder="Level"
          value={level}
          onChangeText={(text) => setLevel(text)}
          leftIcon={
            <Icon name="wechat" type="antdesign" size={24} color="black" />
          }
        />
        <Input
          placeholder="Province"
          value={province}
          onChangeText={(text) => setProvince(text)}
          leftIcon={
            <Icon name="wechat" type="antdesign" size={24} color="black" />
          }
        />

      
        <Button onPress={createMarker} title="Create a New Marker" />
      </View>
    </KeyboardAvoidingView>
  );
}
