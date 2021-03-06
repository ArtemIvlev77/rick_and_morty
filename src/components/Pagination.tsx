import React, {FC} from 'react';
import styled from "styled-components";

interface OwnProps {
  nextPage?: () => void | null;
  prevPage?: () => void;
  goToPage?: (arg: number) => void;
  pages?: number;
}

type Props = OwnProps;

const Pagination: FC<Props> = (props: OwnProps) => {

  let pageButtons = [];
  for (let i = 1; i <= props.pages; i++) {
    pageButtons.push(<button key={i} onClick={() => props.goToPage(i)}>{i}</button>)
  }
  return (
    <Container>
      {props.prevPage && (<button onClick={props.prevPage}>&#60;</button>)}
      {pageButtons}
      {props.nextPage && (<button onClick={props.nextPage}>&#62;</button>)}

    </Container>
  );
};

export default Pagination;

const Container = styled.ul`
 margin: 50px 0;
  display: flex;
  justify-content: center;
  gap: 5px;
  & button {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background-color: #3bb2c9;
    transition: .1s ease-in box-shadow;
    border: none;
    border-radius: 10px;
    
    &:hover {
      transform: scale(1.25);
      box-shadow: 0 0 10px rgb(235,244,97);
      color: rgb(235,244,97);
    }
  }
`