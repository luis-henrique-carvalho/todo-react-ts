import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'

// Styles
import { TaskFormStyled } from '../styles'

// Interfaces
import { ITask } from '../interfaces/Task'

interface Props {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [difficulty, setDifficulty] = useState<number>(0)

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const id = Math.floor(Math.random() * 1000)
        const newTask: ITask = {
            id, title, difficulty
        }

        setTaskList!([...taskList, newTask])

        setTitle('')
        setDifficulty(0)

        console.log(taskList)


    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value)
           
        } else {
            setDifficulty(parseInt(e.target.value))
          
        }

    }

    return (
        <TaskFormStyled onSubmit={addTaskHandler}>
            <div className='input-container'>
                <label htmlFor="title">Título:</label>
                <input type="text" name='title' value={title} onChange={handleChange} placeholder='Título da tarefa' />
            </div>
            <div className='input-container'>
                <label htmlFor="title">Dificuldade:</label>
                <input type="text" name='dificulty' value={difficulty} onChange={handleChange} placeholder='Dificuldade da tarefa' />
            </div>
            <input type="submit" value={btnText} />
        </TaskFormStyled>
    )
}

export default TaskForm