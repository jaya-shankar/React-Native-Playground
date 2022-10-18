import { ImageComponent, LogBox, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LoginButton(props) {
  return (
    <View style={styles.container}>
        <View style = {styles.button}>
            <Text>G</Text>
        </View>
        <View style = {styles.text}>
            <Text style={{fontWeight:"bold", fontSize:17}}>{props.text}</Text>
        </View>
        <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
    "container": {
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 7,
        padding: 10,
        paddingHorizontal: 20,
    },
    "button": {
    },
    "text": {
    }

})