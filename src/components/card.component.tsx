import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import card1 from '../assets/img/card1.jpg';

const Card = ({data}: any) => {
  return (
    <View style={styles.cardWrapper}>
      <View>
        <Image style={styles.cardImg} source={card1} />
      </View>
      <View style={styles.cardDescContainer}>
        <View style={styles.cardDesc}>
          <Text style={styles.cardDescHeading}>{data.name}</Text>
          <Text>x</Text>
        </View>
        <View>
          <Text style={styles.cardDescDetailed}>{data.description}</Text>
          <Text style={styles.cardLink}>View all features</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 100,
    marginLeft: '1%',
    borderRadius: 8,
    minWidth: '32%',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  cardImg: {
    height: 100,
  },
  cardDescContainer: {
    padding: 10,
    flexShrink: 1,
  },
  cardDesc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardDescHeading: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardDescDetailed: {
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 5,
    flexWrap: 'wrap',
  },
  cardLink: {
    color: '#179CD7',
    fontSize: 12,
  },
});
export default Card;
