import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageText from '../components/ImageText'
import LoginButton from '../components/LoginButton'

export default function WelcomeScreen() {
  return (
    <View style = {styles.container}>
        <View style = {{flex:1,  backgroundColor:"gold"}}></View>
        <View style = {{flex:4, backgroundColor:"gold", justifyContent:"center"}}>
            <ImageText src={require("../assets/earth.png")} text={"Time to take control of\n your carbon footprint!"}/>
        </View>
        <View style = {styles.options}>
            <LoginButton text = "Continue with Google"/>
            <LoginButton text = "Continue with Facebook"/>
            <LoginButton text = "Continue with Email"/>
            <View><Text style={{"textAlign": "center"}}>Already have an account? SIGN IN</Text></View> 
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    "container": {
        flex : 1,
        backgroundColor: "tomato",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 20,
    },
    "options": {
        flex:2, 
        width: "85%",
        backgroundColor:"gold", 
        justifyContent:"space-evenly",
        marginVertical: 20,
    }
})