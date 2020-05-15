import React, {useEffect} from 'react';
import { View, Button, AsyncStorage, NativeAppEventEmitter } from 'react-native';
import api from '../services/api';

export default function FeedScreen({ navigation: {navigate} }){

  async function loadPosts(){
    try{
      const response = await api.get("/postagens/");
      console.log("Nossa response: ", response);
    }catch(e){
      console.log(e);
    }
  }

  async function Logout(){
    try{
      await AsyncStorage.removeItem("user");
    }catch(e){
      console.log(e);
    }finally{
      navigate("Login");
    }
  }

  useEffect(() => {loadPosts();}, []);

  return <View style = {{ flex: 1, alignItems: "center", justifyContent: "center", }}>
    <Button title = "Logout" onPress={() => Logout()} />
    <Button title = "posting" onPress={() => navigate("posting")} />
    <Button title = "comment" onPress={() => navigate("comment")} />
  </View>;
}