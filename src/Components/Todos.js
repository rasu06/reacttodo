import React from 'react'
import Todoitems from "./Todoitems";
export default function Todos(props) {
    let todos=props.todos;
    let todobox={
        minHeight:"56.9vh",
        width:"50%"
    }

    //console.log(todos.length);
    return (
        <div className="container my-3" style={todobox}>
            <h3 className="text-center">Todo List</h3>
            {todos.length!==0?todos.map((todo)=>{
                   return (
                    <Todoitems todo={todo} key={todo.sno} ondelete={props.Ondelete}/>
                   )
            }):<h4 className="text-primary">All Todos are completed</h4>}
           
        </div>
    )
}

