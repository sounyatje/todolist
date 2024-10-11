import { useState } from 'react';
import todosJSON from './../../Data/todos.json';
import SearchBar from '../../Components/SearchBar/SearchBar'
import  TodoList from '../../Components/TodoList/TodoList';

const Todo = () => {

    //? State avec la liste des animaux
    //* Le fichier JSON permet d'avoir des données initial 
    const [todos, setTodos] = useState(todosJSON);
    const [nameFilter, setNameFilter] = useState('');

    const handleSearch = (data) => {
        console.log(data);
        setNameFilter(data);
    }

    const handleClear = () => {
        setNameFilter('');
    }

    const handleDelete = (id) => {
        setTodos(todos => todos.filter(a => a.id !== id))
    }

    const currentNameFilter = nameFilter.toLowerCase()
    const todosDisplay = todos.filter(a => a.name.toLowerCase().includes(currentNameFilter))

    return (
        <div>
            <SearchBar btnSubmit='🔍' onSearch={handleSearch}  />
            {nameFilter !== '' && (
                <p>Filtre en cours : {nameFilter} <span onClick={handleClear}>🗑️</span></p>
            )}
            <AnimalList todos={todosDisplay}
                        onTodosDelete={handleDelete} />
        </div>
    )
};

export default Todo;