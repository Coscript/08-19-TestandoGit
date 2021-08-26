import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./src/assets/arrow-left.png")}/>
        
        <Image source={require("./src/assets/ei_search.png")}/>

        <Image source={require("./src/assets/share.png")}/>

      </View>
      <Text>"Hello World!"</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  header: {
    minHeight:93,
    backgroundColor: "#2C4877",
    paddingTop:40,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:30,
  },

});
