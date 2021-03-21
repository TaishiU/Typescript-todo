import React, { FC, useState } from 'react';
import './AddTodoForm.css'

interface Props {
    addTodo: AddTodo
}

const AddTodoForm: FC<Props> = ({ addTodo }) => {

    const [text, setText] = useState('');

    return (
        <form className="form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    addTodo(text);
                    setText('');
                }}
            >追加</button>
        </form>
    )
}

export default AddTodoForm