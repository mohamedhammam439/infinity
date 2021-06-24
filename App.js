import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterComponent from './src/master/main'
// import data from './src/store/init/app/home'
// import data from './src/store/init/app/Explore'
// import data from './src/store/init/app/login-2'
// import data from './src/store/init/app/login-3'
// import data from './src/store/init/app/login-1'
// import data from './src/store/init/app/signup-2'
// import data from './src/store/init/app/signup-2-1'
// import data from './src/store/init/app/signup-2-2'
// import data from './src/store/init/app/emailSent'
// import data from './src/store/init/app/newPassword'
// import data from './src/store/init/app/Resetpassword'
import data from './src/store/init/app/test'


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
    justifyContent: 'center',
    padding: 5,
    
  },
});
