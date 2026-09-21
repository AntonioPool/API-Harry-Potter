export interface character{
    fullName: string;
    nickname: string;
    hogwartsHouse: string;
    interpretedBy: string;
    children: string[];
    image: string;
    birthDate: string;
    index: number;
}

export interface apiResponse{
    characters: character[]
}