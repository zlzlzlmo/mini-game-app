import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) return generateRandomBetween(min, max, exclude);
  return rndNum;
};

const minBoundary = 1;
const maxBoundary = 100;

interface GameScreenProps {
  userNumber: number;
}

const GameScreen = ({ userNumber }: GameScreenProps) => {
  const [currentGuess, setCurrentGuess] = useState<number>(
    generateRandomBetween(minBoundary, maxBoundary, userNumber)
  );

  const handleNextGuess = (direction: "lower" | "higher") => {
    if (direction === "lower") {
      setCurrentGuess(
        generateRandomBetween(minBoundary, currentGuess, currentGuess)
      );
      return;
    }

    setCurrentGuess(
      generateRandomBetween(currentGuess + 1, maxBoundary, currentGuess)
    );
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{currentGuess}</Text>
      </View>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={handleNextGuess.bind(this, "higher")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={handleNextGuess.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
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
  numberContainer: {
    borderWidth: 4,
    borderColor: "yellow",
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: "yellow",
    fontWeight: "bold",
    fontSize: 20,
  },
});
