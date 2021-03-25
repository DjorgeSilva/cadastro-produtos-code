import React from 'react'
import {WrappAll} from "./ContainerElements"
import { Produtos } from "../Produtos/Main/Index"

export const Container = ({isOpen}) => {
    return (
        <WrappAll isOpen={isOpen}>
           <Produtos/> 
        </WrappAll>
    )
}
