import React, { useState, useEffect } from  'react';
import { 
    SafeAreaView, 
    View, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity, 
    Text,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    AsyncStorage,
    Keyboard,
} from 'react-native';

import * as screen from '../constants/dimesions';
import CommentHeader from '../components/CommentHeader';
import api from '../services/api';

export default function CommentScreen({ route }){
    
    const [comment, setComment] = useState("");
    const [user, setUser] = useState("");

    const id = route.params.data.id;

    async function loadUser(){
        const response = await AsyncStorage.getItem("user");
        setUser(response);
    }

    const handleCommentSubmit = async () => {
        try{
            const newPost = {
                usuario: user,
                texto: comment,
                postagem: id
            };
            await api.post('/comentarios/', newPost);
        }catch(e){
            console.log(e);
        }finally{
            Keyboard.dismiss();
            setComment("");
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    return(
        <KeyboardAvoidingView 
            style = {{flex: 1}}
            behavior = {Platform.OS == "ios" ? "padding" : null}
            keyboardVerticalOffset = {Platform.OS == "ios" ? screen.height * 0.1 : null}
        >
            <SafeAreaView style = {Styles.container}>
                <FlatList
                    data = {[route.params.data]}
                    keyExtractor = {(comment) => String(comment.id)}
                    showsVerticalScrollIndicator = {false}
                    ListHeaderComponent = {<CommentHeader data = {route.params.data}/>}
                />
                <View style = {Styles.inputContainer}>
                    <TextInput 
                        style = {Styles.input}
                        placeholder = "Escreva um comentário"
                        value = {comment}
                        onChangeText = {(newText) => setComment(newText)}
                        multiline
                        fontSize = {screen.height * 0.025}
                    />
                    <TouchableOpacity style = {Styles.commentButton} onPress = {handleCommentSubmit}>
                        <Text style = {Styles.commentButtonText}>Comentar</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },
    inputContainer:{
        flexDirection: "row",
        backgroundColor: "#E8E8E8",
        width: screen.width,
        height: screen.height * 0.15,
        borderColor: "#38444D",
        borderTopWidth: screen.width * 0.002,
        borderBottomWidth: screen.width * 0.002,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: screen.width * 0.03,
    },
    input:{
        width: screen.width * 0.7,
        height: screen.height * 0.08,
        backgroundColor: "#F2F2F2",
        borderColor: "#39cb7f",
        borderWidth: 2,
        borderRadius: screen.width * 0.1,
        paddingHorizontal: screen.width * 0.06,
        paddingVertical: screen.height * 0.006,
    },
    commentButton:{
        backgroundColor: "#75FFAF",
        width: screen.width * 0.2,
        height: screen.height * 0.08,
        borderRadius: screen.width * 0.03,
        alignItems: "center",
        justifyContent: "center",
    },
    commentButtonText:{
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: screen.height * 0.025,
    }
});