import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomePage2 from './Homepage2'; 
import MapPage from './MapPage'; 
import ProfilePage from './ProfilePage'; 

const Tab = createBottomTabNavigator();

const NextPage: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: 'home' | 'home-outline' | 'location' | 'location-outline' | 'person' | 'person-outline'; // Ensure these match exactly as expected by Ionicons

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Map':
              iconName = focused ? 'location' : 'location-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'home'; // Default icon
          }

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
      <Tab.Screen name="Home" component={HomePage2} />
      <Tab.Screen name="Map" component={MapPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
};

export default NextPage;
