import React from 'react'
import { useState } from 'react';

export default function Inputtodo({addmytodos}) {
    let formstyle={
        display:"flex",
        flexDirection:"column",
      
       margin:"20px auto",
       width:"500px"
    }
    let divstyle={
        backgroundColor:"#88e3de",
        margin:"20px auto",

    }
    let title2={
        margin:"0 0 0 146px"
    }
    let title1={
        margin:"0 0 0 100px"
    }   
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")
    const whensubmit=(e)=>{
        e.preventDefault();
        if(!title||!desc){
            alert("title or description can not be blank");
            setTitle("");
        setDesc(""); 
            return ;
        }
       addmytodos(title,desc);    // we are calling this function which is present in out App.js file
                               // We have taken that func here using props
        setTitle("");
        setDesc("");                      
    }
    
    return (
        <div className="container" style={divstyle}>
            <h1 className="text-center">Add your TodosHere</h1>
            <form style={formstyle} onSubmit={whensubmit}>
                <label style={{margin:"5px 0"}}>
                    Title:
                     <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} name="title" style={title2}/>
                </label>
                <label style={{margin:"5px 0"}}>
                    Discription:
                     <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} name="desc" style={title1}/>
                </label>                

                <input type="submit" value="Submit"  style={{margin:"5px auto",width:"80px"}} />
            </form>
        </div>
    )
}
