import React, {useEffect, useState} from 'react';
import { SafeAreaView, Button, AsyncStorage, FlatList, Text } from 'react-native';

import api from '../services/api';
import Post from '../components/Post';
import FeedHeader from '../components/FeedHeader';

export default function FeedScreen({ navigation: {navigate} }){

  const [posts, setPosts] = useState(null);
  const [postCount, setPostCount] = useState(null);

  async function loadPosts(){
    try{
      const response = await api.get("/postagens/");
      setPosts(response.data);
      setPostCount(response.data.length);
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

  return <SafeAreaView style = {{ flex: 1, alignItems: "center", justifyContent: "center", }}>
    <FlatList
      ListHeaderComponent = {<FeedHeader navigate = {navigate} count = {postCount}/>}
      showsVerticalScrollIndicator = {false}
      data = {posts}
      keyExtractor = {(item) => String(item.id)}
      renderItem = {({item}) => <Post data = {item} />}
    />
  </SafeAreaView>;
}