import React, {FC} from 'react';
import styled from "styled-components";

interface CardProps {
  id: number;
  name: string;
  gender: string;
  species: string;
  location: object;
  image: string;
  episode: [],
}

const Card: FC<CardProps> = ({
                               id,
                               name,
                               gender,
                               species,
                               location,
                               image,
                               episode
                             }) => {

  return (

      <CardWrapper>

      </CardWrapper>

  );
};

export default Card;



const CardWrapper = styled.div`
  width: 300px;  
  height: 300px;
`