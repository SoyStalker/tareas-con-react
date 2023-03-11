import React from 'react'
import { TodoContext } from '../../context/TodoContext'

import { TodoTitleStyle, TodoButtonAdd } from './TodoTitle.style'

export default function TodoTitle() {

  const { completedTask, taskCount, onShowModal, isLoading } = React.useContext(TodoContext)

  return (
    <div>
      <TodoTitleStyle>
        {isLoading ? "Cargando..." : `Tarea ${completedTask} de ${taskCount}`}
        <TodoButtonAdd disabled={isLoading} onClick={onShowModal}>+</TodoButtonAdd>
      </TodoTitleStyle>
    </div>
  )
}