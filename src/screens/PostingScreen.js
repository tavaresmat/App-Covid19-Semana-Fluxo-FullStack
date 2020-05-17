import React, { useState, useLayoutEffect } from 'react';
import { 
    SafeAreaView, 
    TextInput, 
    StyleSheet,  
    Keyboard, 
    TouchableWithoutFeedback,
    TouchableOpacity,
    Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import * as screen from '../constants/dimesions';

export default function PostingScreen( {navigation} ){

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    /* The useLayoutEffect function allows to change stack properties inside the screen */
    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity style = {Styles.postButton}>
              <Text style = {Styles.postButtonText}>Postar</Text>
          </TouchableOpacity>
        ),
      });
    }, [navigation]);

    return(
        <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
            <SafeAreaView style = {Styles.container}>
                <TextInput
                    value = {title}
                    onChangeText = {(text) => setTitle(text)}
                    style = {Styles.titleInput} 
                    placeholder = "Tílulo da sua publicação"
                />
                <TextInput
                    value = {text}
                    onChangeText = {(text) => setText(text)}
                    style = {Styles.TextInput}
                    placeholder = "O que está acontecendo na sua quarentena? Pode ser qualquer coisa! Uma piada, uma história, uma notícia ..."
                    multiline
                />
                <TouchableOpacity style = {Styles.imageButton} onPress = {() => console.log("Imagem adicionada")}>
                    <Ionicons 
                        name = "ios-images"
                        size = {30}
                        color = "#FFFFFF"
                    />
                    <Text style = {Styles.imageButtonText}>Adicionar Imagem</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    postButton:{
        width: screen.width * 0.2,
        height: screen.height * 0.05,
        backgroundColor: "#75FFAF",
        borderRadius: screen.width * 0.1,
        justifyContent: "center",
        alignItems: "center",
        marginRight: screen.width * 0.01,
    },
    postButtonText:{
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
    },
    titleInput:{
        width: screen.width * 0.9,
        height: screen.height * 0.07,
        backgroundColor: "#EAEAEA",
        color: "gray",
        borderColor: "#75FFAF",
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 10,
        fontSize: 20,
        padding: 10,
    },
    TextInput:{
        width: screen.width * 0.9,
        height: screen.height * 0.3,
        backgroundColor: "#EAEAEA",
        color: "gray",
        borderColor: "#75FFAF",
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: screen.height * 0.01,
        fontSize: 20,
        padding: 10,
        justifyContent: "center"
    },
    imageButton:{
        width: screen.width * 0.45,
        height: screen.height * 0.07,
        backgroundColor: "#75FFAF",
        alignSelf: "center",
        marginTop: screen.height * 0.05,
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: screen.width * 0.5,
        flexDirection: "row",
    },
    imageButtonText:{
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
    },
})