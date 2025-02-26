import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

interface NoiseTextureProps {
  opacity?: number;
}

const NoiseTexture: React.FC<NoiseTextureProps> = ({ opacity = 1 }) => {
  return (
    <View style={styles.container} pointerEvents="none">
      <View 
        style={[
          styles.overlay, 
          { opacity }
        ]}
      >
        <Image
          source={{ 
            uri: 'https://images.unsplash.com/photo-1614292264554-7dca1d6466d6?q=80&w=1974&auto=format&fit=crop'
          }}
          style={styles.noiseImage}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    mixBlendMode: 'overlay',
  },
  noiseImage: {
    width: '100%',
    height: '100%',
    opacity: 1,
  },
});

export default NoiseTexture;