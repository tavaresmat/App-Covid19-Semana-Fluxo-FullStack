import React, { useState } from "react";
import 
{ SafeAreaView, 
  View, 
  StyleSheet, 
  Image, 
  TextInput, 
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  Alert,
  AsyncStorage,
} from "react-native";
import * as screen from "../constants/dimesions.js";

export default function LoginScreen({ navigation: { navigate } }){
  
  const [userName, setUserName] = useState("");
  
  /* handleChangeText gets the input from the login box each time it changes */
  const handleChangeText = (newText) => {
    setUserName(newText);
    console.log(newText);
  };

  async function storeUser(){
    try{
      await AsyncStorage.setItem("user", userName);
    }catch(e){
      console.log(e);
    }
  }

  /* Login is a function that gets and checks the input from the user */
  function Login(){
    if (userName === ""){
      Alert.alert("Nome de usuário Inválido !");
    }else{
      storeUser();
      navigate("Logged"); 
    }
  }

  return(
    <SafeAreaView style = {styles.container}>
      <View style = {styles.header}>
        <Image 
          source = {require("../assets/images/covidTitle.png")} 
          style = {styles.titleImage}
          resizeMode = {"contain"} 
        />
      </View>
      <View>
        <Image
          source = {require("../assets/images/corona-doctor.gif")}
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
      <TouchableOpacity 
        style = {styles.submitButton}
        onPress = {() => Login()}>
        <Text style = {styles.submitButtonText} >
          Entrar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    container:
    {
      flex: 1,
      backgroundColor: "#FFFFFF"
    },
    header:
    {
      marginTop: screen.height * 0.05,
      alignItems: "flex-end",
    },
    titleImage:
    {
      width: screen.width * 0.8,
      height: screen.height * 0.2,
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
      borderRadius: screen.width * 0.02,
      color: "#333",
      fontSize: screen.height * 0.025,
      paddingHorizontal: screen.width * 0.03,
    },
    submitButton:
    {
      width: screen.width * 0.2,
      height: screen.height * 0.06,
      backgroundColor: "#75FFAF",
      alignSelf: "center",
      borderRadius: screen.width * 0.02,
      alignItems: "center",
      justifyContent: "center",
    },
    submitButtonText:
    {
      fontSize: screen.height * 0.03,
      color: "#FFFFFF",
      fontWeight: "bold",
    },
  }
);