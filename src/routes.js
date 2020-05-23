import React, { useEffect, useState } from 'react';
import { AsyncStorage, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import * as screen from './constants/dimesions';
import LoginScreen from './screens/LoginScreen';
import FeedScreen from './screens/FeedScreen';
import StatsScreen from './screens/StatsScreen';
import PostingScreen from './screens/PostingScreen';
import CommentScreen from './screens/CommentSreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LoggedInFlow({ navigation }){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "mainFeed"
                component = {TabFlow}
                options = {{headerShown: false}}
            />
            <Stack.Screen
                name = "posting"
                component = {PostingScreen}
                options = {{
                    headerTitle: "Criar Publicação",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerLeft: () =>(
                        <TouchableOpacity 
                            style = {{
                                width: 24, 
                                height: 24,
                                marginVertical: 3,
                                marginHorizontal: 11,
                                alignItems: "center",
                            }} 
                            onPress = {() => navigation.goBack()}
                        >
                            <MaterialIcons
                                name = "arrow-back"
                                size = {24}
                                color = "#39cb7f"
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name = "comment"
                component = {CommentScreen}
                options = {{
                    headerTitle: false,
                    headerTintColor: "#39cb7f",
                }}
            />
        </Stack.Navigator>
    );
}

function TabFlow(){
    return(
        <Tab.Navigator tabBarOptions={{
            labelStyle:{fontSize:16},
            style:{paddingVertical: screen.height * 0.01},
            activeTintColor:"#39cb7f"
        }}>
            <Tab.Screen 
                name = "feed" 
                component = {FeedScreen} 
                options = {{
                    tabBarIcon: ({focused}) =>
                        <MaterialCommunityIcons
                            name = "clipboard-text-outline"
                            size = {30}
                            color = {focused ? "#39cb7f" : "grey"}  /* Deixa ícone selecionado colorido */
                        />
                }}
            />
            <Tab.Screen 
                name = "stats" 
                component = {StatsScreen}
                options = {{
                    tabBarIcon: ({focused}) => 
                        <Entypo 
                            name = "line-graph" 
                            size = {30} 
                            color = {focused ? "#39cb7f" : "grey"}  /* Deixa ícone selecionado colorido */
                        />
                }}
            />
        </Tab.Navigator>
    );
}

export default function Routes(){
    
    const [hasToken, setHasToken] = useState(null);
    const [loadingToken, setLoadingToken] = useState(true);

    /* tryLocalLoginIn is a function that searchs for a storaged user value and keeps it in asyncUser variable */
    async function tryLocalLoginIn(){
        try{
            const asyncUser = await AsyncStorage.getItem("user");
            console.log("valor de asyncUser: ", asyncUser);
            asyncUser === null ? setHasToken(false) : setHasToken(true);
        }catch(e){
            console.log(e);
            setHasToken(false);
        }finally{
            setLoadingToken(false);
        }
    }

    useEffect(() => {tryLocalLoginIn()}, []);
 
    if (loadingToken){
        return null;
    }

    return(
        <NavigationContainer>
            <Stack.Navigator 
                headerMode = "none"
                initialRouteName = {hasToken ? "Logged" : "Login"}
            >
                <Stack.Screen name = "Login" component = {LoginScreen} />
                <Stack.Screen name = "Logged" component = {LoggedInFlow} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}