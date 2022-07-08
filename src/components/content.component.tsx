import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from './header.component';
import Main from './main.component';

const Content = () => {
  return (
    <View style={styles.contentStyle}>
      <Header />
      <Main />
    </View>
  );
};

const styles = StyleSheet.create({
  contentStyle: {
    flex: 20,
  },
});

export default Content;
