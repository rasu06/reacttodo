import React from 'react'

export default function Footer() {
    let addstyle={
        backgroundColor:"red",
        width:"100%",
        color:"white"
    }
    return (
        <div>
            <p className="text-center my-3" style={addstyle}>
                Copyright &copy; todo.com
           </p>
        </div>
    )
}
