import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, handleChangeProps, deleteTodoProps }) => {
  const { id, title, completed } = todo;

  return (
    <li className="todo-items">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      {title}
      <button onClick={() => deleteTodoProps(id)} type="button" className="btn">
        Delete
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
