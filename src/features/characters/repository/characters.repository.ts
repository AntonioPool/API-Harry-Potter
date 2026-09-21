import { api } from "@/api/client";
import { Character, Params } from "../types/character.types";

export class CharactersRepository {

    async getCharacters(params: Params): Promise<Character[]>{

        const cleanParams = Object.fromEntries(
            Object.entries(params).filter(([_, value]) => value !== null && value !== undefined)
        );

        const data = await api.get<Character[]>('/characters',
            {
                params: cleanParams
            }
        )

        return data

    }
}