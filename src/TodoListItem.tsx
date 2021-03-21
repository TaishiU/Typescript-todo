import React, { FC } from 'react';



interface Props {
    todo: Todo
    toggleTodo: ToggleTodo
}

const TodoListItem: FC<Props> = ({ todo, toggleTodo }) => {
    return (
        <div>
            <li>
                <label style={{ textDecoration: todo.complete ? 'line-through' : '' }}>
                    <input
                        type="checkbox"
                        checked={todo.complete}
                        onClick={() => toggleTodo(todo)}
                    />{'  '}
                    {todo.text}
                </label>
            </li>
        </div>
    )
}

export default TodoListItem;


