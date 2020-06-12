import React, {useState, useRef} from 'react';
import TodoList from './TodoList'


function App() {
 const [todos,setTodos]= useState([
 
  ])//first state is all variables and second is funciton passed through all

const todoNameRef = useRef()

 function handleAddTodo(e){
 const name = todoNameRef.current.value
 if(name === '') return 
 console.log(name)
 todoNameRef.current.value = null
 } 
 return (
   <React.Fragment>
   <TodoList todos={todos}/>
   <input ref = {todoNameRef} type="text"/>
   <button 
   onClick= {handleAddTodo}
   >Add Todo</button>
   <button>Clear Complete</button>
   </React.Fragment>

 )
}

export default App;
