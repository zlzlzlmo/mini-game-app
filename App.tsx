import { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);

  const handleUserNumber = (number: number) => setUserNumber(number);

  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        style={styles.rootContainer}
        source={{
          uri: "https://github.com/academind/react-native-practical-guide-code/blob/04-deep-dive-real-app/extra-files/images/background.png?raw=true",
        }}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        {!userNumber ? (
          <StartGameScreen handleUserNumber={handleUserNumber} />
        ) : (
          <GameScreen />
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "yellow",
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.75,
  },
});
