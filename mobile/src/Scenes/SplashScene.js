import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#888'
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#888'
  }

});

export default ({ navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.navigate('MainScene')}
  >
    <Text style={styles.header}>Best App v1.0</Text>
    <Text style={styles.subHeader}>Tap to start.</Text>
  </TouchableOpacity>
);
