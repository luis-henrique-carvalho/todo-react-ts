import React, { useState } from "react";
import { styled, ThemeProvider } from "styled-components";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";
// Interfaces
import { ITask } from "./interfaces/Task";

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
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal
        children={<TaskForm btnText="Editar Tarefa" taskList={taskList} />}
      />

      <Header />
      <Main>
        <h2>Conteúdo...</h2>
        <TaskForm
          btnText="Criar Tarefa"
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <TaskList taskList={taskList} handleDelete={deleteTask} />
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
