import React from "react";

import { TaskListStyled } from "../styles";

import { ITask } from "../interfaces/Task";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

interface Props {
  taskList: ITask[];
  handleDelete: (id: number) => void;
}

const TaskList = ({ taskList, handleDelete }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <TaskListStyled key={task.id}>
            <div className="details">
              <h4>{task.title}</h4>
              <p>Dificuldade; {task.difficulty}</p>
            </div>
            <div className="actions">
              <i>
                <AiFillEdit />
              </i>
              <i onClick={() => handleDelete(task.id)}>
                <AiFillDelete  />
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
