import React from "react";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import * as screen from "./src/constants/dimesions.js";

export default function App(){
  return(
    <SafeAreaView style = {styles.container}>
      <View style = {styles.header}>
        <Image 
          source = {require("./src/assets/images/covidTitle.png")} 
          style = {styles.titleImage}
          resizeMode = {"contain"} 
        />
      </View>
      <View style = {styles.gifContainer}>
        <Image
          source = {require("./src/assets/images/corona-doctor.gif")}
          style = {styles.gifImage}
          resizeMode = {"cover"}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    container:{
      flex: 1,
    },
    header:{
      height: screen.height * 0.3,
      width: screen.width * 1,
      backgroundColor: "red",
      marginTop: screen.height * 0.05,
      alignItems: "flex-end",
    },
    titleImage:{
      width: screen.width * 0.8,
      height: screen.height * 0.3,
      marginRight: screen.width * 0.05
    },
    gifContainer:{
      width: screen.width,
      height: screen.height * 0.4,
      backgroundColor: "yellow",
    },
    gifImage:{
      width: screen.width,
      height: screen.height * 0.4,
    },
  }
);