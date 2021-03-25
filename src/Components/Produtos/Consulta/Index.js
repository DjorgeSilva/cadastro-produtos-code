import React, { useEffect, useState } from 'react'
import {
    Container,
    Busca,
    ResultadoBusca,
    TitleResultadoBusca,
    DataBusca,
    MoreInfoData,
    NoDataBusca,
} from "./ConsultaElements"
import { Row, Col, Popover, OverlayTrigger } from "react-bootstrap"
import { BiErrorAlt } from "react-icons/bi"
import firebase from "../../../utils/firebase"
import { BsSearch } from "react-icons/bs"

export const Consulta = () => {

    const [filtroBusca, setFiltroBusca] = useState([]);
    const [valorDigitado, setValorDigitado] = useState("");
    const [allProdutos, setAllProdutos] = useState([]);

    useEffect(() => {
        const produtosRef = firebase.database().ref("todo");
        produtosRef.on("value", (snapshot) => {
            const todos = snapshot.val();

            const recebeProdutosBD = [];

            for (let id in todos) {
                recebeProdutosBD.push({ id, ...todos[id] });
            }
            setAllProdutos(recebeProdutosBD);
        })
    }, [])


    function moneyFormatter(money) {
        const valor = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(money);

        return valor;

        // função formata valor numérico para R$ (moeda brasileira) e retorna valor formatado
    }

    useEffect(() => {
        setFiltroBusca( // filtra todos os dados de acordo com as condições dos inputs da variavél (data)
            allProdutos.filter(item => { //armazena cada item na variável - state (FilteredData)
                return item.desc_produto.toString().toLowerCase().indexOf(valorDigitado.toString().toLowerCase()) > -1
            })
        )
    }, [valorDigitado]) // executa toda vez que algum dos <= states é alterado 

    const openMoreInfo = () => {
        const moreInfo = document.querySelector(".more-info");

        moreInfo.style.display = "block";
    }

    // const item_popover = (
    //     <Popover id="popover-basic">
    //       <Popover.Title as="h3">Item</Popover.Title>
    //       <Popover.Content>
    //         And here's some <strong>amazing</strong> {allProdutos.item}
    //       </Popover.Content>
    //     </Popover>
    //   );


    const item_popover = ( // exibe quando hovering em rentabilidade mês 
        <Popover>
            <Popover.Title>
                item:
            </Popover.Title>
            <Popover.Content>
                0001
            </Popover.Content>
        </Popover>
    );

    const cod_produto_popover = ( // exibe quando hovering em rentabilidade mês 
        <Popover>
            <Popover.Title>
                Código de Barras:
            </Popover.Title>
            <Popover.Content>
                00000001
            </Popover.Content>
        </Popover>
    );

    //   const item_popover = ({data}) => {
    //     return(
    //         <Popover id="popover-basic">
    //         <Popover.Title as="h3">Item</Popover.Title>
    //         <Popover.Content>
    //           And here's some <strong>amazing</strong> content. It's very engaging.
    //           right?
    //         </Popover.Content>
    //       </Popover>
    //     )
    // }


    return (


        <Container>
            <h1>Consultar Produtos</h1>
            <Busca>

                <div className="wrap-filtros">

                    <div className="box-filtros">
                        <input type="checkbox" id="produtos" name="produtos" />
                        <label for="produtos">Produtos</label>
                    </div>

                    <div className="box-filtros">
                        <input type="checkbox" id="codigo" name="codigo" />
                        <label for="codigo">Código</label>
                    </div>

                    <div className="box-filtros">
                        <input type="checkbox" id="num_serie" name="num_serie" />
                        <label for="num_serie">Nº Série</label>
                    </div>

                    <div className="box-filtros">
                        <input type="checkbox" id="localization" name="localization" />
                        <label for="localization">Localização</label>
                    </div>

                </div>

                <div className="box-busca">
                    <input type="search" id="busca" name="busca" placeholder="Pesquisar por produto..." value={valorDigitado} onChange={((e) => setValorDigitado(e.target.value))} />
                    <BsSearch className="icone-busca" />
                </div>

            </Busca>

            <ResultadoBusca>

                <TitleResultadoBusca>
                    <div className="container" style={{ maxWidth: '100%' }}>
                        <Row style={{ margin: 0, maxWidth: "100%" }}>
                            <Col xs={1} className="coluna-titulo-busca">
                                <p>Item</p>
                            </Col>

                            <Col xs={2} className="coluna-titulo-busca">
                                <p>Código de Barras</p>
                            </Col>

                            <Col xs={2} className="coluna-titulo-busca">
                                <p>Produto</p>
                            </Col>

                            <Col xs={1} className="coluna-titulo-busca">
                                <p>Qtde</p>
                            </Col>

                            <Col xs={1} className="coluna-titulo-busca">
                                <p>Kit</p>
                            </Col>

                            <Col xs={1} className="coluna-titulo-busca">
                                <p>UND</p>
                            </Col>

                            <Col xs={1} className="coluna-titulo-busca">
                                <p>Código</p>
                            </Col>

                            <Col xs={2} className="coluna-titulo-busca">
                                <p>Localização</p>
                            </Col>

                            <Col xs={1} className="coluna-titulo-busca">
                                <p>Custo</p>
                            </Col>

                        </Row>
                    </div>

                </TitleResultadoBusca>

                {filtroBusca.length > 0 ? filtroBusca.map((item) => {
                    return (
                        <>
                            <DataBusca onClick={console.log("teste")} onCLick={openMoreInfo}>
                                <div className="container" style={{ maxWidth: '100%' }}>
                                    <Row style={{ margin: 0, maxWidth: "100%" }}>

                                        <Col xs={12} lg={1} onCLick={openMoreInfo} className="coluna-resultado-busca" style={{ position: "relative", top: 0, left: 0 }}>
                                            <OverlayTrigger
                                                trigger="hover"
                                                placement="top"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={item_popover}
                                            >
                                                <>
                                                    <div className="line-info-produto">
                                                        <span className="title-mobile">Item: </span>
                                                    </div>
                                                    <div className="line-info-produto">
                                                        <p>00000</p>
                                                    </div>
                                                </>

                                            </OverlayTrigger>
                                        </Col>





                                        <Col xs={12} lg={2} className="coluna-resultado-busca">
                                            <OverlayTrigger
                                                trigger="hover"
                                                placement="top"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={cod_produto_popover}
                                            >
                                                <>
                                                    <div className="line-info-produto">
                                                        <span className="title-mobile">Código Barras: </span>
                                                    </div>
                                                    <div className="line-info-produto">
                                                        <p>{item.cod_barras}</p>
                                                    </div>
                                                </>

                                            </OverlayTrigger>

                                        </Col>

                                        <Col xs={12} lg={2} className="coluna-resultado-busca">
                                            <>
                                                <div className="line-info-produto">
                                                    <span className="title-mobile">Produtos: </span>
                                                </div>
                                                <div className="line-info-produto">
                                                    <p style={{ textTransform: 'uppercase' }}>{item.desc_produto}</p>
                                                </div>
                                            </>

                                        </Col>

                                        <Col xs={12} lg={1} className="coluna-resultado-busca">
                                            <>
                                                <div className="line-info-produto">
                                                    <span className="title-mobile">Qtde: </span>
                                                </div>
                                                <div className="line-info-produto">
                                                    <p>{item.qtd}</p>
                                                </div>
                                            </>
                                        </Col>

                                        <Col xs={12} lg={1} className="coluna-resultado-busca">
                                            <>
                                                <div className="line-info-produto">
                                                    <span className="title-mobile">Kit: </span>
                                                </div>
                                                <div className="line-info-produto">
                                                    <p style={{ textTransform: 'uppercase' }}>{item.kit}</p>
                                                </div>
                                            </>
                                        </Col>

                                        <Col xs={12} lg={1} className="coluna-resultado-busca">
                                            <>
                                                <div className="line-info-produto">
                                                    <span className="title-mobile">Und: </span>
                                                </div>
                                                <div className="line-info-produto">
                                                    <p style={{ textTransform: 'uppercase' }}> {item.und}</p>
                                                </div>
                                            </>
                                        </Col>

                                        <Col xs={12} lg={1} className="coluna-resultado-busca">
                                            <>
                                                <div className="line-info-produto">
                                                    <span className="title-mobile">Código: </span>
                                                </div>
                                                <div className="line-info-produto">
                                                    <p>{item.cod_interno}</p>
                                                </div>
                                            </>
                                        </Col>

                                        <Col xs={12} lg={2} className="coluna-resultado-busca">
                                            <>
                                                <div className="line-info-produto">
                                                    <span className="title-mobile">Localização: </span>
                                                </div>
                                                <div className="line-info-produto">
                                                    <p>{item.localizacao_produto}</p>
                                                </div>
                                            </>
                                        </Col>

                                        <Col xs={12} lg={1} className="coluna-resultado-busca">
                                            <>
                                                <div className="line-info-produto">
                                                    <span className="title-mobile">Custo: </span>
                                                </div>
                                                <div className="line-info-produto">
                                                    <p>{moneyFormatter(item.preco_compra)}</p>
                                                </div>
                                            </>
                                        </Col>

                                    </Row>
                                </div>
                            </DataBusca>

                            {/* <MoreInfoData className="more-info">
                                <h1>Teste</h1>
                            </MoreInfoData> */}
                        </>

                    )
                }) :
                    <NoDataBusca>
                        <div className="no-data-message">
                            <p><BiErrorAlt className="icone-no-data" /> Nenhum produto encontrado <BiErrorAlt className="icone-no-data" /></p>
                        </div>
                    </NoDataBusca>
                }

            </ResultadoBusca>
        </Container >
    )
}
