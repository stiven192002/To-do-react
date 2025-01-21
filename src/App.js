import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const defaultTodo = [
{ text: `no ser joto` ,completed: true },
{ text: `desayunar` ,completed: false },
{ text: `hacer oficio` ,completed: true },
{ text: `LLorar en la lloreria` ,completed: false},

];

function App() {
  return (
    <>

       <TodoCounter  completed={17} total={25}  />
       <TodoSearch/>

       
      <TodoList>
         {defaultTodo.map(todo =>(
          <TodoItem key={todo.text} text ={todo.text  } completed={todo.completed} />
         ))}
      </TodoList  >
       
    <CreateTodoButton/>  
    </ >
  );
}







export default App;
