import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height:fit-content;
    background-color: ${props => props.theme.ternary_color};
    margin: 0 auto;
    padding-bottom: 10px;

    @media (max-width: 750px){
        background-color: transparent;
    }

    h1{
        width: 100%;
        font-size: clamp(1.2rem, 2.5vw, 2rem);
        text-transform: uppercase;
        text-align: center;
        color: ${props => props.theme.ternary_color};
        background: #000;
        padding: 20px;
    }
    button{
        display: block;
        width: 200px;
        padding: 10px 0;
        margin: 40px auto;
        background: #000;
        color: ${props => props.theme.ternary_color};
        border: none;

        &:hover{
            background: #fff;
            color: #000;
        }

        @media (max-width: 750px){
            color: #000;
            background: ${props => props.theme.ternary_color};
        }


    }

`

export const TitleRecibo = styled.div`
    width: 100%;
    height: 30px;
    background-color: #fff;

    @media (max-width: 750px){
        display: none;
    }

    .coluna-recibo-titulo{
        height: 30px;
        border: 1px solid #cacaca;
        padding-top: 2px;
        font-weight: bold;
        padding-left: 10px;
    
        p{
            font-size: clamp(.8rem, 2.5vw, 1rem);
        }
    }

`

export const Produtos = styled.div`
    width: 100%;
    height: fit-content;
    background-color: transparent;

    @media (max-width: 750px){
        height: fit-content;
    }

    

    .row-resultado{

        cursor: pointer;
        margin: 0 auto;

        &:hover{
            background-color: #000;
            color: #fff;
        }

        @media (max-width: 750px){
            height: 200px;
            border: 1px solid #fff;
            margin-bottom: 20px;
            background: ${props => props.theme.ternary_color};
            padding: 15px;
         }


        .coluna-recibo-titulo{
            height: 30px;
            border: 1px solid #fff;
            font-weight: bold;
            padding-left: 10px;

            @media (max-width: 750px){
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .inner-coluna-desc, .inner-coluna-resultado{
                width: 50%;
                height: 30px;
                padding-top: 5px;

                p{
                    font-size: clamp(.8rem, 2.5vw, 1rem);
                }
            }

            .inner-coluna-desc{
                @media (min-width: 750px){
                    display: none;
                }
            }


            .inner-coluna-resultado{
                @media (min-width: 750px){
                    width: 100%;
                }
                
            }   

    }
    }
`