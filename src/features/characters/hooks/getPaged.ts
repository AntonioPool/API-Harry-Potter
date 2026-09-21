import { CharactersRepository } from "../repository/characters.repository";

const repository = new CharactersRepository

export const fetchCharacters = async() => {

    try {
        
        const characters = await repository.getCharacters({
            page: 1,
            max: 10,
            index: null
        })

        console.log(characters)
        return characters
    } catch (error) {
        console.error(error || "Error en el fetch")
    }
}