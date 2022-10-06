import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  //return for mobile development essentially same as ReactDOM.render() but for mobile components
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST PROTOTYPE</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  heading: {
    color: '#000000',
    fontSize: 30,
    fontWeight: '600',
    marginTop: 70,
    marginBottom: 10,
    marginLeft: 20,
  },
});
