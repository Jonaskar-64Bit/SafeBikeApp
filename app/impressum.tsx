import React from "react";
import { View, Text, StyleSheet, ScrollView, Linking, Pressable } from "react-native";
import { router } from "expo-router";

export default function LegalAdvice() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>Impressum</Text>

      <Text style={styles.p}>Angaben gemäß § 5 DDG:</Text>

      <Text style={styles.p}>
        Anbieter / Entwickler: Jonas Krüger (minderjährig){"\n"}
        Vertreten durch Stephan Krüger{"\n"}
        Adresse: Am Homersen 14{"\n"}
        33719 Bielefeld{"\n"}
        Deutschland
      </Text>

      <Text style={styles.h2}>E-Mail</Text>

      <Text
        style={styles.link}
        onPress={() => Linking.openURL("mailto:jkrueger.dev@gmail.com")}
      >
        jkrueger.dev@gmail.com
      </Text>

      <Text style={styles.h2}>
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
      </Text>

      <Text style={styles.p}>
        Jonas Krüger{"\n"}
        (gleiche Anschrift wie oben)
      </Text>

      <Text style={styles.h2}>Haftung für Inhalte</Text>

      <Text style={styles.p}>
        Die Inhalte wurden mit größter Sorgfalt erstellt. Für Richtigkeit,
        Vollständigkeit und Aktualität wird keine Gewähr übernommen.
      </Text>

      <Text style={styles.h2}>Haftung für Links</Text>

      <Text style={styles.p}>
        Diese Website enthält Links zu externen Websites Dritter. Für deren
        Inhalte ist der jeweilige Anbieter verantwortlich.
      </Text>

      <Text style={styles.footer}>
        © 2026 Jonas Krüger. Alle Rechte vorbehalten.
      </Text>

      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Zurück</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    padding: 20,
    paddingBottom: 50,
  },

  h1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    marginTop: 50,
  },

  h2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    marginBottom: 8,
  },

  p: {
    fontSize: 15,
    color: "#ddd",
    lineHeight: 22,
  },

  link: {
    fontSize: 15,
    color: "#283fa7",
    marginTop: 5,
  },

  footer: {
    marginTop: 30,
    fontSize: 13,
    color: "#888",
  },

  button: {
    marginTop: 30,
    backgroundColor: "#28a745",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});