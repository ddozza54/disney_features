export interface Character {
  id: number;
  name: string;
  imageUrl: string;
}

export interface CharacterData {
  id: number;
  films: [];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}