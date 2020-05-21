import React from 'react';
import { View, Text ,StyleSheet } from 'react-native';

import * as screen from '../constants/dimesions';

export default function Comment({ data }){
    return(
        <View style = {Styles.container}>
            <Text style = {Styles.user}>{data.usuario}</Text>
            <Text style = {Styles.text}>{data.texto}</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    container:{
        paddingVertical: screen.height * 0.014,
        paddingLeft: screen.width * 0.01,
        borderBottomColor: "gray",
        borderBottomWidth: screen.height * 0.001,
        width: screen.width * 0.9,
        marginTop: screen.height * 0.01,
    },
    user:{
        fontSize: screen.height * 0.03,
        fontWeight: "bold",
        color: "#39cb7f",
    },
    text:{
        paddingTop: screen.height * 0.01,
        fontSize: screen.height * 0.02,
        textAlign: "justify",
    },
})