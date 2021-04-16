import React, { useContext, useEffect, useState } from "react";
import { Pressable, ScrollView } from "react-native";
import { StyleSheet, View } from "react-native";
import { TaskContext } from "../context/TaskContext";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
import CovidMessage from "./CovidMessage";
import DetailListScreen from "./DetailListScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";


import { auth, db } from "./../Firebase";
import { TouchableHighlight } from "react-native";

const TestScreen = ({ navigation, props }) => {
  const { tasks, marker } = useContext(TaskContext);

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };


  
  return (
    <Provider>
      <ScrollView>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Text>Example Modal. Click outside this area to dismiss.</Text>
          </Modal>
        </Portal>
        <View>

          {/*  Input Box */}

          <Pressable style={styles.inputBox}>
            <Text style={styles.inputText}>Where To?</Text>

            <View style={styles.timeContainer}>
              <AntDesign name={"clockcircle"} size={16} color={"#535353"} />
              <Text>Now</Text>
              <MaterialIcons name={"keyboard-arrow-down"} size={16} />
            </View>
          </Pressable>

          {/* Previous destination */}
          {marker.map((data, index) => (
            <TouchableHighlight key={data.key} onPress={showModal} underlayColor="white">
            <View  style={styles.row}>
              <View style={styles.iconContainer}>
                <AntDesign name={"home"} size={20} color={"#ffffff"} />
              </View>
              <Text style={styles.destinationText}>{data.company}</Text>
            </View>
            </TouchableHighlight>
          ))}
         
          <View  style={styles.row}>
            <View  style={styles.iconContainer}>
              <AntDesign name={"clockcircle"} size={20} color={"#ffffff"} />
            </View>
            <Text style={styles.destinationText}>Spin Nightclub</Text>
          </View>


        

          {/* Home destination */}
          <View style={styles.row}>
            <View
              style={[styles.iconContainer, { backgroundColor: "#218cff" }]}
            >
              <Entypo name={"home"} size={20} color={"#ffffff"} />
            </View>
            <Text style={styles.destinationText}>Spin Nightclub</Text>
          </View>
        </View>
      </ScrollView>
    </Provider>
  );
 
};
export default TestScreen;

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#e7e7e7",
    margin: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#434343",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#dbdbdb",
  },
  iconContainer: {
    backgroundColor: "#b3b3b3",
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: "500",
    fontSize: 16,
  },
});
