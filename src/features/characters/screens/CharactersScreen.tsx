import { FlatList, View, Text, Pressable, ActivityIndicator, TextInput } from "react-native";
import { Image } from "expo-image";
import { Search } from "lucide-react-native";
import { useCharacters } from "@/features/characters/hooks/useCharacters";
import { Character } from "@/features/characters/types/character.types";
import { colors } from "@/theme/colors";
import { charactersListStyles as styles } from "@/theme/charactersListStyles";

interface Props {
  onSelect: (index: number) => void;
}

export default function CharactersScreen({ onSelect }: Props) {
  const { filtered, loading, error, search, setSearch } = useCharacters();

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Personajes</Text>
          <Text style={styles.headerSubtitle}>Cargando el mundo mágico...</Text>
        </View>
        <ActivityIndicator size="large" color={colors.gold[400]} style={{ marginTop: 40 }} />
      </View>
    );
  }

  const renderItem = ({ item }: { item: Character }) => (
    <Pressable
      style={styles.card}
      onPress={() => onSelect(item.index)}
      android_ripple={{ color: colors.neutral[300] }}
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} contentFit="cover" />
      <View style={styles.cardInfo}>
        <Text style={styles.cardName}>{item.fullName}</Text>
        <Text style={styles.cardNickname} numberOfLines={1}>
          {item.nickname}
        </Text>
        <Text style={styles.cardHouse} numberOfLines={1}>
          {item.hogwartsHouse}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Personajes</Text>
        <Text style={styles.headerSubtitle}>Explora los hechiceros del mundo mágico</Text>
      </View>

      <View style={styles.searchContainer}>
        <Search size={20} color={colors.neutral[600]} strokeWidth={2} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por nombre o apodo..."
          placeholderTextColor={colors.neutral[600]}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {error && <Text style={styles.emptyText}>{error}</Text>}

      {filtered.length === 0 && !error ? (
        <Text style={styles.emptyText}>No se encontraron personajes.</Text>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => String(item.index)}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
