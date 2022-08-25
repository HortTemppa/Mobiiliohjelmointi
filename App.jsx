import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Text } from "react-native";

export default function App() {
  const [result, setResult] = useState(null);

  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  const addNumbers = () => {
    setResult(parseInt(firstNumber) + parseInt(secondNumber));
  };

  const subtractNumbers = () => {
    setResult(parseInt(firstNumber) - parseInt(secondNumber));
  };

  const handleFirstChange = (number) => {
    setFirstNumber(number);
  };

  const handleSecondChange = (number) => {
    setSecondNumber(number);
  };

  return (
    <View style={styles.container}>
      {result != null ? <Text>The result is {result}</Text> : null}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={handleFirstChange}
        value={firstNumber}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={handleSecondChange}
        value={secondNumber}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={addNumbers} title="+"></Button>
        <Button onPress={subtractNumbers} title="-"></Button>
      </View>
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
  input: {
    textAlign: "center",
    height: 40,
    width: 180,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
  },
  buttonContainer: {
    width: 90,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});
