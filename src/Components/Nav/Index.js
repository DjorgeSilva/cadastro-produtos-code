import React from 'react'
import logo from "../../img/logo.png"
import { Header } from './NavElements'
import {GiHamburgerMenu} from "react-icons/gi"

export const Nav = ({isOpen, setIsOpen}) => {
    return (
        <Header isOpen={isOpen}>
            <div className="box-img">
                <img src={logo} alt="Logomarca-construsrevice" />
            </div>

            <div className="box-icone-menu">
                <GiHamburgerMenu className="icone-menu" onClick={()=> setIsOpen(!isOpen)}/>
            </div>
        </Header>
    )
}
