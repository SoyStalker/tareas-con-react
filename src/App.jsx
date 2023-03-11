import React from 'react';
import TodoTitle from "./components/TodoTitle/TodoTitle";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import TodoCardList from "./components/TodoCardList";
import TodoCard from "./components/TodoCard/TodoCard";
import TodoModal from './components/TodoModal/TodoModal';
import TodoCreate from './components/TodoCreate/TodoCreate';

import { Appcontainer } from './App.style'

import { TodoContext } from './context/TodoContext'

function App() {

    const { task, showModal, onComplete, onDelete, search, isLoading } = React.useContext(TodoContext)

    return (
    <Appcontainer>
        <TodoTitle />
        <TodoSearch />

        <TodoCardList>
            {isLoading && <div>Cargando...</div>}
            {task
            .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
            .map((item, index) => (
                <TodoCard 
                    key={index} 
                    item={item} 
                    onComplete={onComplete} 
                    onDelete={onDelete} 
                />
            ))};

        </TodoCardList>
        
        {showModal && (
            <TodoModal>
                <TodoCreate />
            </TodoModal>
        )}
        
    </Appcontainer>
    );
}

export default App;
