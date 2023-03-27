import React from 'react';

const TodoItem = ({ todo, handleChangeProps, deleteTodoProps }) => {
    const { id, title, completed } = todo;
    
    return (
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        {title}
        <button onClick={() => deleteTodoProps(id)}>Delete</button>
      </li>
    );
  };
  
  export default TodoItem;
  
  