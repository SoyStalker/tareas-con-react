import React, { createContext } from "react";
import useStoragex from "../hooks/useStorage";

const TodoContext = createContext();

// const allTask = [
//     {title: "Pasear al perro", completed: true},
//     {title: "Pasear al gato", completed: false},
//     {title: "Comprar en el super", completed: true},
//     {title: "Preparar la cena", completed: false},
//     {title: "Comer", completed: true},
// 
// ]


const TodoProvider = ({ children }) => {

    const { data: task, isLoading, isError, saveData: setTask } = useStoragex("tasks", []);

    const [showModal, setShowModal] = React.useState(false);

    const [search, setSearch] = React.useState("");

    const [newTaskInput, setNewTaskInput] = React.useState("")

    const taskCount = task.length;

    const completedTask = task.filter((task) => task.completed).length;

    const onComplete = (item) => {
        const newTask = task.map(t => {
            if(t.title === item.title) {
                return {
                    ...t,
                    completed: !t.completed
                }
            }
            return t;
        })
        setTask(newTask)
    };

    const onDelete = (item) => {
        const newTask = task.filter(t => t.title !== item.title);
        setTask(newTask)
    }

    const onSearch = (e) => {
    setSearch(e.target.value)
  }


  const onShowModal = () => {
    setShowModal(true);
  }

  const onCloseModal = () => {
    setShowModal(false);
  }

  const addTask = (e) => {
    e.preventDefault();
    const newTask = [...task, { title: newTaskInput, completed: false }];
    setTask(newTask)
    setNewTaskInput("")
    setShowModal(false)
  }

  const onNewTask = (e) => {
    setNewTaskInput(e.target.value)
  }

    return (
        <TodoContext.Provider 
            value={{
                showModal, 
                task, 
                search,
                newTaskInput,
                taskCount,
                completedTask,
                onComplete,
                onDelete,
                onSearch,
                onShowModal,
                onCloseModal,
                addTask,
                onNewTask,
                isLoading,
                isError
            }}
        >

        {children}
        
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };