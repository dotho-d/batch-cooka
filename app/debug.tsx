import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { 
  useFonts,
  RockSalt_400Regular 
} from '@expo-google-fonts/rock-salt';
import {
  LovedbytheKing_400Regular
} from '@expo-google-fonts/loved-by-the-king';
import {
  Gruppo_400Regular
} from '@expo-google-fonts/gruppo';

export default function DebugScreen() {
  const router = useRouter();
  
  const [fontsLoaded, fontError] = useFonts({
    'RockSalt': RockSalt_400Regular,
    'LovedByTheKing': LovedbytheKing_400Regular,
    'Gruppo': Gruppo_400Regular
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Chargement des polices...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Débogage des polices</Text>
        
        <View style={styles.fontContainer}>
          <Text style={styles.fontName}>RockSalt</Text>
          <Text style={styles.rockSalt}>Exemple de texte avec RockSalt</Text>
        </View>
        
        <View style={styles.fontContainer}>
          <Text style={styles.fontName}>LovedByTheKing</Text>
          <Text style={styles.lovedByTheKing}>Exemple de texte avec LovedByTheKing</Text>
        </View>
        
        <View style={styles.fontContainer}>
          <Text style={styles.fontName}>Gruppo</Text>
          <Text style={styles.gruppo}>Exemple de texte avec Gruppo</Text>
        </View>
        
        <View style={styles.fontContainer}>
          <Text style={styles.fontName}>System Default</Text>
          <Text style={styles.systemDefault}>Exemple de texte avec la police système</Text>
        </View>

        <Button 
          title="Retour à l'accueil" 
          onPress={() => router.push('/')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2C1810',
  },
  scrollView: {
    flex: 1,
  },
  loadingText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    marginTop: 50,
  },
  fontContainer: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  fontName: {
    fontSize: 18,
    color: '#FFA07A',
    marginBottom: 10,
  },
  rockSalt: {
    fontFamily: 'RockSalt',
    fontSize: 20,
    color: 'white',
  },
  lovedByTheKing: {
    fontFamily: 'LovedByTheKing',
    fontSize: 20,
    color: 'white',
  },
  gruppo: {
    fontFamily: 'Gruppo',
    fontSize: 20,
    color: 'white',
  },
  systemDefault: {
    fontSize: 20,
    color: 'white',
  },
});