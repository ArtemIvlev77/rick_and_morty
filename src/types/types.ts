
interface CardPropsLocation {
  name: string;
  url: string;
}


export interface ICharacter {
  id: number
  name: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  species: string;
  location: CardPropsLocation;
  image: string;
  episode: [],
}

export interface IPages {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterResponse {
  results: ICharacter[];
  info: IPages;
}
