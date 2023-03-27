import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoInput = ({ addTodoProps }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add Item');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">
          <input id="todoInput" type="text" placeholder="Add Todo...." value={title} onChange={onChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <span>{message}</span>
    </>
  );
};

TodoInput.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default TodoInput;
