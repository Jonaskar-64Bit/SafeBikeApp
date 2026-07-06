import React from 'react'
import { StyleSheet } from 'react-native'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabs,
        tabBarActiveTintColor: '#28a745',
        tabBarInactiveTintColor: '#28a7467c',
        headerShown: false,
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Start',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="info"
        options={{
          title: 'Infos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={24} color={color} />
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
  )
}

export default TabsLayout

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: '#1a1a1a',
  }
})