import React from "react";
import { StyleSheet, View } from "react-native";
import Top from "./containers/Top";

function App() {
  return (
    <View style={styles.container}>
      <Top />
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

export default App;
