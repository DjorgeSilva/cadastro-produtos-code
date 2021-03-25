import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 20px;

    h1{
        width: 100%;
        font-size: clamp(1.2rem, 2.5vw, 2rem);
        text-transform: uppercase;
        text-align: center;
        color: ${props => props.theme.ternary_color};
        margin-bottom: 30px;
        padding-top: 8px;
    }


`

export const Busca = styled.div`
    width: 100%;
    height: 40px;
    background: ${props => props.theme.ternary_color};
    border-radius: 50px;
    padding: 5px  20px;
    
    display: flex;

    .wrap-filtros{
        width: 70%;
        display: flex;
        padding-top: 3px;
        .box-filtros{
            margin-right: 10px;
            label{
                font-weight: bold;
                color: ${props => props.theme.font_color};
                margin-left: 5px;
            }
        }

        @media (max-width: 990px){
            display: none;
        }
    }

    .box-busca{
        width: 30%;
        height: 100%;
        position: relative;

        @media (max-width: 990px){
            width: 100%;
        }


        input{
            -webkit-appearance:none;
            width: 100%;
            height: 30px;
            padding-left: 15px;
            border: none;
            border-radius: 50px;
            outline: none;
        }

        input[type="search"]::-webkit-search-cancel-button {
            display: none;
        }

        input:focus + .icone-busca,
        .icone-busca:hover{
            color: red;
            cursor: pointer;
        }

        .icone-busca{
            position: absolute;
            top: 7px;
            right: 10px;
        }
    }

    `

export const ResultadoBusca = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 10px;

    p{
        font-size: clamp(.8rem, 1vw, .9rem);
    }

 `

export const TitleResultadoBusca = styled.div`
    width: 100%;
    height: 30px;
    background: #fff;
    margin: 0 auto;

    @media (max-width: 990px){
        display: none;
    }

    

    .coluna-titulo-busca{
        width: 100%;
        height: 30px;
        border: 1px solid ${props => props.theme.ternary_color};
        border-bottom: none;
        padding-top: 4px;
        font-weight: bold;
    }

`

export const DataBusca = styled.div`
    width: 100%;
    height: 30px;
    background: ${props => props.theme.ternary_color};
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover .coluna-resultado-busca{
        background: #000;
        color: #fff;
    }

    @media (max-width: 990px){
        height: fit-content;
        margin-top: 20px;
        border-radius: 10px;
        padding: 10px 0;
    }

    .coluna-resultado-busca{
        height: 30px;
        border: 1px solid ${props => props.theme.secundary_color};
        overflow: hidden;
        padding-top: 3px;

        /* @media (max-width: 985px){
            height: fit-content;
            overflow: hidden;
        } */


        @media (max-width: 990px){
            display: flex;
        }

        .line-info-produto{
            width: 100%;

            @media (max-width: 990px){
                display: 50%;
            }


            p{
                font-size: clamp(.8rem, 1vw, .9rem);
                font-weight: bold;  
                float: right;

                @media (min-width: 990px){
                    float: left;
                }
            }

            .title-mobile{
                margin-right: 5px;

                @media (min-width: 990px){
                    display:none;
                }
        }
        }



        p{
            font-size: clamp(.8rem, 1vw, .9rem);
            font-weight: bold;  
        }

        
        .title-mobile{
            margin-right: 5px;
            font-weight: bold;  

            @media (min-width: 990px){
                 display:none;
            }
        } 
    }
`

// export const MoreInfoData = styled.div`
//     display: none;
//     width: 100%;
//     height: 200px;
//     background: red;
// `

export const NoDataBusca = styled.div`
    width: 100%;
    height: 100px;
    background: ${props => props.theme.ternary_color};;
    
    display: flex;
    justify-content: center;
    align-items: center;

    .no-data-message{
        border-bottom: 5px solid red;
        margin: 5px 0;
        p{
            font-size: 1.5rem;
            margin-top: 2px;
            .icone-no-data{
                color: #ff0000;
            }
        }
    }
`