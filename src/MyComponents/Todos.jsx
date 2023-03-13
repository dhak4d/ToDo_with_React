import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos=(props) =>{
  const myStyle = {
    margin:'40px, auto',
    minHeight:'70vh',
  };

  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">To-Do List</h3>
      {props.todos.length === 0 ? (
        <p>There's Empty List</p>) :
         (props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} showDelete={props.todos.length > 0} // Conditionally render delete button
            />
          );
        })
      )}
    </div>
  );
}




