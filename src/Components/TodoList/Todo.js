import React, {useState} from 'react'
import {Container} from "./TodoElements"
import firebase from "../utils/firebase"

export const Todo = () => {
    const [title, setTitle] = useState("")

    const handleChange = (e) =>{
        setTitle(e.target.value);
    }

    const addTodo = () =>{
        const addRef = firebase.database().ref("todo");

        const todo = {
            title,
            complete: false,
        };

        addRef.push(todo)

        
    }

    return (
        <Container className='container'>

            <h1>Todo</h1>
            <input type="text" name="todo" id="todo" onChange={handleChange} value={title}/>
            <button type="button" onClick={addTodo}>Add Todo</button>
            
        </Container>
    )
}
