import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';

const SESSION_STORAGE_KEY ='todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);  
  const todoNameRef = useRef();
  useEffect(()=>{
    const storedTodos = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY));
    if(storedTodos) setTodos(storedTodos);
  },[])

  useEffect(()=>{
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(todos))
  },[todos])
  function addToDo(e){
    const name = todoNameRef.current.value;
    if(name === '') return;
    setTodos(preTodos =>{
      return [...preTodos,{id:uuidv4(),name:name, complete: false}]
    })
  }
  return (
    <>
    <ToDoList todos={todos} /><input ref={todoNameRef} type="text" />
    <button onClick={addToDo}>Add ToDo List</button>
    <button>Clear ToDo List</button>
    <div>0 left to do</div>
    </>
  );
}

export default App;
