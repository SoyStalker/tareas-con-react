import React from 'react'

import { 
    TodoContent,
    TodoContentHeader,
    TodoContentButton,
    TodoModalBody,
    TodoTextArea,
    TodoBottonCreate 
} from "./TodoCreate.style";

import { TodoContext } from '../../context/TodoContext'

export default function TodoCreate() {

    const { addTask, onCloseModal, onNewTask } = React.useContext(TodoContext)

  return (
    <TodoContent onSubmit={addTask}>
        <TodoContentHeader>
            <h1>Crear Tarea</h1>
            <TodoContentButton type="button" onClick={onCloseModal}>❌</TodoContentButton>
        </TodoContentHeader>

        <TodoModalBody>
            <TodoTextArea onChange={onNewTask} className="inputSearch" type="text" placeholder='anadir nueva tarea'/>
            <TodoBottonCreate type="submit">
                Crear
            </TodoBottonCreate>
        </TodoModalBody>
    </TodoContent>
  )
}
