import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

const Service = ({data}: any) => {
  return (
    <View style={[styles.services, {backgroundColor: data.color}]}>
      <Text style={styles.serviceText}>{data.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  services: {
    flex: 1,
    height: 50,
    minWidth: '24%',
    marginLeft: '1%',
    marginBottom: '1%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceText: {
    color: '#fff',
  },
});

export default Service;
