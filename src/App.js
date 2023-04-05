
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import React,  {useEffect, useState} from 'react';
import AddTodo from './MyComponents/AddTodo';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './MyComponents/About';

function App() {
let initTodo;
if(localStorage.getItem("todos")===null){
  initTodo = [];
}
else{
  initTodo = JSON.parse(localStorage.getItem("todos"))
}

  const onDelete=(todo)=>{
    console.log('I am delete Btn of todo', todo);

    setTodos (todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo=(title, desc)=>{
    console.log("I'm adding thid todo", title, desc)
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
      sno = todos[todos.length-1].sno + 1
    }

    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    // localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todos, setTodos] = useState([initTodo]);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
    },[todos])

  return (
    <>
 <Router>
    <Header title="MyToDos" searchBar={false}/>
    <Switch>
      <Route exact path="/" render={()=>{
        return(
        <>
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete}/>
        </>)
      }}>
      </Route>
      <Route exact path="/about"><About/></Route>
    </Switch>
    <Footer/>
    </Router> 
    </> 
  );
}
export default App;







