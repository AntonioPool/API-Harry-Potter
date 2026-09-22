import { CharactersRepository } from "../repository/characters.repository";

const repository = new CharactersRepository();

export const fetchAllCharacters = async () => {
  try {
    const characters = await repository.getCharacters({
      page: null,
      max: null,
      index: null,
    });
    return characters;
  } catch (error) {
    console.error("Error en fetchAllCharacters:", error);
    return [];
  }
};
