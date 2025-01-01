// NextPage.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './HomePage'; // Import the HomePage component
import MapPage from './MapPage'; // Import MapPage component (create MapPage.tsx)
import ProfilePage from './ProfilePage'; 
import DeveloperPage from './DeveloperPage';

const Tab = createBottomTabNavigator();

const NextPage: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'location' : 'location-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Return the appropriate icon
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#000', // Active icon color black
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white', // White background for the bottom tab bar
        },
        headerShown: false, // Hide header for all screens
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Map" component={MapPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
};

export default NextPage;
