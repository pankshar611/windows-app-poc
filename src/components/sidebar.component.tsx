import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import menu from '../assets/img/menu.png';

const Sidebar = () => {
  return (
    <View style={styles.sidebarStyle}>
      <TouchableOpacity>
        <Image style={styles.menu} source={menu} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarStyle: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
  },
  menu: {
    width: 30,
    height: 30,
  },
});

export default Sidebar;
