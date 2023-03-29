import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import { BsFillPenFill } from 'react-icons/bs';

const TodoItem = ({
  todo, handleChangeProps, deleteTodoProps, setUpdate,
}) => {
  const { id, title, completed } = todo;
  const [editing, setEditing] = useState(false);
  const [inputError, setInputError] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      const inputValue = event.target.value.trim();
      if (inputValue === '') {
        setInputError(true);
        return;
      }
      setInputError(false);
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <div>
      <li className="todo-items">
        <div>
          <div className="todo-content">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => handleChangeProps(id)}
              id={`todo-${id}`}
              aria-label={`Mark ${title} as completed`}
            />
            <label htmlFor={`todo-${id}`} className="todo-text">{title}</label>
            <div className="button-wrapper">
              <button onClick={handleEditing} type="button" className="btn">
                <BsFillPenFill />
              </button>
              <button onClick={() => deleteTodoProps(id)} type="button" className="btn">
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </div>
        <input
          type="text"
          value={title}
          className="textInput"
          style={editMode}
          onChange={(e) => setUpdate(e.target.value, id)}
          onKeyDown={handleUpdatedDone}
          aria-label={`Edit ${title}`}
        />
      </li>
      {inputError && <p className="text-error">Please provide input text before updating.</p>}
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
