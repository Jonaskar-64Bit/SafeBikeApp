import React from "react";
import { View, Text, StyleSheet, ScrollView, Linking, Pressable } from "react-native";
import { router } from "expo-router";

export default function Datenschutz() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>Datenschutzerklärung</Text>

      <Text style={styles.p}>
        Diese App verarbeitet so wenige personenbezogene Daten wie möglich.
      </Text>

      <Text style={styles.h2}>1. Verantwortlicher</Text>

      <Text style={styles.p}>
        Jonas Krüger (minderjährig){"\n"}
        Vertreten durch Stephan Krüger{"\n"}
        Am Homersen 14{"\n"}
        33719 Bielefeld{"\n"}
        Deutschland
      </Text>

      <Text style={styles.h2}>2. Erhobene Daten</Text>

      <Text style={styles.p}>
        In dieser App werden keine personenbezogenen Daten erhoben, gespeichert
        oder an Server übertragen. Alle Eingaben innerhalb der Checkliste werden
        ausschließlich temporär während der Nutzung der App verarbeitet und
        nicht dauerhaft gespeichert.
      </Text>

      <Text style={styles.h2}>3. Speicherung</Text>

      <Text style={styles.p}>
        Es werden keine Daten dauerhaft gespeichert. Alle in der App eingegebenen
        oder erfassten Informationen (z. B. Checklisten-Angaben) bleiben nur
        während der Nutzung im Arbeitsspeicher des Geräts vorhanden und gehen
        beim Schließen oder Verlassen der App verloren.
      </Text>

      <Text style={styles.h2}>4. Keine Weitergabe</Text>

      <Text style={styles.p}>
        Es erfolgt keine Weitergabe von Daten an Dritte oder externe Server.
      </Text>

      <Text style={styles.h2}>5. Externe Links</Text>

      <Text style={styles.p}>
        Diese App kann Links zu externen Websites enthalten. Für deren Inhalte
        und Datenschutzrichtlinien ist der jeweilige Anbieter verantwortlich.
      </Text>

      <Text style={styles.h2}>6. Kontakt</Text>

      <Text
        style={styles.link}
        onPress={() => Linking.openURL("mailto:jkrueger.dev@gmail.com")}
      >
        jkrueger.dev@gmail.com
      </Text>

      <Text style={styles.footer}>Stand: 2026</Text>

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
    marginTop: 10,
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