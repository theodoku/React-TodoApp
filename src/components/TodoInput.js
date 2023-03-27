import React, { useState } from 'react';

const TodoInput = (props) => {
    const [title, setTitle] = useState('')

    const onChange = (e) => {
        setTitle(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodoProps(title);
        setTitle('')
    };
    return (
        <form onSubmit={(handleSubmit)}>
            <label>
                <input type="text" placeholder="Add Todo...." value={title} onChange={onChange}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}
export default TodoInput;