import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import CharactersScreen from "../features/characters/screens/CharactersScreen";
import CharacterDetailScreen from "../features/characters/screens/CharacterDetailScreen";

export function CharactersNavigator() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => setSelectedIndex(index);
  const handleBack = () => setSelectedIndex(null);

  return (
    <>
      <StatusBar style="light" />
      {selectedIndex === null ? (
        <CharactersScreen onSelect={handleSelect} />
      ) : (
        <CharacterDetailScreen index={selectedIndex} onBack={handleBack} />
      )}
    </>
  );
}
