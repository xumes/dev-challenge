import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f33',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white'
  },
  body: {
    fontSize: 18,
    color: 'white'
  }
});

export default ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.header}>An error occurred.</Text>
    <Text style={styles.body}>{message}</Text>
  </View>
);
