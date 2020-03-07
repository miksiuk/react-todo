import React, { useState } from 'react';

export default function AddTodo({ addTodo }) {
    const [todo, setTodo] = useState('');
    const adding = () => {
        addTodo(todo);
        setTodo('');
    }
    return <div>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}></input>
        <button disabled={todo === ''} onClick={() => adding()}>Add Todo</button>
    </div>
}