import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterComponent from './src/master/main'
import data from './src/store/init/home'

export default function App() {
  return (
    <View style={styles.container}>
      <MasterComponent comps={data.body} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',  // make web as a mobile in meddile
    // justifyContent: 'start',
    padding: 20
  },
});
