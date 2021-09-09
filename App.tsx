import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Routes from './src/routes';


export default function App() {
  return (
    <View style={styles.container}> 
      
      <Routes/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})