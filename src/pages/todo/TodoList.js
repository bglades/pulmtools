import React, { useState } from 'react';
import './todo.css'

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        text: inputValue,
        completed: false,
      };

      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleTodoClick = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleDeleteCompleted = () => {
    const filteredTodos = todos.filter((todo) => !todo.completed);
    setTodos(filteredTodos);
  };

  return (
    <div className="todo-list-container">
      <h2 className="todo-list-title">Todo List</h2>
      <div className="todo-input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="todo-add-button">
          Add
        </button>
      </div>
      <ul className="todo-items">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
            onClick={() => handleTodoClick(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <button onClick={handleDeleteCompleted} className="delete-completed-button">
        Delete Completed
      </button>
    </div>
  );
};

export default TodoList;
