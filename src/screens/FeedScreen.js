import React, {useEffect, useState} from 'react';
import { 
  SafeAreaView,
  AsyncStorage, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import api from '../services/api';
import Post from '../components/Post';
import FeedHeader from '../components/FeedHeader';
import * as screen from '../constants/dimesions';

export default function FeedScreen({ navigation: { navigate }, route }){

  const [posts, setPosts] = useState(null);
  const [postCount, setPostCount] = useState(null);
  const [loadingPosts, setLoadingPosts] = useState(true);

  async function loadPosts(){
    setLoadingPosts(true);
    try{
      const response = await api.get("/postagens/");
      setPosts(response.data.reverse());
      setPostCount(response.data.length);
    }catch(e){
      console.log(e);
      alert("Não foi possível atualizar o feed");
    }finally{
      setLoadingPosts(false);
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

  useEffect(() => {
    if (route.params?.newPost){ 
      setPosts([route.params?.newPost , ...posts]);
    }
  }, [route.params?.newPost]);

  return(
    <SafeAreaView style = {Styles.container}>
      {loadingPosts ? <ActivityIndicator size = "large"/> :
        <FlatList
          ListHeaderComponent = {<FeedHeader navigate = {navigate} count = {postCount}/>}
          showsVerticalScrollIndicator = {false}
          data = {posts}
          keyExtractor = {(item) => String(item.id)}
          renderItem = {({item}) => <Post data = {item} />}
        />
      }
      <TouchableOpacity style = {Styles.reloadButton} onPress = {() => loadPosts()}>
        <MaterialCommunityIcons
          name="reload" 
          size={screen.width * 0.06} 
          color="#FFFFFF" 
        />
      </TouchableOpacity>
      <TouchableOpacity style = {Styles.logoutButton} onPress = {() => Logout()}>
        <MaterialCommunityIcons
          name="logout" 
          size={screen.width * 0.06} 
          color="#FFFFFF" 
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: screen.height * 0.05,
  },
  reloadButton:{
    position: "absolute",
    top: screen.height * 0.05,
    left: screen.width * 0.01,
    width: screen.width * 0.1,
    height: screen.width * 0.1,
    backgroundColor: "#75FFAF",
    borderRadius: (screen.width * 0.1)/2,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButton:{
    position: "absolute",
    top: screen.height * 0.05,
    right: screen.width * 0.01,
    width: screen.width * 0.1,
    height: screen.width * 0.1,
    backgroundColor: "#75FFAF",
    borderRadius: (screen.width * 0.1)/2,
    alignItems: "center",
    justifyContent: "center",
  }
})