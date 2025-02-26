import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
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
import { View, Text } from 'react-native';

// Empêche le SplashScreen de se cacher automatiquement
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'RockSalt': RockSalt_400Regular,
    'LovedByTheKing': LovedbytheKing_400Regular,
    'Gruppo': Gruppo_400Regular
  });

  // Fonction pour cacher l'écran de démarrage une fois que tout est prêt
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      // Cacher l'écran de démarrage une fois les polices chargées ou en cas d'erreur
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.frameworkReady?.();
    }
    
    // Appeler la fonction pour cacher l'écran de démarrage
    if (fontsLoaded || fontError) {
      onLayoutRootView();
    }
  }, [fontsLoaded, fontError, onLayoutRootView]);

  // Ne pas rendre l'application tant que les polices ne sont pas chargées
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Afficher les polices chargées pour le débogage (uniquement en développement)
  console.log('Polices chargées:', fontsLoaded);
  
  if (fontError) {
    console.error('Erreur de chargement des polices:', fontError);
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} onLayout={onLayoutRootView}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}