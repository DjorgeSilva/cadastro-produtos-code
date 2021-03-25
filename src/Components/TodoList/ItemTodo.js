import React from 'react'
import firebase from "../../utils/firebase"

export const ItemTodo = ({todo}) => {

    const deletetodo = () =>{
        const todoRef = firebase.database().ref("todo").child(todo.id);
        todoRef.remove();
    }


    return (
        <div>
            <h1>{todo.title}</h1>
            <button type="button" onClick={deletetodo}>delete</button>
        </div>
    )
}
