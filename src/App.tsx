import React, { FC, useState } from 'react'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'


const initialTodos: Todo[] = [
  {
    text: "学び、考え、行動し、実現する",
    complete: true
  }, {
    text: "エンジニアとしてのレベルを高める",
    complete: false
  }, {
    text: "日常にある課題に目を向け、解決する",
    complete: false
  }, {
    text: "ビジネスとしての仕組みを構築する",
    complete: false
  },
]

const App: FC = () => {

  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo, complete: !todo.complete
        }
      }
      return todo
    });
    setTodos(newTodos);
  }

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
      />
    </div>
  )
}

export default App
