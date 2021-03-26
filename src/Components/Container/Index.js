import React, {useState}from 'react'
import {WrappAll} from "./ContainerElements"
import { Produtos } from "../Produtos/Main/Index"
import {RetiradaTab} from "../Retirada/Main/Index"

export const Container = ({isOpen}) => {

    const [showProdutos, setShowProdutos] = useState(false);
    const [showRetirada, setShowRetirada] = useState(true);

    return (
        <WrappAll isOpen={isOpen}>
            {showProdutos && <Produtos/>}
            {showRetirada && <RetiradaTab/>}
        </WrappAll>
    )
}
