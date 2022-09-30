import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GameScreen = () => {
  const generateRandomBetween = (
    min: number,
    max: number,
    exclude: number
  ): number => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) return generateRandomBetween(min, max, exclude);
    return rndNum;
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 18,
    color: "yellow",
    fontWeight: "bold",
    textAlign: "center",
    borderColor: "yellow",
    borderWidth: 2,
    padding: 12,
  },
});
