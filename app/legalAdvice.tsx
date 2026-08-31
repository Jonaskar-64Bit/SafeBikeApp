import { ScrollView, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

const LegalAdvice = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Rechtlicher Hinweis</Text>
        <Text style={styles.content}>
          Die Inhalte dieser App dienen ausschließlich der allgemeinen Information und Orientierung. Mit SafeBike wird eine vereinfachte, 
        nicht abschließende Überprüfung ausgewählter Mindestanforderungen an die Verkehrssicherheit von Fahrrädern ermöglicht. {"\n"} {"\n"}
        
        Die in der App verwendeten Prüfpunkte basieren auf den Vorschriften der Straßenverkehrs-Zulassungs-Ordnung (StVZO) in vereinfachter und 
        allgemeinverständlicher Form. Es besteht kein Anspruch auf Vollständigkeit, Richtigkeit oder Aktualität der dargestellten Inhalte. 
        Gesetzliche Regelungen können sich ändern oder im Einzelfall abweichend auszulegen sein. {"\n"} {"\n"}
        
        Die Nutzung der App ersetzt weder eine fachkundige Prüfung durch eine qualifizierte Person (zum Beispiel eine Fahrradwerkstatt), 
        noch eine behördliche oder polizeiliche Kontrolle. Insbesondere stellt die App keine rechtsverbindliche Bewertung der Verkehrssicherheit eines Fahrrads dar. {"\n"} {"\n"}
        
        Für Schäden materieller oder immaterieller Art, die durch die Nutzung oder Nichtnutzung der angebotenen Informationen oder durch fehlerhafte, 
        unvollständige oder veraltete Inhalte verursacht werden, wird – soweit gesetzlich zulässig – keine Haftung übernommen. 
        Die Nutzung der App erfolgt auf eigene Verantwortung. {"\n"} {"\n"}
        
        Maßgeblich sind im Zweifel ausschließlich die jeweils gültigen gesetzlichen Vorschriften sowie die Bewertung durch zuständige Behörden oder Kontrollorgane. {"\n"} {"\n"}
        
        Die App erhebt keinen Anspruch darauf, alle Sonderfälle, Umbauten, Zubehörteile oder individuellen Besonderheiten von Fahrrädern abzubilden oder zu bewerten. {"\n"} {"\n"}
        Durch die Nutzung dieser App kommt kein Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande.
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LegalAdvice

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ffffff',
    paddingBottom: 40
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  scrollView: {
    flex: 1
  },
})