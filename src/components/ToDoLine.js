import React, { useState } from 'react';

export default function ToDo(props) {
    const [nameTodo, setNameTodo] = useState(props.todo.name);
    const [editing, setEditing] = useState(false);

    const todoChange = () => {
        let newTodo = { ...props.todo, name: nameTodo };
        props.todoChangeName(newTodo);
        setEditing(false);
    }
    const todoEdit = () => {
        setEditing(true);
        setNameTodo(props.todo.name);
    }

    return <>
        <button disabled={props.first === true} onClick={() => props.todoUp(props.todo)}>▲</button>
        <button disabled={props.last === true} onClick={() => props.todoDown(props.todo)}>▼</button>
        {editing ?
            <input type="text" value={nameTodo} onChange={e => setNameTodo(e.target.value)}></input> :
            <span>{props.todo.done ? <font color="green"> ✓ <s>{props.todo.name}</s></font> : <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.todo.name}</span>}</span>
        }
        <button onClick={() => props.todoChangeStatus(props.todo)}>done</button>
        {editing ?
            <button onClick={() => todoChange()}>submit</button> :
            <button onClick={() => todoEdit()}>edit</button>

        }
        <button onClick={() => props.todoRemove(props.todo)}>delete</button>
    </>
}