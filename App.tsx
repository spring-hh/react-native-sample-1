import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setName("");
    setLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      {loggedIn ? (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome {name}!</Text>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : (
        <View style={styles.container}>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.inputfield}
          />
          <Button title="Login" onPress={() => handleLogin()} />
          <StatusBar style="auto" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "red",
  },
  inputfield: {
    borderColor: "red",
    borderWidth: 1,
    minWidth: 200,
  },
});
