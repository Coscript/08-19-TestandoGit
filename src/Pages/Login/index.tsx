import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native";


const LinkItem = (props: any) => {
    return(
        <Text style= {StylesLink.text} > 
          {props.name} 
        </Text>
    );
  };

const StylesLink = StyleSheet.create ({
    text: {      
      color: "#FFFFFF",
      margin: 15,
      
    },
    
})



const Login = () => {
    
    const navigation: any = useNavigation();    

    return(

        <View style={styles.container}> 
            <View style={styles.header}>
            <Image source={
                require("../../assets/facebook.png")}></Image>
                
                <Text style={styles.Text}> Facebook </Text>    
            </View>    
                <View style={styles.InputTextView}>
                

                <TextInput placeholder="Email" placeholderTextColor="#A29EA1" style={styles.TextInput}></TextInput>
                <TextInput placeholder="Password" placeholderTextColor="#A29EA1" style={styles.TextInput}></TextInput>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}   style={styles.Button}>
                <Text style={styles.LogIn}> Log in </Text>
                </TouchableOpacity>

                </View>                
                <Text style={styles.SignUp}> Sign Up for FaceBook </Text>
                
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: "#455CB1",
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
    },
    header: {            
        paddingTop: 150,
        flexDirection: "row",
        justifyContent:"space-between",      
        paddingLeft: 50,
        paddingRight: 130,
        paddingBottom: 40,
    },    
    InputTextView: {
        color: "#000000",
        alignItems: "center",
        flexDirection: "column",
    },    
    TextInput: {
        backgroundColor: "#FFFFFF",
        margin: 15,
        padding: 8,
        width: 325,      
    },
    InputButtonView: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        
    },
    TextButton: {
        backgroundColor: "#282973",        
        margin: 15,
        padding: 8,
        width: 325,
        fontSize: 20,        
        fontWeight: "bold",
    },
   
    
    Text: {
        color: "#FFFFFF",
        fontSize: 38,
        fontWeight: "bold",        
    },
    Button: {
        width: 325,
        margin: 15,
        padding: 8,
        backgroundColor: '#3B4885',        
        alignItems: "center",
        justifyContent: "center",
    },
    LogIn: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#fff',
    },
    SignUp: {
        paddingTop: 75,
        color: '#fff',
        textDecorationLine: 'underline',
    },

});

const StylesLinkImportantes = StyleSheet.create({
    Text: {
        fontSize: 300,
    },
    SignUp: {

    },
    LogIn: {
                
    },

})



export default Login;