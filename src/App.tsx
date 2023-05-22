import React from "react";
import styled from "styled-components";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

const Main = styled.main`
  min-height: 60vh;
  text-align: center;
  padding: 2em;

  h2 {
    margin-bottom: 0.8em;
  }
`;

function App() {
  return (
    <>
      <Header />
      <Main>
        <h2>Conteúdo...</h2>
      </Main>
      <Footer />
    </>
  );
}

export default App;
