import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
        <Image style={styles.logo} source={require("../assets/the_spot_logo.png")} />
        <View style={styles.loginButton}>
        <View >
            <Text style={styles.loginText}>Login</Text>
        </View>
        </View>
        <View style={styles.registerButton}>
            <View>
            <Text style={styles.loginText}>Register</Text>
            </View>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"

    },
    loginButton: {
        width: '60%',
        height: 70,
        backgroundColor: "#637F42",
        borderRadius: 40,
    },
    loginText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    registerButton: {
        width: '80%',
        height: 70,
        backgroundColor: "#9F7B21",
        borderRadius: 40,
    },
    logo: {
        width: 200,
        height: 200,
        position: "absolute",
        top: 30
    }
});

export default WelcomeScreen;
