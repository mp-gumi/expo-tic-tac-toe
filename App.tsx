import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TicTacToeTop from "./containers/TicTacToeTop";
import OthelloTop from "./containers/OthelloTop";

const Stack = createNativeStackNavigator();

const TicTacToeScreen = () => {
  return (
    <View style={styles.container}>
      <TicTacToeTop />
    </View>
  );
};

const OthelloScreen = () => {
  return (
    <View style={styles.container}>
      <OthelloTop />
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TicTacToe" component={TicTacToeScreen} />
        <Stack.Screen name="Othello" component={OthelloScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
