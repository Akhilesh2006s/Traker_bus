import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const busRoutes = [
  'VV1', 'VV2', 'VV3', 'VV4', 'VV5', 'VV6', 'VV7', 'VV8', 'VV9', 'VV10',
  'VV11', 'VV12', 'VV13', 'VV14', 'VV15', 'VV16', 'VV17', 'VV18', 'VV19', 'VV20',
  'VV21', 'VV22', 'VV23', 'VV24', 'VV25', 'VV26', 'VV27', 'VV28', 'VV29', 'VV30',
];

const MapPage: React.FC = () => {
  const navigation = useNavigation();

  const handleRouteClick = (route: string) => {
    navigation.navigate('BusRouteDetails', { busRoute: route }); // Navigate to details page with the route
  };

  const handleGoBack = () => {
    navigation.goBack(); // Go back to the previous screen, i.e., HomePage
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Text style={styles.backText}>Back to Home</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>Bus Routes</Text>
      
      <View style={styles.routesContainer}>
        {busRoutes.map((route, index) => (
          <TouchableOpacity
            key={index}
            style={styles.routeBox}
            activeOpacity={0.7}
            onPress={() => handleRouteClick(route)} // Handle click to navigate to details page
          >
            <Text style={styles.routeText}>{route}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#007aff',
    marginBottom: 20,
    textAlign: 'center',
  },
  routesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  routeBox: {
    backgroundColor: 'white',
    width: '48%',
    height: 80,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  routeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  backButton: {
    padding: 10,
    backgroundColor: '#007aff',
    borderRadius: 5,
    marginBottom: 20,
  },
  backText: {
    color: 'white',
    fontSize: 18,
  },
});

export default MapPage;
