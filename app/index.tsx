import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Willkommen bei SafeBike</Text>
      <Text style={styles.text}>Starte jetzt den Check und finde in wenigen Schritten heraus, ob dein Fahrrad verkehrssicher ist.</Text>
      <Link href="/check" style={styles.button}>Check starten</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headline: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 50,
    },
    button: {
        color: 'white',
        marginTop: 20,
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: 'white',
        marginTop: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
    }
})