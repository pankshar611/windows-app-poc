import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import logo from '../assets/img/hp-logo.jpg';
import Slider from './slider.component';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <Image style={styles.logo} source={logo} />
      <Slider />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#179CD7',
    paddingVertical: 20,
    paddingHorizontal: '10%',
    alignItems: 'center',
    position: 'relative',
    flex: 2,
  },
  logo: {
    maxWidth: 40,
    height: 40,
    borderRadius: 50,
  },
});

export default Header;
