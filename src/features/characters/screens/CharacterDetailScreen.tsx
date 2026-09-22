import { View, Text, ScrollView, Pressable, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import { ArrowLeft, Home, Calendar, User, Users } from "lucide-react-native";
import { useState, useEffect } from "react";
import { CharactersRepository } from "@/features/characters/repository/characters.repository";
import { Character } from "@/features/characters/types/character.types";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { characterDetailStyles as styles } from "@/theme/screenStyles";

const repository = new CharactersRepository();

interface Props {
  index: number;
  onBack: () => void;
}

export default function CharacterDetailScreen({ index, onBack }: Props) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const load = async () => {
    setLoading(true);
    try {
      const data: any = await repository.getCharacters({
        index,
        max: null,
        page: null,
      });

      // Si la API regresa un objeto directamente:
      if (data && !Array.isArray(data)) {
        setCharacter(data as Character);
      } else if (Array.isArray(data) && data.length > 0) {
        setCharacter(data[0]);
      } else {
        setCharacter(null);
      }
    } catch (err) {
      console.error("Error al cargar detalle:", err);
      setCharacter(null);
    } finally {
      setLoading(false);
    }
  };

  if (index !== null && index !== undefined) {
    load();
  }
}, [index]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Pressable style={styles.backButton} onPress={onBack}>
          <ArrowLeft size={20} color={colors.neutral[900]} strokeWidth={2.5} />
        </Pressable>
        <ActivityIndicator size="large" color={colors.gold[400]} style={{ marginTop: spacing.xxxl }} />
      </View>
    );
  }

  if (!character) {
    return (
      <View style={styles.container}>
        <Pressable style={styles.backButton} onPress={onBack}>
          <ArrowLeft size={20} color={colors.neutral[900]} strokeWidth={2.5} />
        </Pressable>
        <Text style={styles.loadingText}>Personaje no encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageSection}>
        <Image source={{ uri: character.image }} style={styles.heroImage} contentFit="cover" />
        <View style={styles.overlay} />
        <Pressable style={styles.backButton} onPress={onBack}>
          <ArrowLeft size={20} color={colors.neutral[1000]} strokeWidth={2.5} />
        </Pressable>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.name}>{character.fullName}</Text>
        <Text style={styles.nickname}>"{character.nickname}"</Text>

        <View style={styles.divider} />

        <View style={styles.detailRow}>
          <View style={styles.detailIcon}>
            <Home size={20} color={colors.gold[400]} strokeWidth={2} />
          </View>
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailLabel}>Casa de Hogwarts</Text>
            <Text style={styles.detailValue}>{character.hogwartsHouse}</Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <View style={styles.detailIcon}>
            <User size={20} color={colors.gold[400]} strokeWidth={2} />
          </View>
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailLabel}>Interpretado por</Text>
            <Text style={styles.detailValue}>{character.interpretedBy}</Text>
          </View>
        </View>

        {character.children.length > 0 && (
          <View style={{ marginTop: spacing.sm }}>
            <View style={styles.detailRow}>
              <View style={styles.detailIcon}>
                <Users size={20} color={colors.gold[400]} strokeWidth={2} />
              </View>
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailLabel}>Hijos</Text>
              </View>
            </View>
            <View style={styles.childrenContainer}>
              {character.children.map((child, i) => (
                <View key={i} style={styles.childTag}>
                  <Text style={styles.childTagText}>{child}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
