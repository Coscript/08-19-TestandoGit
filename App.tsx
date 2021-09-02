import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const LinksImportantes = () => {
  return (
  <View> 
        <Text> Primeiro componente </Text>
  </View>);
};


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./src/assets/arrow-left.png")}/>
        <View style={styles.inputTextView}>

        <Image source={require("./src/assets/ei_search.png")}/>
        <TextInput placeholder="Search" placeholderTextColor="#F5FFFF" style={styles.TextInput}>

        </TextInput>

        </View>
        <Image source={require("./src/assets/share.png")}/>
        
      </View>
      
      <LinksImportantes/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  header: {
    minHeight:93,
    backgroundColor: "#4369B0",
    paddingTop:40,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:30,
  },
  inputTextView: {
    height: 40,
    flex: 1,
    marginHorizontal: 10,    
    alignItems: "center",
    borderRadius: 28,
    width: 30,
    backgroundColor: "#2C4877",
    flexDirection: "row",
  },
  TextInput: {
    color: "#F5FFFF",
    paddingRight: 10,
    flex: 1,
  },
});
