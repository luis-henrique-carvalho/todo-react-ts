import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

// Styles
import { TaskFormStyled } from "../styles/styles";

// Interfaces
import { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = {
        id,
        title,
        difficulty,
      };

      setTaskList!([...taskList, newTask]);
    }

    setTitle("");
    setDifficulty(0);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <TaskFormStyled onSubmit={addTaskHandler}>
      <div className="input-container">
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Título da tarefa"
        />
      </div>
      <div className="input-container">
        <label htmlFor="title">Dificuldade:</label>
        <input
          type="number"
          name="dificulty"
          value={difficulty}
          onChange={handleChange}
          placeholder="Dificuldade da tarefa"
        />
      </div>
      <input type="submit" value={btnText} />
    </TaskFormStyled>
  );
};

export default TaskForm;
