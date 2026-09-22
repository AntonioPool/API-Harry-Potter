import { useRef, useEffect } from "react";
import { View, Text, Animated, Pressable } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Sparkles, ChevronRight } from "lucide-react-native";
import { colors } from "../theme/colors";
import { portadaStyles as styles } from "../theme/portadaStyles";

const CASTLE_IMAGE =
  "https://images.unsplash.com/photo-1656878564120-ab988c47f0b5?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Index() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.heroSection, { opacity: fadeAnim }]}>
        <Image
          source={CASTLE_IMAGE}
          style={styles.heroImage}
          contentFit="cover"
          transition={500}
        />
        <View style={styles.heroOverlay} />

        <View style={styles.heroContent}>
          <Text style={styles.title}>El Mundo</Text>
          <Text style={styles.titleAccent}>Mágico</Text>

          <Text style={styles.subtitle}>
            Sumérgete en el universo de Harry Potter.
          </Text>

          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <Pressable
              style={styles.enterButton}
              onPress={() => router.push} // Reemplaza por la ruta de tu pantalla principal
              onPressIn={onPressIn}
              onPressOut={onPressOut}
            >
              <Text style={styles.enterButtonText}>Explorar</Text>
              <ChevronRight size={20} color={colors.neutral[50]} strokeWidth={2.5} />
            </Pressable>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
}