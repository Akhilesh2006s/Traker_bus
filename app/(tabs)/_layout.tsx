import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from '../Loading';
import Login from '../Login';
import NextPage from '../NextPage';
import HomePage from '../HomePage'; 
import MapPage from '../MapPage';   
import DeveloperPage from '../DeveloperPage'; 

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator>
      {/* Initial Screens */}
      <Stack.Screen 
        name="Loading" 
        component={Loading} 
        options={{ headerShown: false }} // Hide header for Loading screen
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} // Hide header for Login screen
      />
      <Stack.Screen 
        name="NextPage" 
        component={NextPage} 
        options={{ headerShown: false }} // Hide header for NextPage
      />
      
      {/* New Screens */}
      <Stack.Screen 
        name="Home" 
        component={HomePage} 
        options={{ headerShown: false }} // Hide header for HomePage
      />
      <Stack.Screen 
        name="MapPage" 
        component={MapPage} 
        options={{ headerShown: false }} // Hide header for MapPage
      />
       <Stack.Screen 
        name="DeveloperPage" 
        component={DeveloperPage} 
        options={{ headerShown: false }} // Hide header for DeveloperPage
      />
    </Stack.Navigator>
  );
}
