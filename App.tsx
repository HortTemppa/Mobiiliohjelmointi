import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function App() {
  const [result, setResult] = useState();

  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();

  const addNumbers = (): void => {
    setResult(parseInt(firstNumber) + parseInt(secondNumber));
  };

  const subtractNumbers = (): void => {
    setResult(parseInt(firstNumber) - parseInt(secondNumber));
  };

  const handleFirstChange = (e): void => {
    setFirstNumber(e.target.value);
  };

  const handleSecondChange = (e): void => {
    setSecondNumber(e.target.value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        onChange={handleFirstChange}
        value={firstNumber}
      ></TextInput>
      <TextInput
        keyboardType="numeric"
        onChange={handleSecondChange}
        value={secondNumber}
      ></TextInput>
      <Button onPress={addNumbers} title="+"></Button>
      <Button onPress={subtractNumbers} title="-"></Button>
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
});
