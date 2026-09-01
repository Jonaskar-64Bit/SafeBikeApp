import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#28a745",
        tabBarInactiveTintColor: "#28a7467c",
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: "#1a1a1a",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Start",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="info"
        options={{
          title: "Infos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen name="check" options={{ href: null }} />
      <Tabs.Screen name="legalAdvice" options={{ href: null }} />
      <Tabs.Screen name="datenschutz" options={{ href: null }} />
      <Tabs.Screen name="impressum" options={{ href: null }} />
      <Tabs.Screen name="startedCheck" options={{ href: null }} />
      <Tabs.Screen name="endCheck" options={{ href: null }} />
    </Tabs>
  );
};

export default TabsLayout;
