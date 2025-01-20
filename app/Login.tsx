import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Alert, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const DEFAULT_PASSWORD = 'vitap123'; // Default password for students
  const ADMIN_ID = 'Adminvit';
  const ADMIN_PASSWORD = 'Adminbus';

  const handleLogin = () => {
    // Check if admin credentials are provided
    if (studentID === ADMIN_ID && password === ADMIN_PASSWORD) {
      Alert.alert('Admin Login Successful', `Welcome, Admin`);
      router.replace('/NextPage'); // Navigate to Admin Page
      return;
    }

    const validPrefixes = ['BCE', 'BCB', 'BEC', 'BBA','MIS'];
    const prefix = studentID.slice(2, 5);
    const isValidID = validPrefixes.includes(prefix) && (studentID.length === 9 || studentID.length === 10);

    if (!isValidID) {
      Alert.alert('Invalid ID', 'Please enter a valid Student ID (e.g., 23BCExxxx)');
      return;
    }

    // Check if the password matches the default
    if (password !== DEFAULT_PASSWORD) {
      Alert.alert('Invalid Password', 'Please enter the correct default password.');
      return;
    }

    Alert.alert('Login Successful', `Welcome, ${studentID}`);
    router.replace('/NextPage2'); // Navigate to Student Page
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Image source={require('@/assets/images/Vitapbuilding.jpeg')} style={styles.backgroundImage} />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.8)']}
        style={styles.gradientOverlay}
      />

      <View style={styles.overlay}>
        {/* VIT-AP Logo */}
        <Image source={require('@/assets/images/vit-ap.png')} style={styles.vitapLogo} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Bus Tracking App</Text>
          <Image source={require('@/assets/images/tracker-locator.png')} style={styles.trackerIcon} />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Enter your Student ID or Admin ID"
          value={studentID}
          onChangeText={setStudentID}
          keyboardType="default"
          autoCapitalize="characters"
          placeholderTextColor="#A0A0A0"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholderTextColor="#A0A0A0"
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(prevState => !prevState)}
          >
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color="#A0A0A0"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#6C63FF', '#4A47A3']}
            style={styles.buttonGradient}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  vitapLogo: {
    width: 100,
    height: 100,
    marginBottom: 30,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginRight: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  trackerIcon: {
    width: 40,
    height: 40,
  },
  input: {
    height: 50,
    width: '85%',
    borderColor: '#ddd',
    borderWidth: 1.5,
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    marginBottom: 15,
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
  },
  eyeIcon: {
    paddingHorizontal: 15,
  },
  loginButton: {
    height: 50,
    width: '85%',
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default Login;
