import React from 'react'
import { Tabs, Tab } from "react-bootstrap"
import { Consulta } from "../Consulta/Index"
import { Cadastro } from "../Cadastro/Index"
import { Container} from "./TabElements"

export const Produtos = () => {
    return (
        <Container className="container">

            <Tabs defaultActiveKey="profile" id="tabs-produtos" >
                <Tab eventKey="home" title="Consultar Produtos">
                    <Consulta />
                </Tab>

                <Tab eventKey="profile" title="Cadastrar Produtos">
                    <Cadastro />
                </Tab>
            </Tabs>
        </Container>
    )
}
