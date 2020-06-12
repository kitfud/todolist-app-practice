import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
 const [todos,setTodos]= useState([])//first state is all variables and second is funciton passed through all

useEffect(()=>{//reloads across page persists
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(storedTodos) setTodos(storedTodos)
},[]) 


useEffect (()=>{//stores each item within a page load
localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
},[todos])


function toggleTodo(id){//toggles from complete to incomplete
  const newTodos = [...todos]
  const todo = newTodos.find(todo=> todo.id===id)
  todo.complete = !todo.complete
  setTodos(newTodos)
}

const todoNameRef = useRef()

 function handleAddTodo(e){
 const name = todoNameRef.current.value
 if(name === '') return 
 setTodos(prevTodos =>{
   return [...prevTodos,{id:uuidv4(),name:name,complete:false}]
 })
 todoNameRef.current.value = null
 } 

 function handleClearTodos(){
   const newTodos = todos.filter(todo=> !todo.complete)
    setTodos(newTodos);
  }

  function handleClearAll(){
    const newTodos = [];
     setTodos(newTodos);
   }
 
 return (
   <React.Fragment>
   <TodoList todos={todos} toggleTodo={toggleTodo}/>
   <input ref = {todoNameRef} type="text"/>
   <button onClick= {handleAddTodo}>Add Todo</button>
   <button onClick = {handleClearTodos}>  Clear Complete</button>
   <button onClick = {handleClearAll}>  Clear All</button>
   <div>{todos.filter(todo => !todo.complete).length} left to do</div>
   </React.Fragment>

 )
}

export default App;
