import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  color: white;

  span {
    font-weight: bold;
    color: #61dafb;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>
        <span>React + Ts Todo</span> @ 2023
      </p>
    </FooterStyled>
  );
};

export default Footer;
