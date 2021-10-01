import React, {FC} from 'react';
import styled from 'styled-components';

// type Option = {
//   value: string;
//   label: string;
// }

type SearchProps = {
  value: string
  // onSubmit: (e) => void;
  onChange: (e) => void;
};


const Search: FC<SearchProps> = ({onChange, value}) => {
  // const handleOnChange = (e: React.FormEvent<HTMLSelectElement>) => {
  //   const {selectedIndex} = e.currentTarget;
  //   const selectedOption = options[selectedIndex];
  //   onChange(selectedOption.value)
  // }


  return (
    <SearchWrapper>
      <form >
      <SearchInput type="text"
      onChange={onChange}
      value={value}
      />

      {/*<SearchLabel>Name</SearchLabel>*/}
      {/*<SearchLabel>Status</SearchLabel>*/}
      {/*<SelectStatus value={value} onChange={handleOnChange}>*/}
      {/*  {options.map(option => (*/}
      {/*    <option key={option.value} value={option.value}>*/}
      {/*      {option.label}*/}
      {/*    </option>*/}
      {/*  ))}*/}
      {/*</SelectStatus>*/}
      {/*<SearchLabel>Gender</SearchLabel>*/}
      {/*<SelectGender name="Gender" id="Gender">*/}
      {/*  <option value="Female">Female</option>*/}
      {/*  <option value="Male">Male</option>*/}
      {/*  <option value="Genderless">Genderless</option>*/}
      {/*  <option value="unknown">unknown</option>*/}
      {/*</SelectGender>*/}
      <SearchButton type='submit' value={"SEARCH"} />
      </form>
    </SearchWrapper>
  );
};


export {Search};

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-bottom: 60px;
  gap: 10px;
`
const SearchInput = styled.input`
  color: #3bb2c9;
  width: 200px;
  font-size: 20px;
  line-height: 24px;
  background-color: #2d2f34;
  border: 1px solid rgb(235, 244, 97);
  border-radius: .5rem;
  outline: none;
  padding: 1rem;
  z-index: 1;
  transition: .3s ease;

  //
  //&:not(:placeholder-shown) + :not(:focus) {
  //  top: -32px;
  //  left: -200px;
  //  color: rgb(235, 244, 97);
  //  font-weight: 500;
  //  font-size: 12px;
  //  z-index: 10;
  //  background-color: #2d2f34;
  //}

  :focus {
    color: rgb(235, 244, 97);
    border: 1px solid #3bb2c9;
  }
`
// const SearchLabel = styled.label`
//   position: relative;
//   left: 75px;
//   top: -33px;
//   color: rgb(235, 244, 97);
//   font-size: 12px;
//   transition: .3s ease;
//   z-index: 10;
//   background-color: #2d2f34;
// `
// const SelectGender = styled.select`
//   position: relative;
//   left: -30px;
//   color: #3bb2c9;
//   width: 190px;
//   font-size: 20px;
//   line-height: 24px;
//   background-color: #2d2f34;
//   border: 1px solid rgb(235, 244, 97);
//   border-radius: .5rem;
//   outline: none;
//   padding: 1rem;
//   z-index: 1;
//   transition: .3s ease;
//
//   :focus {
//     color: rgb(235, 244, 97);
//     border: 1px solid #3bb2c9;
//   }
// `
// const SelectStatus = styled(SelectGender)``
const SearchButton = styled.input`
  margin-left: 20px;
  padding: 19px 30px;
  color: black;
  background-color: #3bb2c9;
  font-size: 20px;
  font-weight: 500;
  border: none;
  border-radius: .5rem;
  transition: .2s ease;
  letter-spacing: 3px;

  &:hover {
    color: rgb(235, 244, 97);
    border-color: #3bb2c9;
    transform: scale(1.1);
    box-shadow: 0 0 40px rgba(235, 244, 97, 1);
  }

  &:not(:focus) {
    background-color: #3bb2c9;
  }
`