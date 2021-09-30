import React, {FC} from 'react';
import styled from 'styled-components';
import logo from '../images/Rick_and_Morty.svg'

const Header: FC = () => {
  return (
    <HeaderWrap>
      <img src={logo} alt='logo'/>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #3bb2c9;
  position: absolute;
  top:0;
  left:0;
  z-index: -1;
  & img {
    object-fit: cover;
    
  }
`