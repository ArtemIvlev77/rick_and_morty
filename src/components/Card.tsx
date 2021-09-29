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
  font-size: 10px;
  line-height: 14px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  transition: .1s linear;
  overflow: hidden;
  
  
  &:hover {
    transform: scale(1.02);
  }
  
  & div {
    padding: 10px;
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
