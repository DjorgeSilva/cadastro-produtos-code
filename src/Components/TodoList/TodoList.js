import React, { useEffect, useState } from 'react'
import firebase from "../../utils/firebase"
import {ItemTodo} from "../../Components/ItemTodo"

export const TodoList = () => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const todoRef = firebase.database().ref("todo");
        todoRef.on("value", (snapshot) => {
            const todos = snapshot.val();

            const todoLista = [];

            for (let id in todos) {
                todoLista.push({id, ...todos[id]});
            }
            setTodoList(todoLista);
  
        })
    }, [])


    return (
        <div>
            <h1>Lista de produtos:</h1>
            {todoList &&
                todoList.map((produto, index) => {
                    return (
                        <>
                           <ItemTodo todo={produto} key={index}/>
                        </>
                    )
                })}
        </div>
    )
}
