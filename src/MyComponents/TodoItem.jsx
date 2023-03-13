// import React from 'react'

// export const TodoItem = ({todo, onDelete}) => {
//   return (
//     <>
//     <div className='my-4'>
//         <h6>{todo.title}</h6>
//         <p>{todo.desc}</p>
//         <button className='btn btn-sm btn-danger' onClick={()=>onDelete(todo)}>Delete</button>
//     </div>
//     <hr/>
//     </>
//   )
// }

import React from "react";

 export function TodoItem(props) {
  return (
    <div>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      {props.showDelete && (
        <button
          className="btn btn-sm btn-danger" onClick={() => {props.onDelete(props.todo)}}>Delete</button>
      )}
    </div>
  );
}


 
