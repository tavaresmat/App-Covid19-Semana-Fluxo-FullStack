import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as screen from '../constants/dimesions';
import Post from './Post';

export default function CommentHeader({ data, count }){
    return(
        <View style = {{ marginBottom: screen.height * 0.02}}>
            <Text style = {Styles.commentTitle}>Publicação</Text>
            <Post data = {data} onFeed = {null} count = {count} />
        </View>
    );
}

const Styles = StyleSheet.create({
    commentTitle:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: screen.height * 0.05,
        alignSelf: "center",
        color: "#39cb7f",
    }
})