import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Sidebar from './sidebar.component';
import Content from './content.component';

const Home = () => {
  return (
    <View style={styles.container}>
      <Sidebar />
      <Content />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Home;
