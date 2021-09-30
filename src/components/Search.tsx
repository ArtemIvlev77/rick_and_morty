import React, {FC} from 'react';
import styled from 'styled-components';



const Search: FC = () => {
  return (
    <SearchWrapper>
     <SearchInput type="text"  />
      <label>Name</label>

    </SearchWrapper>
  );
};

export default Search;

const SearchWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  height: 40px;
`


const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  border: 1px solid #AAA;
  border-radius: .5rem;
  outline: none;
  padding: 1rem;
  z-index: 1;
`

const SearchLabel = styled.label`
color: white;
`

