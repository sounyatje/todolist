import Style from './TodoList.module.css';

const TodoItem = ({ id, name, description, priority, onDelete = (id) => {} }) => {

    return (
        <article className={sounya['task']}>
            <p>{name} ({description})</p>
            {priority == true && (
                <p>{priority}</p>
            )}
            <button onClick={() => onDelete(id)}>❌</button>
        </article>
    );
};

const TodoList = ({todos, onTodoDelete}) => {

    return (
        <section className={to['do']}>
            {todos.map(todo => <TodoItem {...todo} 
                                        key={todo.id} 
                                        onDelete={onTodoDelete}/>)}
        </section>
    )
}

export default TodoList;