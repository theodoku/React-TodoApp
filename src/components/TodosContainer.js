import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodosContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => [...prev.filter((todo) => todo.id !== id)]);
  };

  return (
    <div>
      <Header />
      <TodoInput addTodoProps={addTodoItem} />
      <TodoList todos={todos} handleChangeProps={handleChange} deleteTodoProps={deleteTodo} />
    </div>
  );
};
export default TodosContainer;
