import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const QuoteBox = ({quote}) => (
  <View style={styles.container}>
    <Text style={styles.quote}>{quote}</Text>
    <Icon name="smile" size={20} style={styles.icon} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6c26b',
    padding: 15,
    borderRadius: 10,
    position: 'relative',
    marginVertical: 10,
  },
  quote: {fontSize: 14, color: '#333'},
  icon: {position: 'absolute', right: 10, bottom: 10, color: '#fff'},
});

export default QuoteBox;
