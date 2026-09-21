export interface Character{
    fullName: string;
    nickname: string;
    hogwartsHouse: string;
    interpretedBy: string;
    children: string[];
    image: string;
    birthDate: string;
    index: number;
}

export interface Params{
    index: number | null;
    max: number | null;
    page: number | null;
}