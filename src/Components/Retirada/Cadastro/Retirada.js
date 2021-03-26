import React, { useState } from 'react'
import { Container } from "./RetiradaElements"
import { Col, Row } from "react-bootstrap"
import martelo from '../../../img/martelo.png'
import firebase from "../../../utils/firebase"
import {Recibo} from '../Recibo/Recibo'

export const Retirada = ({ recebeData }) => {

    const [qtd_retirado, setQtd_retirado] = useState("");
    const [numero_placa, setNumero_placa] = useState("");
    const [requisitante, setRequisitante] = useState("");
    const [departamento, setDepartamento] = useState("");

    const handleRetirada = (e) => {
        e.preventDefault();

        const produtosRef = firebase.database().ref("produtos_retirados");

        if (qtd_retirado && numero_placa && requisitante && departamento) {

            const produtosObj = {
                ...recebeData,
                qtd_retirado,
                numero_placa,
                requisitante,
                departamento 
            };

            produtosRef.push(produtosObj)

            alert("produto adiconado em recibo com sucesso!")

            var inputs = document.querySelectorAll('input');
            inputs.forEach(input =>  input.value = '');


        } else {
            alert("Preencha todos os campos.")
        }

    }


    return (
        <>
        <Container>

            <form id="form-retirada-produtos">
                <Row>

                    <Col xs={12} md={4} className="coluna-img">
                        <div className="box-img-entrega">
                            <img src={martelo} alt="" />
                        </div>
                    </Col>

                    <Col xs={12} md={8}>
                        <Row>
                            <Col xs={12} md={4}>
                                <label htmlFor="cod_barras">Código de barras: </label>
                                <input type="number" name="cod_barras" id="cod_barras" className="input" value={recebeData.cod_barras} />
                            </Col>

                            <Col xs={12} md={4}>
                                <label htmlFor="desc_produto">Produto: </label>
                                <input type="text" name="desc_produto" id="desc_produto" className="input" value={recebeData.desc_produto} />
                            </Col>

                            <Col xs={12} md={4}>
                                <label htmlFor="cod_interno">Código Interno: </label>
                                <input type="number" name="cod_interno" id="cod_interno" className="input" value={recebeData.cod_interno} />
                            </Col>

                            <Col xs={12} md={4}>
                                <label htmlFor="localizacao">Localização:</label>
                                <input type="text" name="localizacao" id="localizacao" className="input" value={recebeData.localizacao_produto} />
                            </Col>

                            <Col xs={12} md={4}>
                                <label htmlFor="qtd">Quantidade: </label>
                                <input type="number" name="qtd" id="qtd" className="input" onChange={(e) => setQtd_retirado(e.target.value)} />
                            </Col>

                            <Col xs={12} md={4}>
                                <label htmlFor="qtd">UND: </label>
                                <input type="text" name="und" id="und" className="input" value={recebeData.und}/>
                            </Col>

                            <Col xs={12} md={4}>
                                <label htmlFor="numero_placa">Nº da Placa: </label>
                                <input type="text" name="numero_placa" id="numero_placa" className="input" onChange={(e) => setNumero_placa(e.target.value)} />
                            </Col>


                            <Col xs={12} md={4}>
                                <label htmlFor="requisitante">Requisitante:</label>
                                <input type="text" name="requisitante" id="requisitante"className="input" onChange={(e) => setRequisitante(e.target.value)} />
                            </Col>

                            <Col xs={12} md={4}>
                                <label htmlFor="departamento">Departamento:</label>
                                <input type="text" name="departamento" id="departamento" className="input" onChange={(e) => setDepartamento(e.target.value)} />
                            </Col>

                        </Row>
                    </Col>

                </Row>

                <button type="submit" className="btn-submit" onClick={handleRetirada}>Salvar</button>

            </form>

            <Recibo/>

        </Container>

    

        </>
        

    )

}
