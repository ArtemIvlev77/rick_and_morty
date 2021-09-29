
interface CardPropsLocation {
  name: string;
  url: string;
}


export interface ICharacter {
  id: number
  name: string;
  gender: string;
  species: string;
  location: CardPropsLocation;
  image: string;
  episode: [],
}

export interface CharacterResponseInfo {
  count: number;
  next: string;
  pages: number;
}

export interface CharacterResponse {
  results: ICharacter[];
  info: CharacterResponseInfo;
}