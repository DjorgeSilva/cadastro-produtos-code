import React from 'react'
import { Tabs, Tab } from "react-bootstrap"
import { Consulta } from "../Consulta/Index"
import { Cadastro } from "../Cadastro/Index"
import { Container} from "./TabElements"

export const Produtos = () => {
    return (
        <Container className="container">

            <Tabs defaultActiveKey="profile" id="tabs-produtos" >
                <Tab eventKey="home" title="Consulta">
                    <Consulta />
                </Tab>

                <Tab eventKey="profile" title="Cadastro">
                    <Cadastro />
                </Tab>
            </Tabs>
        </Container>
    )
}
