import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";

const checklist = [
  { id: "frontlight", label: "Vorderlicht (weiß, funktionstüchtig)" },
  { id: "backlight", label: "Rücklicht (rot, funktionstüchtig)" },
  { id: "rearreflector", label: "Rückstrahler (rot, nicht dreieckig)" },
  { id: "pedalreflectors", label: "Pedalreflektoren (gelb, vorne & hinten)" },
  { id: "spokereflectors", label: "Speichenreflektoren oder Reflexstreifen" },
  { id: "bell", label: "Klingel (hell klingend)" },
  { id: "brakes", label: "Zwei unabhängig funktionierende Bremsen" },
];

export default function StartedCheck() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  function toggleCheckbox(id: string) {
    setChecked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function submitCheck() {
    const allChecked = checklist.every(item => checked[item.id]);

    router.push({
      pathname: "/endCheck",
      params: {
        result: allChecked ? "good" : "bad",
      },
    });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headline}>SafeBike Check</Text>

      <Text style={styles.text}>
        Bitte kreuze alles an, was vorhanden ist und funktioniert.
      </Text>

      {checklist.map((item) => (
        <View key={item.id} style={styles.row}>
          <Checkbox
            value={checked[item.id] || false}
            onValueChange={() => toggleCheckbox(item.id)}
            color={checked[item.id] ? "#28a745" : undefined}
          />
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}

      <Pressable style={styles.button} onPress={submitCheck}>
        <Text style={styles.buttonText}>Check abschließen</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    flexGrow: 1,
    padding: 20,
  },
  headline: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 50,
  },
  text: {
    color: "white",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  label: {
    color: "white",
    marginLeft: 10,
    flex: 1,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});