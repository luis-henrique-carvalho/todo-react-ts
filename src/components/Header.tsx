import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header `
  background-color: #282c34;
  color: #61dafb;
  text-align: center;
  padding: 1em;
  
`

const Header = () => {
  return (
    <HeaderStyled>
      <h1>React + Ts Todo</h1>
    </HeaderStyled>
  );
};

export default Header;
