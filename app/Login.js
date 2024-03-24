import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerImage}>
          <View style={styles.firstImg}>
            <Image source={require('./img/img-1.png')} style={styles.image} />
          </View>
          <View style={styles.secondImg}>
            <Image source={require('./img/img-2.png')} style={styles.image} />
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>Welcome To,{'\n'}THAMMASAT UNIVERSITY</Text>
        <View style={styles.userInfo}>
          <View style={styles.userImg}></View>
          <Text style={styles.userName}>Nutpraphut Praphutsirikul{'\n'}6510742072</Text>
        </View>
        <View style={styles.imgBottom}>
          <Image source={require('./img/Vector 59.png')} style={styles.image} />
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
    alignItems: 'center',
  },
  firstImg: {
    width: 46.36,
    height: 50,
    marginTop: 10,
  },
  secondImg: {
    width: 243.655,
    height: 80,
  },
  main: {
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  userImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'lightgray',
    marginRight: 10,
  },
  userName: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 36,
    letterSpacing: -0.24,
  },
  imgBottom: {
    marginTop: 20,
  },
  image: {
    resizeMode: 'contain',
  },
});

export default Login;
