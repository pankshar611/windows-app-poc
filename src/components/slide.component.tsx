import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Header from './header.component';
import {slides} from '../data/data';

const Slide = ({data}: any) => {
  return (
    <View style={styles.slideContainer}>
      <View>
        <Image source={data.imgSrc} />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{data.name}</Text>
        <Text style={styles.productCategory}>{data.category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '100%',
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  productDetails: {
    paddingHorizontal: 30,
    flexShrink: 1,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  productCategory: {
    fontSize: 14,
    flexWrap: 'wrap',
  },
});

export default Slide;
