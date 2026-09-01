import { Checkbox } from "expo-checkbox";
import { router, useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

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

  // Checkboxen jedes Mal zurücksetzen,
  // wenn der Check-Screen geöffnet wird
  useFocusEffect(
    useCallback(() => {
      setChecked({});
    }, []),
  );

  function toggleCheckbox(id: string) {
    setChecked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function submitCheck() {
    const allChecked = checklist.every((item) => checked[item.id]);

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
        <Pressable
          key={item.id}
          style={styles.row}
          onPress={() => toggleCheckbox(item.id)}
        >
          <Checkbox
            value={checked[item.id] || false}
            color={checked[item.id] ? "#28a745" : undefined}
          />

          <Text style={styles.label}>{item.label}</Text>
        </Pressable>
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
