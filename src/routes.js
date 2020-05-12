import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from './screens/LoginScreen'
import FeedScreen from './screens/FeedScreen';
import StatsScreen from './screens/StatsScreen'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function LoggedInFlow(){
    return(
        <Tab.Navigator tabBarOptions={{
            labelStyle:{fontSize:16},
            activeTintColor:"#75ffaf"
        }}>
            <Tab.Screen 
                name = "feed" 
                component = {FeedScreen} 
                options = {{
                    tabBarIcon: ({focused}) =>
                        <MaterialCommunityIcons
                            name = "clipboard-text-outline"
                            size = {30}
                            color = {focused ? "#75ffaf" : "grey"}  /* Deixa ícone selecionado colorido */
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
                            color = {focused ? "#75ffaf" : "grey"}  /* Deixa ícone selecionado colorido */
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