import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {CharacterResponse, ICharacter} from "../types/types";
import Card from '../components/Card';
import axios from "axios";
import Pagination from "./Pagination";
import logo from '../images/Rick_and_Morty.svg'
import {Search} from "./Search";


interface RickAndMortyPageProps {
  children?: React.ReactNode;
}

const RickAndMortyPage: FC<RickAndMortyPageProps>
  = (props: RickAndMortyPageProps) => {

  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [pages, setPages] = useState<number>();
  const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character")
  const [nextPageUrl, setNextPageUrl]: string | any = useState("");
  const [prevPageUrl, setPrevPageUrl]: string | any = useState("");
  const [searchValue, setSearchValue] = useState<string>('');

  const filterCharacter = characters.filter(character => {
    return character.name.toLowerCase().includes(searchValue.toLowerCase())
  })
  //       return character.name.toLowerCase().includes(searchValue.toLowerCase())
  //   setCurrentPageUrl(currentPageUrl + `/?name=${searchValue}`)
  //   searchCharacter()


  const searchCharacter = async () => {
    try {
      const res: CharacterResponse = (
        await axios.get(currentPageUrl)).data;
      setCharacters(res.results);
      setPages(res.info.pages);
      setNextPageUrl(res.info.next);
      setPrevPageUrl(res.info.prev);
    } catch (e) {
      console.log(e)
    }
  }

  // const handleSubmit = (event) => {
  //   searchCharacter();
  // }

  const handleChange = (event) => {
    setSearchValue((event.target.value));
  }

  const nextPage = () => {
    setCurrentPageUrl(nextPageUrl);
    window.scrollTo(0, 0);
  }

  const prevPage = () => {
    setCurrentPageUrl(prevPageUrl);
    window.scrollTo(0, 0);
  }
  const goToPage = (num: number) => {
    setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`)
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    searchCharacter();
  }, [searchCharacter])


  const cardList = filterCharacter.map((character) =>
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
      <RicksLogo src={logo} alt="logo"/>
      <Search value={searchValue} onChange={handleChange}/>
      <CardGallery>{cardList}</CardGallery>
      <Pagination
        nextPage={nextPageUrl ? nextPage : null}
        prevPage={prevPageUrl ? prevPage : null}
        goToPage={goToPage}
        pages={pages}
      />
    </>
  );
};

export default RickAndMortyPage;

const CardGallery = styled.ul`
  margin-top: 50px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: repeat(300px);
  justify-content: center;
  align-items: center;

  ul {
    list-style-type: none;
    padding: 0;
  }
`

const RicksLogo = styled.img`
  object-fit: cover;
  margin-bottom: 100px;
`