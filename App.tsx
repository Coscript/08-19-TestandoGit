import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const LinkItem = (props: any) => {
  return(
      <Text style= {StylesLink.text} > 
        {props.name} 
      </Text>
  );
};

const StylesLink = StyleSheet.create ({
    text: {      
      color: "#4A4A4C",
      fontSize: 13.71,            
      flex: 1,
    }

})



const LinksImportantes = () => {
  return (
  <View style={StylesLinkImportantes.container}> 
        <LinkItem name="Home" />
        <LinkItem name="Post" />
        <LinkItem name="Videos" />
        <LinkItem name="Photos" />
        <LinkItem name="Community" />
  </View>);
};
const StylesLinkImportantes = StyleSheet.create ({
  container: {      
    flexDirection: "row",
    justifyContent: "space-between",
    
    paddingHorizontal: 2,    
    paddingVertical: 10,
    
    shadowColor: "#F00",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 1,
    elevation: 4,
    borderColor: "gray",
  }

})



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
