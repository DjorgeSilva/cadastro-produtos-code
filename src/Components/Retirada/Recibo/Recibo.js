import React, { useEffect, useState } from 'react'
import { Container, TitleRecibo, Produtos } from "./ReciboElements"
import { Row, Col } from 'react-bootstrap'
import firebase from "../../../utils/firebase"

export const Recibo = () => {

    const [allProdutos, setAllProdutos] = useState([]);

    useEffect(() => {
        const produtosRef = firebase.database().ref("produtos_retirados");
        produtosRef.on("value", (snapshot) => {
            const todos = snapshot.val();

            const recebeProdutosBD = [];

            for (let id in todos) {
                recebeProdutosBD.push({ id, ...todos[id] });
            }
            setAllProdutos(recebeProdutosBD);
        })
    }, [])


    return (
        <Container>
            <h1>Resumo de Entrega</h1>

            <TitleRecibo>
                <Row className="container-fluid" style={{ margin: "0 auto" }}>
                    <Col xs={3} className="coluna-recibo-titulo">
                        <p>Código</p>
                    </Col>

                    <Col xs={3} className="coluna-recibo-titulo">
                        <p>Produto</p>
                    </Col>

                    <Col xs={3} className="coluna-recibo-titulo">
                        <p>Und</p>
                    </Col>

                    <Col xs={3} className="coluna-recibo-titulo">
                        <p>Qtd</p>
                    </Col>
                </Row>
            </TitleRecibo>

            <Produtos>
                {allProdutos &&
                    allProdutos.map((item) => {

                        return (

                            <Row className="row-resultado container-fluid">
                                <Col xs={12} md={3} className="coluna-recibo-titulo">
                                    <div className="inner-coluna-desc">
                                        <p>Código:</p>
                                    </div>

                                    <div className="inner-coluna-resultado">
                                        <p>{item.cod_interno}</p>
                                    </div>
                                </Col>

                                <Col xs={12} md={3} className="coluna-recibo-titulo">
                                    <div className="inner-coluna-desc">
                                        <p>Produto:</p>
                                    </div>

                                    <div className="inner-coluna-resultado">
                                        <p>{item.desc_produto}</p>
                                    </div>
                                </Col>

                                <Col xs={12} md={3} className="coluna-recibo-titulo">
                                    <div className="inner-coluna-desc">
                                        <p>Und:</p>
                                    </div>

                                    <div className="inner-coluna-resultado">
                                        <p><p>{item.und}</p></p>
                                    </div>
                                </Col>

                                <Col xs={12} md={3} className="coluna-recibo-titulo">
                                    <div className="inner-coluna-desc">
                                        <p>Quantidade: </p>
                                    </div>

                                    <div className="inner-coluna-resultado">
                                        <p>{item.qtd}</p>
                                    </div>
                                </Col>
                            </Row>
                        )
                    })
                }

            </Produtos>

            <button type="btn-finalizar-entrega">Finalizar</button>

        </Container >
    )
}
