import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

import * as screen from '../constants/dimesions';


export default function FeedHeader({ navigate, count }){
  return(
    <View style = {Styles.container}>
        <View style = {Styles.header}>
            <Image 
                source = {require("../assets/images/covidTitle_small.png")}
                style = {Styles.image}
                resizeMode = "contain"
            />
            {/* If count is Null (because it takes some time to get the count value) then the count text doesn't appear */}
            {count && (
            <Text style = {Styles.countText}>
                {count === 1 ? `${count} post` : `${count} posts`}
            </Text>
            )}
        </View>
        <TouchableOpacity style = {Styles.button} onPress = {() => navigate("posting")}>
            <Text style = {Styles.text}>O que está acontecendo na sua quarentena?</Text>
        </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: screen.height * 0.05,
    },
    image:{
        width: screen.width * 0.6,
        height: screen.height * 0.1,
    },
    countText:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#39cb7f",
        alignSelf: "center",
    },
    button:{
        borderWidth: 2,
        borderRadius: 15,
        borderColor: "#39cb7f",
        width: screen.width * 0.9,
        height: screen.height * 0.1,
        justifyContent: "center",
    },
    text:{
        color: "gray",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
    },
})