import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Card from './card.component';
import {servicesData, cards} from '../data/data';
import Service from './service.component';

const Main = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardHead}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          Do more with HP Smart
        </Text>
        <Text style={{fontSize: 12, color: '#179CD7'}}>See All</Text>
      </View>
      <View style={styles.cardWrapper}>
        {cards.map((c, index) => {
          return <Card key={index} data={c} />;
        })}
      </View>
      <View style={styles.serviceWrapper}>
        {servicesData.map((serv, index) => {
          return <Service key={index} data={serv} />;
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 8,
    marginTop: 100,
    padding: 20,
    paddingHorizontal: '10%',
  },
  cardWrapper: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 40,
    flexWrap: 'wrap',
  },
  cardHead: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: '1%',
  },
  serviceWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default Main;
