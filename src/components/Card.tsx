import React, {FC} from 'react';
import styled from "styled-components";

interface CardPropsLocation {
  name: string;
  url: string;
}

interface CardProps {
  name: string;
  gender: string;
  species: string;
  location: CardPropsLocation;
  image: string;
  episode: number,
}

const Card: FC<CardProps> = ({
                               name,
                               gender,
                               species,
                               location,
                               image,
                               episode
                             }) => {

  return (

    <CardWrapper>
      <img src={image} alt={name + "pic"}/>
      <div>
        <h4> {name} </h4>
        <p> {gender} </p>
        <p> {species} </p>
        <p>{location.name}</p>
        <p>Number of episode: {episode}</p>
      </div>

    </CardWrapper>

  );
};

export default Card;

const CardWrapper = styled.li`
  font-size: 12px;
  line-height: 14px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 3px 3px 5px rgba(59,178,201, 0.5);
  transition: .2s ease;
  overflow: hidden;
  
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 3px 3px 6px rgba(235,244,97, 0.9);

  }
  
  & div {
    padding: 10px;
    background-color: #3a3b3c;
    color: white;
    transition: .2s ease;
  }
  

  & img {
    object-fit: cover;
    aspect-ratio: 1.7;
  }

  & p {
    margin: 0;
    padding: 0;
  }
`
