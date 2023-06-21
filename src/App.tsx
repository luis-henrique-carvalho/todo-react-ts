import React, { useState } from "react";
import { styled, ThemeProvider } from "styled-components";
import GlobalSyles from "./styles/GlobalSyles";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";
// Interfaces
import { ITask } from "./interfaces/Task";

// Styles
import { theme } from "./styles/styles";
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
  const [hide, setHide] = useState(true);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems)

    setHide(true)
  };


  return (
    <ThemeProvider theme={theme}>
      <GlobalSyles />
      <Modal
        setHide={setHide}
        hide={hide}
        children={
          <TaskForm
            btnText="Editar Tarefa"
            setTaskList={setTaskList}
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />

      <Header />
      <Main>
        <h2>Tarefas</h2>
        <TaskForm
          btnText="Criar Tarefa"
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <TaskList
          taskList={taskList}
          setHide={setHide}
          handleDelete={deleteTask}
          setTaskToUpdate={setTaskToUpdate}
        />
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
