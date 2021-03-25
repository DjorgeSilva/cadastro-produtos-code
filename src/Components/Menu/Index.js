import React, { useState } from 'react'
import {
    Container,
    Nav,
} from "./MenuElements"
import { Link } from "react-router-dom"
import { IoIosConstruct, IoIosRedo, IoMdPodium, IoMdRepeat, IoIosPeople, IoMdCart, IoLogoUsd, IoIosListBox } from "react-icons/io"

export const Menu = ({isOpen}) => {
    
    return (
        <Container isOpen={isOpen}>
            <nav>
                <ul>
                    <li>
                        <div className="box-icon">
                            <IoIosConstruct className="icon" />
                        </div>
                        <div className="box-txt">
                            <p>Produtos</p>
                        </div>
                    </li>

                    <li>
                        <div className="box-icon">
                            <IoIosRedo className="icon" />
                        </div>
                        <div className="box-txt">
                            <p>Retiradas</p>
                        </div>
                    </li>

                    <li>
                        <div className="box-icon">
                            <IoMdRepeat className="icon" />
                        </div>
                        <div className="box-txt">
                            <p>Devolução</p>
                        </div>
                    </li>

                    <li>
                        <div className="box-icon">
                            <IoIosPeople className="icon" />
                        </div>
                        <div className="box-txt">
                            <p>Clientes</p>
                        </div>
                    </li>

                    <li>
                        <div className="box-icon">
                            <IoMdCart className="icon" />
                        </div>
                        <div className="box-txt">
                            <p>Fornecedor</p>
                        </div>
                    </li>

                    <li>
                        <div className="box-icon">
                            <IoLogoUsd className="icon" />
                        </div>
                        <div className="box-txt">
                            <p>Contas à pagar</p>
                        </div>
                    </li>

                    <li>
                        <div className="box-icon">
                            <IoIosListBox className="icon" />
                        </div>
                        <div className="box-txt">
                            <p>Consultas</p>
                        </div>
                    </li>


                    <li>
                        <div className="box-icon">
                            <IoMdPodium className="icon" />
                        </div>
                        <div className="box-txt">
                            <p>Gráficos</p>
                        </div>
                    </li>

                </ul>
            </nav>
        </Container>
    )
}
