import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as screen from '../constants/dimesions';

export default function Post({data}){

    const navigation = useNavigation();
    const { usuario, titulo, texto, imagem } = data;
    return(
        <View style = {Styles.container}>
            <Text style = {Styles.user}>{usuario}</Text>
            <Text style = {Styles.title}>{titulo}</Text>
            <Text style = {Styles.text}>{texto}</Text>
            { /* If the post doesn't have any image the AND operattor results in NULL and the style doesn't appear */ }
            {imagem && (
                <Image
                style = {Styles.image}
                source = {{uri: `https://fluxofullstack.herokuapp.com${imagem}` }}
                />)
            }
            <TouchableOpacity style = {Styles.commentButton} onPress = {() => navigation.navigate("comment")}>
                <MaterialCommunityIcons
                    name = "comment-text-multiple-outline"
                    size = {screen.width * 0.06}
                    color = "#FFFFFF"
                />
            </TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create({
    container:{
        backgroundColor: "#dadada",
        marginTop: 20,
        width: screen.width * 0.9,
        padding: screen.width * 0.03,
        borderRadius: 3,
    },
    user:{
        color: "#39cb7f",
        fontWeight: "bold",
        fontSize: 20,
    },
    title:{
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: screen.height * 0.03,
    },
    text:{
        fontSize: 14,
        textAlign: "justify",
        marginTop: screen.height * 0.01,
    },
    image:{
        width: "100%",
        height: screen.width * 0.8,
        marginTop: screen.height * 0.03,
        borderRadius: 5,
        backgroundColor: "black",
    },
    commentButton:{
        position: "absolute",
        width: screen.width * 0.1,
        height: screen.width * 0.1,
        backgroundColor: "#75FFAF",
        borderRadius: (screen.width * 0.1)/2,
        justifyContent: "center",
        alignItems: "center",
        top: "100%",
        right: screen.width * 0.05,
    },
})