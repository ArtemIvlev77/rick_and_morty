import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {ICharacter} from "../types/types";

const RickAndMortyPage = () => {

  const [characters, setCharacters] = useState([]);

  async function  fetchCharacters() {
    try {
      const response = await axios.get<ICharacter>("https://rickandmortyapi.com/api/character")
      setCharacters(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <CardGallery>

    </CardGallery>
  );
};

export default RickAndMortyPage;

const CardGallery = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`