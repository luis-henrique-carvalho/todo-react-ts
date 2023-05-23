import React from 'react'

import { TaskFormStyled } from '../styles'

interface Props {
    btnText: string
}

const TaskForm = ({ btnText }: Props) => {
    return (
        <TaskFormStyled>
            <div>
                <label htmlFor="title">Título:</label>
                <input type="text" name='title' placeholder='Título da tarefa' />
            </div>
            <div>
                <label htmlFor="title">Dificuldade:</label>
                <input type="text" name='dificulty' placeholder='Dificuldade da tarefa' />
            </div>
            <input type="submit" value={btnText} />
        </TaskFormStyled>
    )
}

export default TaskForm