import { useState, useEffect, useMemo } from "react";
import { Character } from "../types/character.types";
import { fetchAllCharacters } from "./getAll";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      const data = await fetchAllCharacters();
      if (data.length === 0) {
        setError("No se pudieron cargar los personajes.");
      }
      setCharacters(data);
      setLoading(false);
    };
    load();
  }, []);

  const filtered = useMemo(() => {
    if (!search.trim()) return characters;
    const q = search.toLowerCase();
    return characters.filter(
      (c) =>
        c.fullName.toLowerCase().includes(q) ||
        c.nickname.toLowerCase().includes(q)
    );
  }, [characters, search]);

  return { characters, filtered, loading, error, search, setSearch };
};
