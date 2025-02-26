import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ChefHat } from 'lucide-react-native';
import NoiseTexture from '../components/NoiseTexture';
import Particles from '../components/Particles';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#2C1810', '#3D2419']}
        style={styles.background}
      />
      <NoiseTexture opacity={0.15} />
      <Particles 
        count={10} 
        color="#FFF5E9" 
        minSize={1} 
        maxSize={3} 
        minDuration={15000} 
        maxDuration={25000}
      />
      
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <ChefHat size={45} color="#FFF5E9" strokeWidth={1} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, styles.titleBatch]}>Batch</Text>
          <Text style={[styles.title, styles.titleCooka]}>Cooka'</Text>
          <Text style={styles.slogan}>L'application qui t'aide à cuisiner efficacement,</Text>
          <Text style={styles.sloganBold}>une bonne fois pour toute !</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable 
            style={[styles.button, styles.primaryButton]}
            onPress={() => router.push('/auth/register')}
          >
            <Text style={[styles.buttonText, styles.primaryButtonText]}>
              S'inscrire
            </Text>
          </Pressable>
          <Pressable 
            style={[styles.button, styles.secondaryButton]}
            onPress={() => router.push('/auth/discover')}
          >
            <Text style={[styles.buttonText, styles.secondaryButtonText]}>
              Découvrir
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C1810',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '18%',
    paddingHorizontal: 24,
    zIndex: 2,
  },
  iconContainer: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginBottom: 74,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontFamily: 'RockSalt',
    color: '#FFF5E9',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  titleBatch: {
    transform: [{ rotate: '-8deg' }],
    marginLeft: -100,
    marginBottom: -64,
  },
  titleCooka: {
    transform: [{ rotate: '-8deg' }],
    marginRight: -100,
  },
  slogan: {
    fontFamily: 'LovedByTheKing',
    fontSize: 19,
    color: '#FFF5E9',
    marginTop: 4,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 1.25
  },
  sloganBold: {
    fontFamily: 'LovedByTheKing',
    fontSize: 28,
    color: '#FFF5E9',
    marginTop: 0,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontWeight: '500',
    letterSpacing: 1.25
  },
  buttonContainer: {
    width: '100%',
    gap: 24,
    alignItems: 'center',
  },
  button: {
    width: '56%',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#FF6B35',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#FF6B35',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Gruppo',
    paddingHorizontal: 8,
    letterSpacing: 1
  },
  primaryButtonText: {
    color: '#FFF5E9',
  },
  secondaryButtonText: {
    color: '#FF6B35',
  },
});