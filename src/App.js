import React, { useState, useEffect } from 'react';
import './App.css';
import PostList from "./components/PostList";
import ToDoLine from "./components/ToDoLine";
import AddTodo from "./components/AddTodo";
import ModalDeleteConfirm from "./components/Modal"
//XMLHTTPRequest
//fetch
//axious

function App() {

  const list = [
    {
      id: 1,
      name: 'toDo1',
      done: false
    },
    {
      id: 2,
      name: 'toDo2',
      done: false
    }
  ]

  const [todoList, setTodoList] = useState(list);
  const [isOpenModalDeleteConfirm, setIsOpenModalDeleteConfirm] = useState(false);
  const [modalDeletedTodo, setModalDeletedTodo] = useState({});

  const todoChangeStatus = (todo) => {
    let newTodoList = [...todoList];
    newTodoList.find(el => el.id === todo.id).done = todo.done ? false : true;
    setTodoList(newTodoList);
  }

  const todoChangeName = (todo) => {
    let newTodoList = [...todoList];
    newTodoList.find(el => el.id === todo.id).name = todo.name;
    setTodoList(newTodoList);
  }

  const todoRemove = (todo) => {
    let newTodoList = [...todoList].filter(el => el.id !== todo.id);
    setTodoList(newTodoList);
    setModalDeletedTodo({});
    setIsOpenModalDeleteConfirm(false);
  }

  const closeModal = () => {
    setModalDeletedTodo({});
    setIsOpenModalDeleteConfirm(false);
  }

  const openModal = (todo) => {
    setModalDeletedTodo(todo);
    setIsOpenModalDeleteConfirm(true);
  }

  const todoAdd = (name) => {
    let newTodoList = [...todoList, { id: todoList.length + 1, name: name, done: false }];
    setTodoList(newTodoList);
  }

  const todoUp = (todo) => {
    let newTodoList = [...todoList];
    let index = newTodoList.findIndex(el => el.id === todo.id);
    let temp = newTodoList[index - 1];
    newTodoList[index - 1] = todo;
    newTodoList[index] = temp;
    setTodoList(newTodoList);
  }

  const todoDown = (todo) => {
    let newTodoList = [...todoList];
    let index = newTodoList.findIndex(el => el.id === todo.id);
    let temp = newTodoList[index + 1];
    newTodoList[index + 1] = todo;
    newTodoList[index] = temp;
    setTodoList(newTodoList);
  }

  // useEffect(() => {
  //   console.log('Render');
  //   getPosts()
  // }, []);

  // const [posts, setPosts] = useState([]);

  // const getPosts = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => res.json())
  //     .then(res => setPosts(res))
  // };

  return (
    <div className="App">
      {/* <button onClick={getPosts}>Get posts</button> */}
      {/* <PostList posts={posts} /> */}
      <ul>
        {todoList.map((el, i) => <li>
          <ToDoLine key={el.id} todo={el}
            todoChangeStatus={todoChangeStatus}
            todoUp={todoUp}
            todoDown={todoDown}
            openModal={openModal}
            todoChangeName={todoChangeName}
            first={i === 0 ? true : false}
            last={i === todoList.length - 1 ? true : false} /></li>)}
      </ul>
      <AddTodo addTodo={todoAdd} />
      <ModalDeleteConfirm show={isOpenModalDeleteConfirm}
        closeModal={closeModal}
        todo={modalDeletedTodo}
        todoRemove={todoRemove} />

    </div>
  );
}

export default App;
