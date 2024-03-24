import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerImage}>
          <View style={styles.firstImage}>
            <Image source={require('./assets/img-1.png')} style={styles.image1} />
          </View>
          <View style={styles.secondImage}>
            <Image source={require('./assets/img-2.png')} style={styles.image2} />
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>Welcome To,{"\n"}THAMMASAT UNIVERSITY</Text>
        <View style={styles.circleContainer}>
          <View style={styles.smallCircle}></View>
          <Text style={styles.loginText}>Log in</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Email or username"
              placeholderTextColor="#444"
            />
            <Image source={require('./assets/user.png')} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#444"
              secureTextEntry={true}
            />
            <Image source={require('./assets/password.png')} style={styles.inputIcon} />
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    padding: 20,
  },
  headerImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstImage: {
    marginTop: 10,
  },
  secondImage: {
    marginTop: 10,
  },
  image1: {
    width: 46.36,
    height: 50,
  },
  image2: {
    width: 243.655,
    height: 80,
  },
  main: {
    position: 'relative',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 36,
    padding: 20,
    textAlign: 'center',
  },
  circleContainer: {
    position: 'absolute',
    marginTop: 30,
    width: 432,
    height: 432,
    borderRadius: 216,
    backgroundColor: '#FFF',
    overflow: 'hidden',
    transform: [{ translateX: -80 }],
  },
  smallCircle: {
    marginTop: 30,
    marginLeft: 20,
    width: 34,
    height: 34,
    backgroundColor: '#FFE920',
    borderRadius: 17,
  },
  loginText: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 36,
    letterSpacing: -0.24,
    marginTop: 80,
    marginLeft: 120,
  },
  formContainer: {
    marginTop: 170,
  },
  form: {
    alignItems: 'center',
  },
  input: {
    width: 262,
    height: 47,
    fontSize: 15,
    borderRadius: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#ECECEC',
    backgroundColor: '#FFF',
    marginBottom: 10,
    paddingLeft: 40,
  },
  inputIcon: {
    position: 'absolute',
    top: '50%',
    left: 15,
    marginTop: -12,
  },
  forgotPassword: {
    color: '#444',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: -0.24,
    marginLeft: 30,
    marginBottom: 10,
  },
  loginButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE920',
    borderRadius: 50,
    width: 125,
    height: 46,
    marginTop: 10,
  },
  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Poppins',
  },
});

export default Home;