import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// HomePage Component
const HomePage: React.FC = () => {
  const navigation = useNavigation(); // useNavigation hook to access the navigation object

  const handleBusRoutesPress = () => {
    navigation.navigate('MapPage'); // Navigate to MapPage when Bus Routes is clicked
  };

  const handleDeveloperPress = () => {
    navigation.navigate('DeveloperPage'); // Navigate to Developer Page when Developer is clicked
  };

  return (
    <View style={styles.container}>  
      {/* VIT-AP Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/vit-ap.png')} style={styles.logo} />
      </View>
      
      {/* App Heading */}
      <Text style={styles.heading}>Bus Tracking App</Text>
      
      {/* Boxes Container (2 rows with 2 boxes each) */}
      <View style={styles.boxesContainer}>
        {/* Row 1 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.box} activeOpacity={0.7} onPress={handleBusRoutesPress}>
            <View style={styles.boxContent}>
              <Image source={require('@/assets/images/bus3.jpg')} style={styles.boxImage} />
              <Text style={styles.boxText}>Bus Routes</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.box} activeOpacity={0.7}>
            <View style={styles.boxContent}>
              <Image source={require('@/assets/images/personaldata.png')} style={styles.boxImage} />
              <Text style={styles.boxText}>Personal Data</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.box} activeOpacity={0.7}>
            <View style={styles.boxContent}>
              <Image source={require('@/assets/images/Analytics.png')} style={styles.boxImage} />
              <Text style={styles.boxText}>Analytics</Text>
            </View>
          </TouchableOpacity>
          
          {/* Developer Box */}
          <TouchableOpacity style={styles.box} activeOpacity={0.7} onPress={handleDeveloperPress}>
            <View style={styles.boxContent}>
              <Image source={require('@/assets/images/d.png')} style={styles.boxImage} />
              <Text style={styles.boxText}>Developer</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Styles for HomePage
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,  // Add some padding for top spacing
  },
  logoContainer: {
    marginBottom: 30,  // Increased margin for logo spacing
    alignItems: 'center',
  },
  logo: {
    width: 250,  // Increased logo size
    height: 80,  // Increased logo height
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#007aff',
    marginVertical: 20,
  },
  boxesContainer: {
    width: '90%',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box: {
    backgroundColor: 'white',
    flex: 1,
    aspectRatio: 1,  // Makes the box square (width == height)
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Adds shadow for Android
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  boxImage: {
    width: 50,  // Increased image size inside the box
    height: 50,  // Increased image height
    marginRight: 1,
  },
  boxText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomePage;
