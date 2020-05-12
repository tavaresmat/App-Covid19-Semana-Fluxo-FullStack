import React from 'react';
import { 
  SafeAreaView, 
  View, 
  StyleSheet, 
  Image, 
  FlatList , 
  Text,
} from 'react-native';

import * as screen from '../constants/dimesions';
import CountryBoxItem from '../components/CountryBoxItem';

export default function StatsScreen(){

  const country = [{country: "Brasil"}, {country: "Israel"}];

  return(
    <SafeAreaView style = {styles.container}>
      <View style = {styles.header}>
        <Image
          source = {require("../assets/images/covidTitle_small.png")}
          style = {styles.titleImage}
          resizeMode = "contain"
        />
      </View>
      <FlatList
        data = {country}
        renderItem = { ({ item }) => <CountryBoxItem/> }
        keyExtractor = { (item) => item.country }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    header:{
      marginTop: screen.height * 0.06,
      paddingHorizontal: screen.width * 0.04,
    },
    titleImage:{
      width: screen.width * 0.8,
      height: screen.height * 0.1,
    },
  }
);