import React from 'react'
import { Tabs, Tab } from "react-bootstrap"
import { Container} from "./TabElements"
import {ConsultarRetirada} from "../Consulta/Index"
import { Recibo } from '../Recibo/Recibo'

export const RetiradaTab = () => {
    return (
        <Container className="container">

            <Tabs defaultActiveKey="entrega" id="tabs-produtos" >
                <Tab eventKey="entrega" title="Entrega">
                    < ConsultarRetirada/>
                </Tab>

                <Tab eventKey="historico" title="Histórico">
                    <ConsultarRetirada/>
                </Tab>
                
            </Tabs>
        </Container>
    )
}
