import React, { useState } from 'react'
import { Container, Header } from './CadastroElements'
import firebase from '../../../utils/firebase'
import { Row, Col } from "react-bootstrap"

export const Cadastro = () => {
    const [cod_barras, setCod_barras] = useState("");
    const [desc_produto, setDesc_produto] = useState("");
    const [qtd, setQtd] = useState("");
    const [cod_interno, setCod_interno] = useState("");
    const [marca, setMarca] = useState("");
    const [categoria, setCategoria] = useState("");
    const [und, setUnd] = useState("");
    const [kit, setKit] = useState("");
    const [fornecedor, setFornecedor] = useState("");
    const [localizacao_produto, setLocalizacao_produto] = useState("");
    const [data_compra, setData_compra] = useState("");
    const [data_fabricacao, setData_fabricacao] = useState("");
    const [data_validade, setData_validade] = useState("");
    const [preco_venda, setPreco_venda] = useState("");
    const [preco_compra, setPreco_compra] = useState("");
    const [loader, setLoader] = useState(false);

    const handlerSubmit = (e) => {
        e.preventDefault();

        const produtosRef = firebase.database().ref("todo");

        if (cod_barras && desc_produto && cod_interno && qtd && marca && categoria && und && kit && fornecedor
            && localizacao_produto && data_compra && data_fabricacao && data_validade && data_validade && preco_venda && preco_compra) {

            const produtosObj = {
                cod_barras: cod_barras,
                desc_produto: desc_produto,
                cod_interno: cod_interno,
                qtd: qtd,
                marca: marca,
                categoria: categoria,
                und: und,
                kit: kit,
                fornecedor: fornecedor,
                localizacao_produto: localizacao_produto,
                data_compra: data_compra,
                data_fabricacao: data_fabricacao,
                data_validade: data_validade,
                preco_venda: preco_venda,
                preco_compra: preco_compra
            };

            produtosRef.push(produtosObj)

            alert("produto cadastrado com sucesso!")

            setCod_barras("");
            setDesc_produto("");
            setCod_interno("");
            setQtd("");
            setMarca("");
            setCategoria("");
            setUnd("");
            setKit("");
            setFornecedor("");
            setLocalizacao_produto("");
            setData_compra("");
            setData_fabricacao("")
            setData_validade("");
            setPreco_venda("");
            setPreco_compra("");
        } else {
            alert("Preencha todos os campos.")
        }

    };



    return (
        <>

            <Container className="container">
                <h1>Cadastrar Produtos</h1>

                <form onSubmit={handlerSubmit}>
                    <Row>
                        <Col xs={12} md={4}>
                            <label htmlFor="cod_barras">Código de barras: </label>
                            <input type="number" name="cod_barras" id="cod_barras" value={cod_barras} onChange={(e) => setCod_barras(e.target.value)} />
                        </Col>

                        <Col xs={12} md={4}>
                            <label htmlFor="desc_produto">Produto: </label>
                            <input type="text" name="desc_produto" id="desc_produto" value={desc_produto} onChange={(e) => setDesc_produto(e.target.value)} />
                        </Col>

                        <Col xs={12} md={4}>
                            <label htmlFor="cod_interno">Código Interno: </label>
                            <input type="number" name="cod_interno" id="cod_interno" value={cod_interno} onChange={(e) => setCod_interno(e.target.value)} />
                        </Col>

                        <Col xs={12} md={4}>
                            <label htmlFor="marca">Marca / Modelo: </label>
                            <input type="text" name="marca" id="marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
                        </Col>

                        <Col xs={12} md={4}>
                            <label htmlFor="categoria">Categoria: </label>
                            <select name="categoria" id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                <option value="PEÇA">PEÇA</option>
                                <option value="EQUIPAMENTO">EQUIPAMENTO</option>
                                <option value="Categoria 3">Categoria 3</option>
                                <option value="Categoria 4">Categoria 4</option>
                                <option value="Categoria 5">Categoria 5</option>
                                <option value="Categoria 6">Categoria 6</option>
                                <option value="Categoria 7">Categoria 7</option>
                            </select>
                        </Col>

                        <Col xs={12} md={4}>
                            <label htmlFor="qtd">Quantidade </label>
                            <input type="number" name="qtd" id="qtd" value={qtd} onChange={(e) => setQtd(e.target.value)} />
                        </Col>

                        <Col xs={12} md={4}>
                            <label htmlFor="und">Unid. Medida: </label>
                            <select name="und" id="und" value={und} onChange={(e) => setUnd(e.target.value)}>
                                <option value="MT">MT</option>
                                <option value="UND">UND</option>
                                <option value="KG">KG</option>
                                <option value="LT">LT</option>
                                <option value="CX">CX</option>
                                <option value="PC">PC</option>
                                <option value="FD">FD</option>
                            </select>
                        </Col>

                        <Col xs={12} md={4}>
                            <label htmlFor="kit">Kit: </label>
                            <select name="kit" id="kit" value={kit} onChange={(e) => setKit(e.target.value)}>
                                <option value="Kit 1">Kit 1</option>
                                <option value="Kit 2">Kit 2</option>
                                <option value="Kit 3">Kit 3</option>
                                <option value="Kit 4">Kit 4</option>
                                <option value="Kit 5">Kit 5</option>
                            </select>
                        </Col>

                        <Col xs={12} md={4}>
                            <label htmlFor="localizacao">Localização:</label>
                            <input type="text" name="localizacao" id="localizacao" value={localizacao_produto} onChange={(e) => setLocalizacao_produto(e.target.value)} />
                        </Col>

                        <Col xs={12} md={4}>
                            <label htmlFor="fornecedor">fornecedor:</label>
                            <input type="text" name="fornecedor" id="fornecedor" value={fornecedor} onChange={(e) => setFornecedor(e.target.value)} />
                        </Col>


                        <Col xs={12} md={4}>
                            <label htmlFor="data_compra">Data da Compra: </label>
                            <input type="date" name="data_compra" id="data_compra" value={data_compra} onChange={(e) => setData_compra(e.target.value)} />

                        </Col>

                        <Col xs={12} md={4}>
                            <label htmlFor="data_fabricacao">Data fabricação: </label>
                            <input type="date" name="data_fabricacao" id="data_fabricacao" value={data_fabricacao} onChange={(e) => setData_fabricacao(e.target.value)} />
                        </Col>

                        <Col xs={12} md={4}>
                            <label htmlFor="data_validade">Data da Validade: </label>
                            <input type="date" name="data_validade" id="data_validade" value={data_validade} onChange={(e) => setData_validade(e.target.value)} />
                        </Col>

                        <Col xs={12} md={4}>
                            <label htmlFor="preco_compra">Preço de Compra: </label>
                            <input type="number" name="preco_compra" id="preco_compra" value={preco_compra} onChange={(e) => setPreco_compra(e.target.value)} />
                        </Col>


                        <Col xs={12} md={4}>
                            <label htmlFor="preco_venda">Preço de venda: </label>
                            <input type="number" name="preco_venda" id="preco_venda" value={preco_venda} onChange={(e) => setPreco_venda(e.target.value)} />
                        </Col>


                    </Row>

                    <button type="submit" className="btn-submit">Cadastrar</button>

                </form>
            </Container>
        </>

    )
}
