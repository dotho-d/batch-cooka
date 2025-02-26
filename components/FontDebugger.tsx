import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FontDebugger = () => {
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 300,
    height: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 10,
    padding: 10,
    zIndex: 9999,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  fontContainer: {
    marginBottom: 15,
  },
  fontName: {
    fontSize: 14,
    color: '#FFA07A',
    marginBottom: 5,
  },
  rockSalt: {
    fontFamily: 'RockSalt',
    fontSize: 16,
    color: 'white',
  },
  lovedByTheKing: {
    fontFamily: 'LovedByTheKing',
    fontSize: 16,
    color: 'white',
  },
  gruppo: {
    fontFamily: 'Gruppo',
    fontSize: 16,
    color: 'white',
  },
  systemDefault: {
    fontSize: 16,
    color: 'white',
  },
});

export default FontDebugger;