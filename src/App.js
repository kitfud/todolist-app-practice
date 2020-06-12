import React from 'react';
import TodoList from './TodoList'


function App() {
 return (
   <React.Fragment>
   <TodoList />
   <input type="text"/>
   <button>Add Todo</button>
   <button>Clear Complete</button>
   </React.Fragment>

 )
}

export default App;
