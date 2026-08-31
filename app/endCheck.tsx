import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function Result() {
  const { result } = useLocalSearchParams();

  const good = result === "good";

  return (
    <View style={styles.container}>
      <Image
        source={
          good
            ? require("../assets/icons/good-smile.png")
            : require("../assets/icons/bad-smile.png")
        }
        style={styles.image}
      />

      <Text style={styles.message}>
        {good
          ? "✅ Dein Fahrrad ist verkehrssicher."
          : "⚠️ Dein Fahrrad ist nicht verkehrssicher. Bitte behebe die Mängel oder lasse dein Fahrrad überprüfen."}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.replace("/startedCheck")}
      >
        <Text style={styles.buttonText}>Erneut prüfen</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.buttonText}>Zur Startseite</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  message: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});