import React, {useState} from 'react';
import TodoList from './TodoList'


function App() {
 const [todos,setTodos]= useState(['task1','task2'])//first state is all variables and second is funciton passed through all

 return (
   <React.Fragment>
   <TodoList todos={todos}/>
   <input type="text"/>
   <button>Add Todo</button>
   <button>Clear Complete</button>
   </React.Fragment>

 )
}

export default App;
