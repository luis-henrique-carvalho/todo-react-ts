import React from "react";
import { ModalStyled } from "../styles/styles";

import { TaskListStyled } from "../styles/styles";

import { ITask } from "../interfaces/Task";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

interface Props {
  taskList: ITask[];
  handleDelete: (id: number) => void;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
  setTaskToUpdate: React.Dispatch<React.SetStateAction<ITask | null>>;
}

const TaskList = ({
  taskList,
  handleDelete,
  setHide,
  setTaskToUpdate,
}: Props) => {
  const handleClick = (task: ITask) => {
    setHide(false);
    setTaskToUpdate(task);
  };

  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <TaskListStyled key={task.id}>
            <div className="details">
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className="actions">
              <i onClick={() => handleClick(task)}>
                <AiFillEdit />
              </i>
              <i onClick={() => handleDelete(task.id)}>
                <AiFillDelete />
              </i>
            </div>
          </TaskListStyled>
        ))
      ) : (
        <p>não tem task</p>
      )}
    </>
  );
};

export default TaskList;
