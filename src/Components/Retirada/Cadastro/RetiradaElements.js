import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 500px;
    background: ${props=> props.theme.ternary_color};
    padding-top: 20px;

    form{
        width: 100%;
        height: fit-content;
        padding: 0px 15px;
        background: ${props => props.theme.ternary_color};
        padding-bottom: 20px;

        display: flex;
        justify-content: center;
        flex-direction: column;

        @media (max-width: 750px){
            width: 100%;
        }

        h1{
            text-align: center;
            text-transform: uppercase;
        }

        label{
            margin-top: 20px;
            font-weight: bold;
        }
        input, 
        textarea,
        select{
            width: 100%;
            outline: none;
            padding-left: 10px;
            text-transform: uppercase;
        }
        input,
        select{
            height: 35px;
        }
        textarea{
            padding-top: 15px;
        }

        .coluna-img{
            display: flex;
            justify-content: center;
            align-items: center;

            .box-img-entrega{
                width: 80%;
                height: 80%;
        
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    margin-top: 10px;
                }
            }
        }


        button{
            width: 200px;
            margin: 0 auto;
            margin-top: 40px;
            padding: 10px 0;
            border: none;
            background: black;
            color: ${props => props.theme.ternary_color};
            
            &:hover{
                background: #fff;
                color: #000;
            }
        }

    }
`