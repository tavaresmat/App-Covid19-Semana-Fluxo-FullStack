import React, { useState } from "react";
import 
{ SafeAreaView, 
  View, 
  StyleSheet, 
  Image, 
  TextInput, 
  KeyboardAvoidingView,  
} from "react-native";
import * as screen from "./src/constants/dimesions.js";

export default function App(){
  const [userName, setUserName] = useState("");
  const handleChangeText = (newText) => {
    setUserName(newText);
    console.log(newText);
  };
  return(
    <SafeAreaView style = {styles.container}>
      <View style = {styles.header}>
        <Image 
          source = {require("./src/assets/images/covidTitle.png")} 
          style = {styles.titleImage}
          resizeMode = {"contain"} 
        />
      </View>
      <View>
        <Image
          source = {require("./src/assets/images/corona-doctor.gif")}
          style = {styles.gifImage}
          resizeMode = {"cover"}
        />
      </View>
      <KeyboardAvoidingView behavior = {"position"}>
        <TextInput
          style = {styles.userNameInput}
          placeholder = {"@USUÁRIO"}
          autoCapitalize = {"none"}
          autoCorrect = {false}
          value = {userName}
          onChangeText = {handleChangeText}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    container:
    {
      flex: 1,
    },
    header:
    {
      backgroundColor: "red",
      marginTop: screen.height * 0.05,
      alignItems: "flex-end",
    },
    titleImage:
    {
      width: screen.width * 0.8,
      height: screen.height * 0.3,
      marginRight: screen.width * 0.05
    },
    gifImage:
    {
      width: screen.width,
      height: screen.height * 0.4,
    },
    userNameInput:
    {
      width: screen.width * 0.9,
      height: screen.height * 0.05,
      alignSelf: "center",
      marginVertical: screen.height * 0.03,
      backgroundColor: "#F5F5F5",
      borderRadius: screen.width * 0.03,
      color: "#333",
      fontSize: screen.height * 0.025,
      paddingHorizontal: screen.width * 0.03,
    },
  }
);