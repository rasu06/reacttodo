import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import Inputtodo from "./Components/Inputtodo";
import About from "./Components/About";
import { useState, useEffect } from 'react';



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {


  


  let inittodos;
  if (localStorage.getItem("todos") === null) {
    inittodos = [];
  }
  else {
    inittodos = JSON.parse(localStorage.getItem("todos"));
  }



  const OnDelete = (todo) => {
   // console.log("clicked on delete", todo);
    setTodos(todos.filter((p) => {            ////setTodos will be called with new array after filter and will set todos to new todos
      return todo !== p;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addmytodos = (title, desc) => {
    let obj = {
      sno: todos.length + 1,
      title: title,
      desc: desc
    }
    //console.log(obj);
    setTodos([...todos, obj]);
    // here setTodos is doing its work of setting new todos BUT it takestime,so our compiler goes to next line to save that todos{this is without update} in localStorage       

  }
  let [todos, setTodos] = useState(inittodos);

  // Using useeffecthook  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]) 



  return (
    <>
    <Router>
      <Header title="MY TODO" searchbar={false} />
      
       <Switch>
          <Route exact path="/" render={()=>{
            return (<>
             <Inputtodo addmytodos={addmytodos} />
              <Todos todos={todos} Ondelete={OnDelete} />
              </>)
          }}>
           
          </Route>
          <Route exact path="/About">
            <About/>
          </Route>  
      </Switch>
      <Footer />
    </Router>
    </>

  );
}

export default App;
