import React from "react";
import { styled, ThemeProvider } from "styled-components";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// Styles

import { theme } from "./styles";
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

    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <h2>Conteúdo...</h2>
        <TaskForm btnText="Criar Tarefa" />
        <TaskList/>
      </Main>
      <Footer />
    </ThemeProvider>

  );
}

export default App;
