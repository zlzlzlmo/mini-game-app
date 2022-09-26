import { StyleSheet, View, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
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
        <StartGameScreen />
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
