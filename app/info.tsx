import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'      

const settings = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.headline}>Informationen</Text>
        <Link href="https://jonas-safebike.netlify.app/contact" style={styles.button}>Kontakt aufnehmen</Link>
        <Link href="https://jonas-feedback.netlify.app/?project=safebike" style={styles.button}>Feedback geben</Link>
        <Link href="https://jonaskrueger.netlify.app/" style={styles.button}>Weitere Projekte</Link>
        <Text style={styles.text2}>Rechtliches</Text>
        <Link href="/legalAdvice" style={styles.button}>Rechtlicher Hinweis</Link>
        <Link href="/datenschutz" style={styles.button}>Datenschutz</Link>
        <Link href="/impressum" style={styles.button}>Impressum</Link>

        <Text style={styles.text}>Version 1.0.0 {"\n"}
            &#169; 2026 SafeBike | Jonas Krüger</Text>
    </View>
  )
}

export default settings

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a',
        flex: 1,
        alignItems: 'center',
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
    },
    text2: {
        color: 'white',
        marginTop: 20,
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: 20,
    },
})