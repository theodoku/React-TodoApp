import React from 'react';
import ReactDOM from 'react-dom/client';
import TodosContainer from './components/TodosContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodosContainer />
  </React.StrictMode>,
);
