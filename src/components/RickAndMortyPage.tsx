import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {CharacterResponse, ICharacter} from "../types/types";
import Card from '../components/Card';
import axios from "axios";


interface RickAndMortyPageProps {
  children: React.ReactNode;
}

const RickAndMortyPage: FC<RickAndMortyPageProps>
  = (props: RickAndMortyPageProps) => {

  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    fetchCharacters();
  }, [])

  async function fetchCharacters() {
    try {
      const response: CharacterResponse = (
        await axios.get("https://rickandmortyapi.com/api/character")).data;
      setCharacters(response.results);
    } catch (e) {
      console.log(e)
    }
  }

  console.log(characters[0])

  const cardList = characters.map((character) =>
    <Card
      key={character.id}
      name={character.name}
      gender={character.gender}
      species={character.species}
      location={character.location}
      image={character.image}
      episode={character.episode.length}/>
  );

  return (
    <>
      <CardGallery>{cardList}</CardGallery>
    </>
  );
};

export default RickAndMortyPage;

const CardGallery = styled.ul`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: repeat(300px);
  justify-content: center;
  align-items: center;

  ul {
    list-style-type: none;
    padding: 0;
  }
`