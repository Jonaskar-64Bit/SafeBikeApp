import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { Link, router } from "expo-router";

const Check = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Der SafeBike Check</Text>

      <Text style={styles.text}>
        Bevor wir starten lese bitte den{" "}
        <Link href="/legalAdvice" style={styles.link}>
          rechtlichen Hinweis
        </Link>.
      </Text>

      <Text style={styles.text}>
        Bitte beantworte die folgenden Fragen, um die Verkehrssicherheit deines Fahrrads zu überprüfen.
      </Text>

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={accepted}
          onValueChange={setAccepted}
          color={accepted ? "#4caf50" : undefined}
        />
        <Text style={styles.checkboxText}>
          Ich habe den rechtlichen Hinweis gelesen und verstanden.
        </Text>
      </View>

      {/* Button */}
      <Pressable
        onPress={() => router.push("/startedCheck")}
        disabled={!accepted}
        style={({ pressed }) => [
          styles.button,
          !accepted && styles.buttonDisabled,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>Starten</Text>
      </Pressable>
    </View>
  );
};

export default Check;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headline: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginTop: 50,
    marginBottom: 20,
  },
  text: {
    color: "white",
    marginTop: 20,
    textAlign: "center",
  },
  link: {
    color: "#283fa7",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  checkboxText: {
    color: "white",
    marginLeft: 10,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#28a745",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: "#555",
    opacity: 0.6,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});