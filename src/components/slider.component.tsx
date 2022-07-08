import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {slides} from '../data/data';
import Slide from './slide.component';

const Slider = () => {
  const [slideIndex, setSlideindex] = useState(0);
  return (
    <View style={styles.sliderWrapper}>
      <TouchableOpacity
        style={styles.btnStyle1}
        disabled={slideIndex === 0}
        onPress={() => {
          setSlideindex(slideIndex - 1);
        }}>
        <View style={styles.sliderBtns}>
          <Text>{'<'}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.slides}>
        <View>
          <Slide data={slides.data[slideIndex]} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.btnStyle2}
        disabled={slideIndex === slides.data.length - 1}
        onPress={() => {
          setSlideindex(slideIndex + 1);
        }}>
        <View style={styles.sliderBtns}>
          <Text>{'>'}</Text>
        </View>
      </TouchableOpacity>

      {/* <View>
        <Text>
          {slideIndex + 1 + ' of ' + slides.data.length}
        </Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  sliderWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: -75,
  },
  btnStyle1: {
    flex: 2,
    alignItems: 'flex-start',
  },
  btnStyle2: {
    flex: 2,
    alignItems: 'flex-end',
  },
  slides: {
    flex: 8,
  },
  sliderBtns: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Slider;
