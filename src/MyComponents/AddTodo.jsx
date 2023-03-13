import React, { useState } from 'react'


export const AddTodo=({addTodo})=> { 

  const[title, setTitle]=useState("");
  const[desc, setDesc]=useState("");

  const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Description can not be empty")
    }
    else{
   addTodo(title, desc);
   setTitle("");
   setDesc("");

    }
  }
  return (
    <div className='container my-3'>
        <h3 className='text-center'>What's Have You Done</h3>
        <form onSubmit={submit}>

    <div className="mb-3">
    <label className="form-label">Add Todo</label>
    <input type="text"  value={title}  onChange={(e)=>{setTitle(e.target.value)}}  className="form-control"  aria-describedby="emailHelp"/>
    </div>
    
    <div className="mb-3">
    <label className="form-label">Description</label>
    <input  type="text"  value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
    </div>
    
    <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}
export default AddTodo;