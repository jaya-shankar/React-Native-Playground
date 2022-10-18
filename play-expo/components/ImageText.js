import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ImageText(props){
    return (
        <View style = {styles.container}>
            <Image source={props.src} style={styles.image}/>
            <Text style = {styles.bolderText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    "container": {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        
    },
    "bolderText": {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        letterSpacing: 1,
        backgroundColor: "lightgreen",
    },
    "image": {
        marginBottom: 15,
        resizeMode : "contain",
        backgroundColor: "lightgreen",
        justifyContent: "space-evenly",
    }
})